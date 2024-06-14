import { useEffect, useState } from "react";
import axios from "axios";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
