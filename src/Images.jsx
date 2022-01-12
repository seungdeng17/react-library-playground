import useInfiniteScroll from "./hooks/useInfiniteScroll";

const LIMIT = 5;

const getImages = async (startIndex, setItem, setIsFetching) => {
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
      setItem((v) => [...v, ...jsonArr]);
    });

  setIsFetching(false);
};

export default function Images() {
  const [observerRef, imageList, isFetching] = useInfiniteScroll(getImages);

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
