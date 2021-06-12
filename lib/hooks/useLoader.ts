import { useEffect, useState } from "react";

type useLoaderResult<T> = {
  data: T;
  loading: boolean;
  error: Error;
  refresh: () => void;
};

const useLoader = <T>(
  loader: () => Promise<T>,
  defaultState: T
): useLoaderResult<T> => {
  const [data, setData] = useState<T>(defaultState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const executeLoad = () => {
    setLoading(true);
    setError(null);

    loader()
      .then((data) => setData(data))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    executeLoad();
  }, []);

  return { data, loading, error, refresh: executeLoad };
};

export default useLoader;
