import "./App.css";
import { useState } from "react";

function App() {
    let [number, setNumber] = useState(0);

    function add() {
        setNumber((number = number + 1));
    }

    function substract() {
        setNumber((number = number - 1));
    }
    return (
        <div className="App">
            <div className="box">
                <h1>Click to count</h1>
                <button className="+" onClick={add}>
                    +
                </button>
                <button className="-" onClick={substract}>
                    -
                </button>
                <h3>{number}</h3>
            </div>
        </div>
    );
}

export default App;
