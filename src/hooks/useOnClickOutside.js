import { useEffect, useRef } from "react";

function useOnClickOutside(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
          console.log("clicked outside");
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);
      () => document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );
  return ref;
}

export default useOnClickOutside;
