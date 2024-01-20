import { useState } from "react";

export const useClickButton = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return { count, handleClick };
};
