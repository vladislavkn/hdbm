import { useRef } from "react";

const useDebouncedCallBack = (callback: Function, timeoutTime: number) => {
  let timeout = useRef<number>();

  return () => {
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(callback, timeoutTime);
  };
};

export default useDebouncedCallBack;
