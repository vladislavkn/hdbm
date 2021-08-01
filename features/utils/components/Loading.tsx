import { CircularProgress } from "@material-ui/core";
import React from "react";
import DisplayError from "./DisplayError";

type LoadingProps<T> = {
  error: Error;
  data?: T;
  children?: (data: T) => JSX.Element;
};

const Loading = <T extends Record<string, any>>(props: LoadingProps<T>) => {
  const { children, error, data } = props;
  if (error) return <DisplayError message={error.message} />;
  if (!data) return <CircularProgress />;

  return children(data);
};

export default Loading;
