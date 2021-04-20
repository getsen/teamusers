import { useState, useEffect } from "react";

export const useApiHook = (props: {retrieve: any;}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const fetchData = () => {
      props.retrieve(
        (data: any) => {
          setData(data);
          setLoading(false);
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
    };
    fetchData();
  }, [props.retrieve]);

  return { data, loading, error };
};
