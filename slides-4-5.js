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

// ========== 第4页：训练方法 ==========
const slide4 = pptx.addSlide();
slide4.background = { color: colors.bgLight };

// 标题栏
slide4.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide4.addText('训练方法 Training Method', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// Agentic 数据直接灌入预训练
slide4.addText('Agentic 数据直接灌入预训练', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide4.addText('• 突破传统"先预训练后微调"范式', {
    x: 0.7, y: 2.2, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});
slide4.addText('• Agent 行为数据直接参与预训练阶段', {
    x: 0.7, y: 2.7, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});
slide4.addText('• 原生支持工具调用、多步推理能力', {
    x: 0.7, y: 3.2, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});

// 1M 上下文训练
slide4.addText('1M 上下文训练策略', {
    x: 0.5, y: 3.9, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide4.addText('• 渐进式长度扩展：4K → 32K → 128K → 1M', {
    x: 0.7, y: 4.5, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});
slide4.addText('• 稀疏注意力机制降低计算复杂度', {
    x: 0.7, y: 5.0, w: 8.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});

// ========== 第5页：性能对比 ==========
const slide5 = pptx.addSlide();
slide5.background = { color: colors.bgLight };

// 标题栏
slide5.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide5.addText('性能对比 Performance', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// 代码能力
slide5.addText('代码能力', {
    x: 0.5, y: 1.6, w: 4, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide5.addText('Codeforces: 3206', {
    x: 0.7, y: 2.1, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});
slide5.addText('LiveCodeBench: 93.5', {
    x: 0.7, y: 2.5, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});
slide5.addText('开源模型中断档领先', {
    x: 0.7, y: 2.9, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: colors.secondary, italic: true
});

// 数学能力
slide5.addText('数学能力', {
    x: 5.5, y: 1.6, w: 4, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide5.addText('Putnam 数学竞赛: 满分', {
    x: 5.7, y: 2.1, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});

// 创意写作
slide5.addText('创意写作', {
    x: 0.5, y: 3.5, w: 4, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide5.addText('vs Claude: 45.9% 胜率', {
    x: 0.7, y: 4.0, w: 3.5, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});
slide5.addText('承认差距，诚实报告', {
    x: 0.7, y: 4.4, w: 3.5, h: 0.4,
    fontSize: 14, fontFace: 'Arial', color: 'C44536', italic: true
});

// 诚实声明框
slide5.addShape(pptx.ShapeType.rect, {
    x: 5.5, y: 3.5, w: 4, h: 1.5,
    fill: { color: colors.accent },
    line: { color: colors.secondary, width: 1 }
});

slide5.addText('"某些机制测出来有效，但不知道为什么"', {
    x: 5.7, y: 3.7, w: 3.6, h: 1.0,
    fontSize: 14, fontFace: 'Arial', italic: true,
    color: colors.primary, align: 'center'
});

// 保存
pptx.writeFile({ fileName: 'DeepSeek-V4-Report-P2.pptx' });
console.log('第4-5页已生成: DeepSeek-V4-Report-P2.pptx');
