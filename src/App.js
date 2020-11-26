import "./App.css";
import { Animated } from "react-animated-css";
import { useState, useEffect } from "react";
import { Button, ButtonGroup, ToggleButton } from "react-bootstrap";

function App() {
  const [radioValue, setRadioValue] = useState("1");
  const [functionInResult, setFunctionInResult] = useState("");
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);
  const [show, setShow] = useState("hide");

  var handleChange = (event) => {
    setValue(event.target.value);
  };

  var handleSubmit = (event) => {
    event.preventDefault();
    switch (radioValue) {
      case "1":
        setResult(Math.sin((value * Math.PI) / 180).toFixed(4));
        setFunctionInResult("sin");
        break;
      case "2":
        setResult(Math.cos((value * Math.PI) / 180).toFixed(4));
        setFunctionInResult("cos");
        break;
      case "3":
        setResult(Math.tan((value * Math.PI) / 180).toFixed(4));
        setFunctionInResult("tan");
        break;
      case "4":
        var tan = Math.tan((value * Math.PI) / 180);
        setResult((1 / tan).toFixed(4));
        setFunctionInResult("ctg");
    }
    setShow("show");
  };

  const radios = [
    { name: "Sin", value: "1" },
    { name: "Cos", value: "2" },
    { name: "Tan", value: "3" },
    { name: "Ctg", value: "4" },
  ];

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
      <div className="App">
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
              className="selector"
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <h1>Simple trigonometric functions calculator</h1>
        <div className="result">
          <h3 className={show}>
            {" "}
            The {functionInResult} of the angle &alpha; is {result}{" "}
          </h3>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Angle &alpha;"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="calculate btn-primary">
          Calculate
        </button>
        <br />
        <br />
      </div>
    </Animated>
  );
}

export default App;
