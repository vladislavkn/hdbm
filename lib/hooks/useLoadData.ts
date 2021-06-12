import { useEffect, useState } from "react";

type UseLoadDataResult<T> = {
  data: T;
  loading: boolean;
  error: Error;
  reload: () => void;
};

const useLoadData = <T>(
  loader: () => Promise<T>,
  defaultState: T
): UseLoadDataResult<T> => {
  const [data, setData] = useState<T>(defaultState);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const executeLoad = async () => {
    setLoading(true);
    setError(null);

    try {
      setData(await loader());
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    executeLoad();
  }, []);

  return { data, loading, error, reload: executeLoad };
};

export default useLoadData;
