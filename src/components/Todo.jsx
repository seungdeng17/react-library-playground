import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { todoSelector } from "../states/todo";

export default function Todo() {
  const data = useRecoilValue(todoSelector);

  // useEffect(() => {
  //   (async function () {
  //     await new Promise((res) => setTimeout(res, 3000));
  //     setData("데이터지롱");
  //   })();
  // }, []);

  return <div>{data}</div>;
}
