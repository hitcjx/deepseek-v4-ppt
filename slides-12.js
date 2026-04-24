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

// ========== 第12页：总结 ==========
const slide12 = pptx.addSlide();
slide12.background = { color: colors.primary };

// 主标题
slide12.addText('总结 Summary', {
    x: 0.5, y: 1.0, w: 9, h: 1.0,
    fontSize: 44, fontFace: 'Arial', bold: true,
    color: colors.textLight, align: 'center'
});

// 核心贡献
slide12.addText('核心贡献', {
    x: 0.5, y: 2.2, w: 9, h: 0.5,
    fontSize: 24, fontFace: 'Arial', bold: true,
    color: colors.accent
});

const contributions = [
    'mHC 残差升级架构 - 深层网络训练稳定性',
    'Agentic 数据预训练 - 原生工具调用能力',
    'Anticipatory Routing - 动态计算资源分配',
    'SwiGLU Clamping - 数值稳定性优化',
    '1M 上下文窗口 - 实用化长文本处理'
];

let yPos = 2.8;
contributions.forEach(item => {
    slide12.addText(`• ${item}`, {
        x: 1.0, y: yPos, w: 8, h: 0.4,
        fontSize: 16, fontFace: 'Arial', color: colors.textLight
    });
    yPos += 0.5;
});

// 底部信息
slide12.addText('DeepSeek-V4: 让普通人用上 1M 上下文的 Agent 模型', {
    x: 0.5, y: 5.5, w: 9, h: 0.5,
    fontSize: 18, fontFace: 'Arial', italic: true,
    color: colors.secondary, align: 'center'
});

// 保存
pptx.writeFile({ fileName: 'DeepSeek-V4-Report-P6.pptx' });
console.log('第12页已生成: DeepSeek-V4-Report-P6.pptx');
