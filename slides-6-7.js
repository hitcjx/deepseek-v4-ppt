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

// ========== 第6页：定价策略 ==========
const slide6 = pptx.addSlide();
slide6.background = { color: colors.bgLight };

// 标题栏
slide6.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide6.addText('定价策略 Pricing', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// V4-Pro 价格
slide6.addText('V4-Pro', {
    x: 0.5, y: 1.6, w: 4, h: 0.5,
    fontSize: 24, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const proPrices = [
    ['缓存命中', '¥1 / 百万 tokens'],
    ['缓存未命中', '¥12 / 百万 tokens'],
    ['输出', '¥24 / 百万 tokens']
];

let yPos = 2.2;
proPrices.forEach(([type, price]) => {
    slide6.addText(`${type}: ${price}`, {
        x: 0.7, y: yPos, w: 4, h: 0.4,
        fontSize: 16, fontFace: 'Arial', color: colors.text
    });
    yPos += 0.5;
});

// V4-Flash 价格
slide6.addText('V4-Flash', {
    x: 5.5, y: 1.6, w: 4, h: 0.5,
    fontSize: 24, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const flashPrices = [
    ['缓存命中', '¥0.2 / 百万 tokens'],
    ['缓存未命中', '¥1 / 百万 tokens'],
    ['输出', '¥2 / 百万 tokens']
];

yPos = 2.2;
flashPrices.forEach(([type, price]) => {
    slide6.addText(`${type}: ${price}`, {
        x: 5.7, y: yPos, w: 4, h: 0.4,
        fontSize: 16, fontFace: 'Arial', color: colors.text
    });
    yPos += 0.5;
});

// 性价比说明
slide6.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 4.2, w: 9, h: 1.2,
    fill: { color: colors.accent },
    line: { color: colors.secondary, width: 1 }
});

slide6.addText('Flash 版本价格仅为 Pro 的 1/5 ~ 1/12，大幅降低使用门槛', {
    x: 0.7, y: 4.5, w: 8.6, h: 0.6,
    fontSize: 16, fontFace: 'Arial', bold: true,
    color: colors.primary, align: 'center'
});

// ========== 第7页：模型定位与愿景 ==========
const slide7 = pptx.addSlide();
slide7.background = { color: colors.bgLight };

// 标题栏
slide7.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide7.addText('定位与愿景 Vision', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// 核心定位
slide7.addText('核心定位', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide7.addText('"不是世界最佳，是让普通人用上"', {
    x: 0.7, y: 2.2, w: 8.5, h: 0.6,
    fontSize: 22, fontFace: 'Arial', italic: true,
    color: colors.primary, align: 'center'
});

// 关键特性
slide7.addText('关键特性', {
    x: 0.5, y: 3.0, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const features = [
    '1M 上下文窗口 - 处理长文档、代码库',
    '原生 Agent 能力 - 工具调用、多步推理',
    '高性价比 - Flash 版本成本极低',
    '开源友好 - 技术报告完全公开'
];

yPos = 3.5;
features.forEach(feature => {
    slide7.addText(`• ${feature}`, {
        x: 0.7, y: yPos, w: 8.5, h: 0.4,
        fontSize: 16, fontFace: 'Arial', color: colors.text
    });
    yPos += 0.5;
});

// 保存
pptx.writeFile({ fileName: 'DeepSeek-V4-Report-P3.pptx' });
console.log('第6-7页已生成: DeepSeek-V4-Report-P3.pptx');
