import { useState, useEffect } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      // Loading -> Home
      setLoading(false);
    }, 2000);

    return () => {
      // Clean TimeOut
      clearTimeout(interval);
    };
  }, []);
  return loading;
};

export default useLoading;
