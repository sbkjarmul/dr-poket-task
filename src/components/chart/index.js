import React from "react";
import { createChart } from "./utils";

export function Chart() {
    const chart = createChart();
    return (
        <div class="chart-container">
            <canvas id="radarChart">{chart}</canvas>
        </div>
    );
}
