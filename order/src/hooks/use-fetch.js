import { useState } from "react";

const useFecth = (url, requestInfo) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeFetch = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch(url, requestInfo);
      return res;
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    executeFetch,
  };
};

export default useFecth;
