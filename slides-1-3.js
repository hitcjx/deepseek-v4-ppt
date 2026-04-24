const PptxGenJS = require('pptxgenjs');
const pptx = new PptxGenJS();

// 学术风格配色 - Midnight Executive
const colors = {
    primary: '1E2761',      // 深蓝
    secondary: '408EC6',    // 中蓝
    accent: 'CADCFC',       // 浅蓝
    text: '1A1A1A',         // 深灰
    textLight: 'FFFFFF',    // 白色
    bgLight: 'F8F9FA'       // 浅灰背景
};

// 设置演示文稿属性
pptx.title = 'DeepSeek-V4 技术报告';
pptx.author = 'DeepSeek Team';
pptx.subject = 'DeepSeek-V4 Technical Report';

// ========== 第1页：标题页 ==========
const slide1 = pptx.addSlide();
slide1.background = { color: colors.primary };

// 主标题
slide1.addText('DeepSeek-V4', {
    x: 0.5, y: 2.5, w: 9, h: 1.2,
    fontSize: 54, fontFace: 'Arial', bold: true,
    color: colors.textLight, align: 'center'
});

// 副标题
slide1.addText('Technical Report', {
    x: 0.5, y: 3.6, w: 9, h: 0.6,
    fontSize: 28, fontFace: 'Arial',
    color: colors.accent, align: 'center'
});

// 发布信息
slide1.addText('April 24, 2026', {
    x: 0.5, y: 4.5, w: 9, h: 0.5,
    fontSize: 18, fontFace: 'Arial',
    color: colors.secondary, align: 'center'
});

// 底部装饰线
slide1.addShape(pptx.ShapeType.rect, {
    x: 2, y: 5.5, w: 6, h: 0.05,
    fill: { color: colors.secondary }
});

// ========== 第2页：概览 ==========
const slide2 = pptx.addSlide();
slide2.background = { color: colors.bgLight };

// 标题栏
slide2.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide2.addText('概览 Overview', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// 核心定位
slide2.addText('核心定位', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.primary
});

slide2.addText('让普通人用上 1M 上下文的 Agent 模型', {
    x: 0.5, y: 2.1, w: 9, h: 0.5,
    fontSize: 18, fontFace: 'Arial',
    color: colors.text
});

// 关键数据
slide2.addText('关键数据', {
    x: 0.5, y: 2.9, w: 9, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.primary
});

const stats = [
    ['论文页数', '58 页技术报告'],
    ['模型版本', 'V4-Pro / V4-Flash'],
    ['上下文长度', '1,000,000 tokens'],
    ['Codeforces 评分', '3206 (开源第一)']
];

let yPos = 3.4;
stats.forEach(([label, value]) => {
    slide2.addText(`• ${label}: ${value}`, {
        x: 0.7, y: yPos, w: 8.5, h: 0.4,
        fontSize: 16, fontFace: 'Arial',
        color: colors.text
    });
    yPos += 0.5;
});

// ========== 第3页：架构创新 ==========
const slide3 = pptx.addSlide();
slide3.background = { color: colors.bgLight };

// 标题栏
slide3.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide3.addText('架构创新 Architecture', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// mHC 残差升级
slide3.addText('mHC 残差升级架构', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide3.addText('改进的残差连接机制，提升深层网络训练稳定性', {
    x: 0.5, y: 2.1, w: 9, h: 0.5,
    fontSize: 16, fontFace: 'Arial',
    color: colors.text
});

// Anticipatory Routing
slide3.addText('Anticipatory Routing', {
    x: 0.5, y: 2.9, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide3.addText('预测性路由机制，动态分配计算资源', {
    x: 0.5, y: 3.4, w: 9, h: 0.5,
    fontSize: 16, fontFace: 'Arial',
    color: colors.text
});

// SwiGLU Clamping
slide3.addText('SwiGLU Clamping', {
    x: 0.5, y: 4.2, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide3.addText('激活值裁剪技术，控制数值范围提升训练效率', {
    x: 0.5, y: 4.7, w: 9, h: 0.5,
    fontSize: 16, fontFace: 'Arial',
    color: colors.text
});

// 保存
pptx.writeFile({ fileName: 'DeepSeek-V4-Report-P1.pptx' });
console.log('前3页已生成: DeepSeek-V4-Report-P1.pptx');
