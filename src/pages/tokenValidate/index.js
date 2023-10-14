import { useState } from "react";
import useFetch from "../../hooks/usefetch";
import { VALIDATE_TOKEN_ENDPOINT } from "../../network/endpoints";
import "./TokenScreen.css";

const ValidateToken = (props) => {
  const [inputToken, setInputToken] = useState("");
  const { response, error, isLoading, execute } = useFetch();
  const { availableDigit = "" } = props;

  console.log(props);

  const validateInputToken = () => {
    const config = {
      data: { availableDigits: availableDigit, tokenToValidate: inputToken },
      endpoint: VALIDATE_TOKEN_ENDPOINT,
      method: "PUT",
      invoke: false,
    };
    execute(config);
  };

  return (
    <div>
      <h2>Token Validator</h2>
      {response && <label>token: {response}</label>}
      {isLoading && <label>{isLoading}</label>}
      <br />
      <label>availableDigits: {availableDigit}</label><br />
      <input
        type="text"
        placeholder="Enter Token to Validate"
        value={inputToken}
        onChange={(e) => setInputToken(e.target.value)}
      />
      <button onClick={validateInputToken}>Validate Token</button>
      <div>
        <strong>Validation Result:  {`${response}`}</strong>
      </div>
    </div>
  );
};

export default ValidateToken;
