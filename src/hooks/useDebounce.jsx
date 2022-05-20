import { useEffect, useState } from "react";

const useDebounce = (value, timeDelay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, timeDelay);
    return () => clearTimeout(timer);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
