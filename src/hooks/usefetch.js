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

      console.log("url", url);
      console.log("url: request", config);

      response = await axios({...config, url});

      console.log("url: response", response);

      //   if (method === "GET") {
      //     response = await axios.get(url);
      //   } else if (method === "POST") {
      //     response = await axios(config);
      //   } else if (method === "PUT") {
      //     response = await axios.put(url, data);
      //   } else if (method === "DELETE") {
      //     response = await axios.delete(url);
      //   } else {
      //     console.log("invalid method type");
      //   }

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
