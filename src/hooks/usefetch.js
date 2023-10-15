import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../network/endpoints";

const useFetch = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const execute = async (config) => {
    const { data, endpoint, method } = config || {};

    setLoading(true);

    try {
      let response;
      const url = `${BASE_URL}${endpoint}`;

      response = await axios({...config, url});

      setResponse(response?.data);
      setError(null);
    } catch (error) {
      setResponse(null);
      setError(error);
    }

    setLoading(false);
  };

  return { response, error, isLoading, execute };
};

export default useFetch;
