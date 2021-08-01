import useSWR from "swr";
import { FETCH_WAYS_KEY, fetchWays } from "./api";
import { Way } from "./types";

export const useWays = (): [Way[], Error] => {
  const { data, error } = useSWR<Way[], Error>(FETCH_WAYS_KEY, fetchWays);

  return [data, error];
};
