import "./App.css";
import { Tracker } from "./components/tracker/tracker";
import { Chart } from "./components/chart/";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Tracker />
                <Chart />
            </header>
        </div>
    );
}

export default App;
