import "./App.css";
import { useState } from "react";
import MyHeader from "./components/MyHeader/MyHeader.js";
import InputBlock from "./components/InputBlock/InputBlock.js";
import MyFooter from "./components/MyFooter/MyFooter.js";

function App() {
    let [weight, setWeight] = useState("");
    let [height, setHeight] = useState("");
    let [bmi, setBmi] = useState("BMI");

    let bmiState = "";
    let $bmiState = document.querySelector("#table");

    function bmiHandler() {
        if (height && weight) {
            const bmiValue = (bmi = weight / ((height / 100) * (height / 100)));

            if (bmiValue < 18.5) {
                $bmiState.innerHTML = "underweight";
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                $bmiState.innerHTML = "normal weight";
            } else if (bmiValue >= 25 && bmiValue < 30) {
                $bmiState.innerHTML = "overweight";
            } else if (bmiValue >= 30) {
                $bmiState.innerHTML = "obesity";
            }

            setBmi(bmiValue.toFixed(2));
        }
    }

    function handleWeight(value) {
        setWeight(value);
    }

    function handleHeight(value) {
        setHeight(value);
    }

    return (
        <div className="App">
            <MyHeader></MyHeader>
            <div id="container-box">
                <div className="box">
                    <InputBlock
                        title="Weight"
                        unit="kg"
                        onInputChange={handleWeight}
                    />
                    <InputBlock
                        title="Height"
                        unit="cm"
                        onInputChange={handleHeight}
                    />
                    <button onClick={bmiHandler}>Calculate</button>
                    <div>
                        <p id="result">
                            {bmi} : <span id="table">{bmiState}</span>
                        </p>
                    </div>
                </div>
            </div>
            <MyFooter />
        </div>
    );
}
export default App;
