import { RefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>,
  callback: () => void,
) {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, callback]);
}

export default useClickOutside;
