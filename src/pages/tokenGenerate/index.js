import react from "react";
import DigitalKeypad from "../../components/digital-keypad/DigitalKeypad";
import useFetch from "../../hooks/usefetch";
import { GENERATE_TOKEN_ENDPOINT } from "../../network/endpoints";

const GenerateToken = (props) => {
  const { response, error, isLoading, execute } = useFetch();
  const getDigits = (value) => {
    props?.setAvailableDigit(value)
    const config = {
      data: { availableDigits: value },
      endpoint: GENERATE_TOKEN_ENDPOINT,
      method: "POST",
      invoke: false,
    };
    execute(config);
  };
  return (
    <div>
      <h2>Token Generator</h2>
      {response && <label>Generated Token: {response}</label>}
      {isLoading && <label>{isLoading}</label>}
      <DigitalKeypad sendDigits={getDigits} />
    </div>
  );
};
export default GenerateToken;
