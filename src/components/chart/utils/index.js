import { LABELS, COLORS } from "../constants";
import { labelsAroundPlugin, shadowsPlugin } from "../plugins";

const plugins = [labelsAroundPlugin, shadowsPlugin];

const data = {
    labels: [
        LABELS.TRANSMISSIONS,
        LABELS.STUFFLINES,
        LABELS.DISCOMFORT,
        LABELS.HUMIDITY,
        LABELS.POLLUTION,
        LABELS.TEMPERATURE,
        LABELS.CO2,
        LABELS.DENSITY,
    ],
    datasets: [
        {
            label: "First",
            data: ["300", "50", "125", "300", "125", "175", "250", "340"],
            backgroundColor: COLORS.BLUE_FIRST,
            pointBorderColor: COLORS.TRANSPARENT,
            pointBackgroundColor: COLORS.TRANSPARENT,
        },
        {
            label: "Second",
            data: ["450", "125", "330", "360", "200", "350", "320", "250"],
            backgroundColor: COLORS.BLUE_SECOND,
            pointBorderColor: COLORS.TRANSPARENT,
            pointBackgroundColor: COLORS.TRANSPARENT,
        },
        {
            label: "Background1",
            backgroundColor: COLORS.BACKGROUND_ONE,
            data: [200, 200, 200, 200, 200, 200, 200, 200],
            pointBorderColor: COLORS.TRANSPARENT,
            pointBackgroundColor: COLORS.TRANSPARENT,
        },
        {
            label: "Background2",
            backgroundColor: COLORS.BACKGROUND_TWO,
            data: [300, 300, 300, 300, 300, 300, 300, 300],
            pointBorderColor: COLORS.TRANSPARENT,
            pointBackgroundColor: COLORS.TRANSPARENT,
            borderWidth: 1,
            borderColor: COLORS.BORDER_ONE,
        },
        {
            backgroundColor: COLORS.BACKGROUND_THREE,
            label: "Background3",
            data: [400, 400, 400, 400, 400, 400, 400, 400],
            pointBorderColor: COLORS.TRANSPARENT,
            pointBackgroundColor: COLORS.TRANSPARENT,
            borderWidth: 1,
            borderColor: COLORS.BORDER_ONE,
        },
        {
            label: "Background4",
            backgroundColor: COLORS.BACKGROUND_FOUR,
            data: [500, 500, 500, 500, 500, 500, 500, 500],
            pointBorderColor: COLORS.TRANSPARENT,
            pointBackgroundColor: COLORS.TRANSPARENT,
            pointRadius: 4,
            borderWidth: 1,
        },
        {
            label: "Background5",
            backgroundColor: COLORS.BACKGROUND_FIVE,
            data: [600, 600, 600, 600, 600, 600, 600, 600],
            borderColor: COLORS.BORDER_TWO,
            pointBorderColor: COLORS.BORDER_THREE,
            pointBackgroundColor: COLORS.BORDER_TWO,
            pointRadius: 4,
            borderWidth: 1,
        },
    ],
};

const options = {
    aspectRatio: 1.5,
    plugins: {
        legend: {
            display: false,
        },
    },
    elements: {
        line: {
            borderWidth: 0,
        },
    },
    layout: {
        padding: 25,
    },
    scales: {
        r: {
            pointLabels: {
                font: {
                    size: 20,
                    weight: "300",
                },
                padding: 20,
            },
            startAngle: 10,
            angleLines: {
                color: COLORS.BORDER_THREE,
                lineWidth: 1,
            },
            beginAtZero: true,
            min: 0,
            max: 600,
            ticks: {
                stepSize: 100,
                display: false,
            },
        },
    },
};

export { plugins, data, options };
