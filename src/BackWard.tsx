import { useEffect, useState } from "react";

export const BackWard = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (count < 2) {
      timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return <div>{count}
  
 
  {count >=2 && <p>计数器停止</p>}
  
  </div>
  
};
