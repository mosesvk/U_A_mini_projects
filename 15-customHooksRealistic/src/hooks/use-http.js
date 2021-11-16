import {useState, useCallback} from 'react'

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        // reusablility requestConfig from parameter
        requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
        // reusability applyData from parameter
      applyData(data)

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []) // sendRequest function

  return {
    isLoading, 
    error,
    sendRequest
  }
}

export default useHttp