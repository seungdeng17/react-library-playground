import { useRef, useState, useEffect, useCallback } from "react";

const LIMIT = 5;

export default function Images() {
  const [imageList, setImageList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const observerRef = useRef(null);

  const getImages = async (startIndex) => {
    setIsFetching(true);

    const urlArr = [];
    for (let i = startIndex; i < startIndex + LIMIT; i++) {
      urlArr.push(`https://jsonplaceholder.typicode.com/photos/${i}`);
    }

    await Promise.all(urlArr.map((url) => fetch(url)))
      .then((resArr) => {
        return Promise.all(resArr.map((res) => res.json()));
      })
      .then((jsonArr) => {
        setImageList((v) => [...v, ...jsonArr]);
      });

    setIsFetching(false);
  };

  const onIntersect = useCallback(
    ([entry]) => {
      if (entry.isIntersecting && !isFetching) {
        getImages(imageList.length + 1);
      }
    },
    [isFetching, imageList]
  );

  useEffect(() => {
    if (!observerRef.current) return;

    const io = new IntersectionObserver(onIntersect, {
      threshold: 0.4,
    });
    io.observe(observerRef.current);

    return () => {
      io.disconnect();
    };
  }, [onIntersect]);

  return (
    <>
      <ul>
        {imageList.map((image) => {
          return (
            <li key={image.id}>
              <img
                style={{ width: 300, height: 300 }}
                src={image.url}
                alt={image.title}
              />
              <span>{image.id}</span>
            </li>
          );
        })}
      </ul>
      <div ref={observerRef}>
        {isFetching && <div>이미지를 가져오는 중..</div>}
      </div>
    </>
  );
}
