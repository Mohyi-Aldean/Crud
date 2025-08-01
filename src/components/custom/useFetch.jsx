import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(path) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLodaing] = useState(true);

  const getUsers = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
      //console.log(response.data.users);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLodaing(false);
    }
  };

  useEffect(() => {
    getUsers();
  });

  return { data,error,isLoading }
}

export default useFetch;
