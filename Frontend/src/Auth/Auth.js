import { useState, useEffect } from "react";

export default function useAuth() {
  const [authorized, setAuthorized] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const verifyAuth = async () => {
    try {
      const response = await fetch("/verification", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data != null || data != undefined) {
        setAuthorized(true);
        setUserData(data.data[0]);
        setLoading(true);
      } else {
        setAuthorized(false);
      }
    } catch (err) {
      setError(err.message);
      setAuthorized(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    verifyAuth();
  }, []);

  return { verifyAuth, authorized, userData, loading, error };
}