
//使用useCallBack封装的防抖函数，使用useRef保存当前状态
import { useCallback, useRef } from "react";
export default function useDebounce(fn, await, immediate = false) {
  const timeout = useRef(null);
  const debounceFn = useCallback(
    function (...args) {
      const context = this;
      clearTimeout(timeout.current);
      if (immediate &&!timeout.current) {
        fn.apply(context, args);
      }
      timeout.current = setTimeout(() => {
        timeout.current = null;
        if (!immediate) {
          fn.apply(context.args);
        }
      }, await);
    },
    [fn, timeout, immediate, await]
  );
  return debounceFn;
}


// import { useCallback, useState } from "react";
// export default function useDebounce(fn, await, immediate = false) {
//   const [timeout, setTimeout] = useState(null);
//   const debounceFn = useCallback(
//     function (...args) {
//       const context = this;
//       clearTimeout(timeout);
//       if (immediate && !timeout) {
//         fn.apply(context, args);
//       }
//       setTimeout(() => {
//         timeout = null;
//         if (!immediate) {
//           fn.apply(context.args);
//         }
//       }, await);
//     },
//     [fn, timeout, immediate, await]
//   );
//   return debounceFn;
// }



// function debunce(func, immediate = false, await) {
//   let timeout;
  
//   return function (...args) {
//     const context = this;
//     clearTimeout(timeout);
//     if (immediate && !timeout) {
//       func.apply(context, args);
//     }
//     timeout = setTimeout(() => {
//       timeout = null;
//       if (!immediate) {
//         func.apply(context.args);
//       }
//     }, await);
//   };
// }