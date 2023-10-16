import React, { useState } from "react";
import "./DigitalKeypad.css"; // Import your CSS file for styling

const DigitalKeypad = (props) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const { sendDigits = () => {} } = props;

  const handleButtonClick = (digit) => {
    setError(``);
    if (isNaN(digit)) {
      if (digit === "Generate") {
        generateToken();
      } else {
        handleClear();
      }
      return;
    } else if (input.includes(digit)) {
      return setError(`${digit} already entered`);
    }
    setInput(input + digit);
  };

  const handleClear = () => {
    setInput("");
  };

  const generateToken = () => {
    if(!input) {
      return setError(`invalid input`);
    }
    console.log("input", input);
    sendDigits(input)
  };

  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Clear",
    "Generate",
  ];

  return (
    <div className="digital-keypad">
      {error && <div className="error">{error}</div>}
      <div className="display">{input}</div>
      <div className="button-container">
        {keys.map((label) => (
          <button
            className="digit-button"
            onClick={() => handleButtonClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DigitalKeypad;
