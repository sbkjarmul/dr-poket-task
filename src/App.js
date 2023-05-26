import "./App.css";
import { Tracker } from "./components/tracker";
import { Chart } from "./components/chart";
import React, { useState } from "react";

function App() {
    const [activeView, setActiveView] = useState("chart");

    const handleButtonClick = (view) => {
        setActiveView(view);
    };

    return (
        <div className="App">
            <header className="header">
                <button
                    className={activeView === "chart" ? "active" : ""}
                    onClick={() => handleButtonClick("chart")}
                    disabled={activeView === "chart"}
                >
                    Chart
                </button>
                <button
                    className={activeView === "tracker" ? "active" : ""}
                    onClick={() => handleButtonClick("tracker")}
                    disabled={activeView === "tracker"}
                >
                    Tracker
                </button>
                <div></div>
            </header>
            <main className="contrainer">
                {activeView === "chart" && <Chart />}
                {activeView === "tracker" && <Tracker />}
            </main>
        </div>
    );
}

export default App;
