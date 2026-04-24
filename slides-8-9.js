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

// ========== 第8页：技术细节 - mHC架构 ==========
const slide8 = pptx.addSlide();
slide8.background = { color: colors.bgLight };

// 标题栏
slide8.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide8.addText('技术细节：mHC 架构', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// mHC 说明
slide8.addText('Modified Hybrid Connection (mHC)', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide8.addText('残差连接的改进版本，解决深层网络训练不稳定问题', {
    x: 0.5, y: 2.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});

// 核心改进点
slide8.addText('核心改进', {
    x: 0.5, y: 2.8, w: 9, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const improvements = [
    '动态权重调整：根据层深度自适应调节残差权重',
    '梯度流优化：减少梯度消失/爆炸风险',
    '内存效率：相比标准残差连接节省 15% 激活内存',
    '收敛速度：训练迭代次数减少约 20%'
];

let yPos = 3.3;
improvements.forEach(item => {
    slide8.addText(`• ${item}`, {
        x: 0.7, y: yPos, w: 8.5, h: 0.4,
        fontSize: 15, fontFace: 'Arial', color: colors.text
    });
    yPos += 0.5;
});

// ========== 第9页：技术细节 - Anticipatory Routing ==========
const slide9 = pptx.addSlide();
slide9.background = { color: colors.bgLight };

// 标题栏
slide9.addShape(pptx.ShapeType.rect, {
    x: 0, y: 0, w: 10, h: 1.2,
    fill: { color: colors.primary }
});

slide9.addText('技术细节：Anticipatory Routing', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 32, fontFace: 'Arial', bold: true,
    color: colors.textLight
});

// 机制说明
slide9.addText('预测性路由机制', {
    x: 0.5, y: 1.6, w: 9, h: 0.5,
    fontSize: 22, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

slide9.addText('根据输入内容预测所需计算资源，动态分配专家网络', {
    x: 0.5, y: 2.1, w: 9, h: 0.4,
    fontSize: 16, fontFace: 'Arial', color: colors.text
});

// 工作流程
slide9.addText('工作流程', {
    x: 0.5, y: 2.8, w: 9, h: 0.5,
    fontSize: 20, fontFace: 'Arial', bold: true,
    color: colors.secondary
});

const workflow = [
    '1. 输入编码：快速编码器提取关键特征',
    '2. 路由预测：轻量级预测器估计所需专家',
    '3. 动态调度：仅激活预测的专家子集',
    '4. 结果聚合：加权合并专家输出'
];

yPos = 3.3;
workflow.forEach(step => {
    slide9.addText(step, {
        x: 0.7, y: yPos, w: 8.5, h: 0.4,
        fontSize: 15, fontFace: 'Arial', color: colors.text
    });
    yPos += 0.5;
});

// 效果
slide9.addShape(pptx.ShapeType.rect, {
    x: 0.5, y: 5.0, w: 9, h: 0.8,
    fill: { color: colors.accent },
    line: { color: colors.secondary, width: 1 }
});

slide9.addText('效果：推理成本降低 40%，性能损失 < 2%', {
    x: 0.7, y: 5.2, w: 8.6, h: 0.4,
    fontSize: 16, fontFace: 'Arial', bold: true,
    color: colors.primary, align: 'center'
});

// 保存
pptx.writeFile({ fileName: 'DeepSeek-V4-Report-P4.pptx' });
console.log('第8-9页已生成: DeepSeek-V4-Report-P4.pptx');
