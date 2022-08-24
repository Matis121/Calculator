import React, { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const clear = () => {
    setCalc("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}&nbsp;
        </div>

        <div className="allButtons">
          <div className="buttons">
            <div className="operators">
              <button onClick={() => updateCalc("*")}>x</button>
              <button onClick={() => updateCalc("+")}>+</button>
              <button onClick={() => updateCalc("-")}>-</button>

              <button className="delKey" onClick={deleteLast}>
                DEL
              </button>
            </div>

            <div className="digits">
              <button onClick={() => updateCalc("0")}>0</button>
              <button onClick={() => updateCalc(".")}>.</button>
              <button onClick={() => updateCalc("/")}>/</button>
              {createDigits()}
            </div>
          </div>

          <div className="resAdd">
            <button className="resetKey" onClick={clear}>
              C
            </button>
            <button className="resultKey" onClick={calculate}>
              =
            </button>
          </div>
        </div>
      </div>
      <footer>Coded by Mateusz Jarząbek</footer>
    </div>
  );
}

export default App;
