import { COLORS } from "../constants";

const labelsAroundPlugin = {
    id: "labelsAround",
    afterDatasetDraw: (chart) => {
        const {
            ctx,
            scales: { r },
        } = chart;
        const angle = Math.PI / 180;
        const pointLabels = r._pointLabelItems;
        const labels = r._pointLabels;

        labels.forEach((label, index) => {
            ctx.font = "200 20px sans-serif";
            ctx.save();
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            pointLabels[index].visible = false;

            // eslint-disable-next-line
            switch (index) {
                case 0:
                    ctx.translate(pointLabels[index].x - 55, pointLabels[index].y);
                    ctx.rotate((60 / labels.length) * angle);
                    break;
                case 1:
                    ctx.translate(pointLabels[index].x, pointLabels[index].y - 15);
                    ctx.rotate(index * (450 / labels.length) * angle);
                    break;
                case 2:
                    ctx.translate(pointLabels[index].x - 10, pointLabels[index].y + 50);
                    ctx.rotate(index * (390 / labels.length) * angle);
                    ctx.rotate(180 * angle);
                    break;
                case 3:
                    ctx.translate(pointLabels[index].x - 30, pointLabels[index].y + 20);
                    ctx.rotate(index * (385 / labels.length) * angle);
                    ctx.rotate(180 * angle);
                    break;
                case 4:
                    ctx.translate(pointLabels[index].x - 35, pointLabels[index].y - 5);
                    ctx.rotate(index * (375 / labels.length) * angle);
                    ctx.rotate(180 * angle);
                    break;
                case 5:
                    ctx.translate(pointLabels[index].x - 30, pointLabels[index].y - 45);
                    ctx.rotate(index * (375 / labels.length) * angle);
                    ctx.rotate(180 * angle);
                    break;
                case 6:
                    ctx.translate(pointLabels[index].x - 20, pointLabels[index].y + 40);
                    ctx.rotate(index * (375 / labels.length) * angle);
                    break;
                case 7:
                    ctx.translate(pointLabels[index].x - 40, pointLabels[index].y + 25);
                    ctx.rotate(index * (375 / labels.length) * angle);
                    break;
            }

            ctx.textBaseline = "top";
            ctx.fillStyle = COLORS.FONT_FILL_STYLE;
            ctx.fillText(label, 0, 0);
            ctx.restore();
        });
    },
};

export { labelsAroundPlugin };
