import { useRef, useState, useEffect, useCallback } from "react";

export default function useInfiniteScroll(
  callback,
  option = {
    threshold: 0.4,
  }
) {
  const [item, setItem] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const ref = useRef(null);

  const onIntersect = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && !isFetching) {
        callback(item.length + 1, setItem, setIsFetching);
      }
    },
    [item, isFetching, callback]
  );

  useEffect(() => {
    if (!ref.current) return;

    const io = new IntersectionObserver(onIntersect, option);
    io.observe(ref.current);

    return () => {
      io.disconnect();
    };
  }, [onIntersect, option]);

  return [ref, item, isFetching];
}
