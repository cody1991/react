import { useState, useEffect } from 'react';
import Axios from 'axios';
export default function useAxiosGet(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    Axios.get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
