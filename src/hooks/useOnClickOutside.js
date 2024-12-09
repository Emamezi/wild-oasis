import { useEffect, useRef } from "react";

function useOnClickOutside(ref, handler) {
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }
      document.addEventListener("click", handleClick, true);
      () => document.removeEventListener("click", handleClick, true);
    },
    [ref, handler]
  );
}

export default useOnClickOutside;
