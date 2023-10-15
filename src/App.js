import logo from "./logo.svg";
import "./App.css";
import GenerateToken from "./pages/tokenGenerate";
import ValidateToken from "./pages/tokenValidate";
import { useState } from "react";

function App() {
  const [availableDigits, setAvailableDigit] = useState("");
  const [token, setToken] = useState("");

  const getAvailableDigit = (value) => {
    setAvailableDigit(value);
  };

  return (
    <div className="App">
      <GenerateToken
        setAvailableDigit={getAvailableDigit}
        setToken={setToken}
      />
      <ValidateToken availableDigit={availableDigits} token={token} />
    </div>
  );
}

export default App;
