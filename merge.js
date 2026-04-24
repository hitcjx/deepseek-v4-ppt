const PptxGenJS = require('pptxgenjs');
const fs = require('fs');
const JSZip = require('jszip');

async function mergePPTs() {
    const pptx = new PptxGenJS();
    
    // 设置演示文稿属性
    pptx.title = 'DeepSeek-V4 技术报告';
    pptx.author = 'DeepSeek Team';
    pptx.subject = 'DeepSeek-V4 Technical Report';
    
    // 要合并的文件（按顺序）
    const files = [
        'DeepSeek-V4-Report-P1.pptx',  // 1-3页
        'DeepSeek-V4-Report-P2.pptx',  // 4-5页
        'DeepSeek-V4-Report-P3.pptx',  // 6-7页
        'DeepSeek-V4-Report-P4.pptx',  // 8-9页
        'DeepSeek-V4-Report-P5.pptx',  // 10-11页
        'DeepSeek-V4-Report-P6.pptx'   // 12页
    ];
    
    // 读取并合并每个文件
    for (const file of files) {
        const data = fs.readFileSync(file);
        const zip = await JSZip.loadAsync(data);
        
        // 提取幻灯片内容
        const slides = [];
        zip.forEach((path, entry) => {
            if (path.startsWith('ppt/slides/slide') && path.endsWith('.xml')) {
                slides.push({ path, entry });
            }
        });
        
        // 按文件名排序
        slides.sort((a, b) => {
            const numA = parseInt(a.path.match(/slide(\d+)/)[1]);
            const numB = parseInt(b.path.match(/slide(\d+)/)[1]);
            return numA - numB;
        });
        
        console.log(`Processing ${file}: ${slides.length} slides`);
    }
    
    // 由于 PptxGenJS 不支持直接导入现有幻灯片，
    // 我们使用另一种方法：直接复制文件内容并重新编号
    
    // 创建新的合并文件
    const mergedZip = new JSZip();
    let slideCount = 0;
    let relCount = 0;
    
    // 基础结构
    const basePPTX = fs.readFileSync(files[0]);
    const baseZip = await JSZip.loadAsync(basePPTX);
    
    // 复制基础结构
    baseZip.forEach((path, entry) => {
        if (!path.startsWith('ppt/slides/') && !path.startsWith('ppt/_rels/presentation.xml.rels')) {
            mergedZip.file(path, entry.async('uint8array'));
        }
    });
    
    // 收集所有幻灯片
    const allSlides = [];
    const allSlideRels = [];
    
    for (const file of files) {
        const data = fs.readFileSync(file);
        const zip = await JSZip.loadAsync(data);
        
        // 获取幻灯片
        const slides = [];
        zip.forEach((path, entry) => {
            if (path.startsWith('ppt/slides/slide') && path.endsWith('.xml')) {
                slides.push({ path, entry, file });
            }
        });
        
        slides.sort((a, b) => {
            const numA = parseInt(a.path.match(/slide(\d+)/)[1]);
            const numB = parseInt(b.path.match(/slide(\d+)/)[1]);
            return numA - numB;
        });
        
        for (const slide of slides) {
            slideCount++;
            const content = await slide.entry.async('uint8array');
            allSlides.push({
                num: slideCount,
                content: content,
                originalPath: slide.path
            });
        }
    }
    
    // 写入所有幻灯片
    for (const slide of allSlides) {
        mergedZip.file(`ppt/slides/slide${slide.num}.xml`, slide.content);
    }
    
    // 创建关系文件
    let relsContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
    <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" Target="slideMasters/slideMaster1.xml"/>
    <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/presProps" Target="presProps.xml"/>
    <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/viewProps" Target="viewProps.xml"/>
    <Relationship Id="rId4" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/>\n`;
    
    for (let i = 1; i <= slideCount; i++) {
        relsContent += `    <Relationship Id="rId${4 + i}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/slide" Target="slides/slide${i}.xml"/>\n`;
    }
    
    relsContent += '</Relationships>';
    mergedZip.file('ppt/_rels/presentation.xml.rels', relsContent);
    
    // 更新 presentation.xml
    const presData = await baseZip.file('ppt/presentation.xml').async('text');
    let newPres = presData.replace(/<p:sldIdLst>.*?<\/p:sldIdLst>/s, '<p:sldIdLst>');
    
    for (let i = 1; i <= slideCount; i++) {
        newPres += `\n      <p:sldId id="${256 + i}" r:id="rId${4 + i}"/>`;
    }
    newPres = newPres.replace(/<p:sldIdLst>$/, '<p:sldIdLst>\n      ') + '\n    </p:sldIdLst>';
    
    mergedZip.file('ppt/presentation.xml', newPres);
    
    // 生成文件
    const output = await mergedZip.generateAsync({ type: 'nodebuffer' });
    fs.writeFileSync('DeepSeek-V4-Report-Full.pptx', output);
    
    console.log(`\n合并完成: DeepSeek-V4-Report-Full.pptx`);
    console.log(`总页数: ${slideCount}`);
}

mergePPTs().catch(console.error);
