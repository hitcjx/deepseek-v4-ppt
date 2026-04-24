const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();

// 学术风格配色 - Midnight Executive
const colors = {
    primary: '1E2761',
    secondary: '408EC6',
    accent: 'CADCFC',
    text: '1A1A1A',
    textLight: 'FFFFFF',
    bgLight: 'F8F9FA'
};

// 设置演示文稿属性
pptx.title = 'DeepSeek-V4 技术报告';
pptx.author = 'DeepSeek Team';

// ========== 第10页：技术细节 - SwiGLU Clamping ==========
const slide10 = pptx.addSlide();
slide10.background = { color: colors.bgLight };

// 标题栏
slide10.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide10.addText('技术细节：SwiGLU Clamping', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// 机制说明
slide10.addText('激活值裁剪技术', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide10.addText('限制 SwiGLU 激活函数的输出范围，稳定训练过程', {
    x: 0.5, y: 2.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});

// 核心设计
slide10.addText('核心设计', {
    x: 0.5, y: 2.8, w: 9, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const design = [
    '动态阈值：根据训练阶段自适应调整裁剪边界',
    '梯度保护：裁剪区域保持梯度流动，避免 dead neurons',
    '混合精度友好：减少 FP16 训练中的数值溢出',
    '零开销推理：训练时启用，推理时移除'
];

let yPos = 3.3;
design.forEach(item => {
    slide10.addText(`• ${item}`, {
        x: 0.7, y: yPos, w: 8.5, h: 0.4,
        fontSize: 15, fontFace: 'Arial', color: colors.text
    });
    yPos += 0.5;
});

// ========== 第11页：实验结果 - 长上下文 ==========
const slide11 = pptx.addSlide();
slide11.background = { color: colors.bgLight };

// 标题栏
slide11.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide11.addText('实验结果：长上下文能力', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// 测试基准
slide11.addText('测试基准', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const benchmarks = [
    ['Needle in a Haystack', '1M tokens 中定位特定信息', '准确率 99.2%'],
    ['Long Document QA', '长文档阅读理解', 'F1 Score 87.5'],
    ['Code Repository', '跨文件代码理解', 'Pass@1 78.3%'],
    ['Multi-hop Reasoning', '多跳推理任务', '准确率 82.1%']
];

yPos = 2.1;
benchmarks.forEach(([name, desc, result]) => {
    slide11.addText(`• ${name}`, {
        x: 0.7, y: yPos, w: 3, h: 0.35,
        fontSize: 14, fontFace: 'Arial', bold: true, color: colors.text
    });
    slide11.addText(`${desc}`, {
        x: 3.5, y: yPos, w: 3.5, h: 0.35,
        fontSize: 13, fontFace: 'Arial', color: colors.text
    });
    slide11.addText(`${result}`, {
        x: 7.2, y: yPos, w: 2, h: 0.35,
        fontSize: 14, fontFace: 'Arial', bold: true, color: colors.secondary
    });
    yPos += 0.45;
});

// 关键结论
slide11.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 1.0,
    fill: { color: colors.accent },
    line: { color: colors.secondary, width: 1 }
});

slide11.addText('1M 上下文窗口在实际任务中有效，\n而非仅理论支持', {
    x: 0.7, y: 4.4, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: 'Arial', bold: true,
    color: colors.primary, align: 'center'
});

// 保存
pptx.writeFile({ fileName: 'DeepSeek-V4-Report-P5.pptx' });
console.log('第10-11页已生成: DeepSeek-V4-Report-P5.pptx');
