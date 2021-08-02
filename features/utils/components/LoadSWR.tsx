import React, { ReactChild } from "react";
import useSWR, { Key } from "swr";
import { Fetcher } from "swr/dist/types";
import { Loading } from "..";

type LoadSWRProps<T> = {
  key: Key;
  fetcher: Fetcher<T>;
  children: (data: T) => JSX.Element;
};

const LoadSWR = <T extends any>(props: LoadSWRProps<T>) => {
  const { key, fetcher, children } = props;
  const { data, error } = useSWR<T>(key, fetcher);

  return (
    <Loading<T> data={data} error={error}>
      {children}
    </Loading>
  );
};

export default LoadSWR;
