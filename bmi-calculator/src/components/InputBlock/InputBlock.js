import React from "react";
import { useState } from "react";
import "./InputBlock.css";

function InputBlock({ title, unit, onInputChange }) {
    let [number, setNumber] = useState("");

    function handleNumber(e) {
        const value = e.target.value;
        setNumber(value);
        onInputChange(value);
    }

    return (
        <div className="row">
            <label htmlFor="val">{title}</label>
            <input
                type="number"
                value={number}
                id="val"
                placeholder={unit}
                onChange={handleNumber}
            ></input>
        </div>
    );
}

export default InputBlock;
