import React from "react";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { Radar } from "react-chartjs-2";
import { data, options, plugins } from "./utils";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export function Chart() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            }}
        >
            <Radar data={data} options={options} plugins={plugins} />
        </div>
    );
}
