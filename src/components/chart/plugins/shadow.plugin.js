const shadowsPlugin = {
    id: "shadowsPlugin",
    afterDatasetDraw: (chart) => {
        const ctx = chart.ctx;
        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = -5;
    },
};

export { shadowsPlugin };
