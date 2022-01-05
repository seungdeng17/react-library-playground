import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { todoSelector, todoState } from "../states/todo";

export default function Todo() {
  const initTodo = useRecoilValue(todoSelector);
  const [todo, setTodo] = useRecoilState(todoState);

  useEffect(() => {
    setTodo(initTodo);
  }, []);

  // useEffect(() => {
  //   (async function () {
  //     await new Promise((res) => setTimeout(res, 3000));
  //     setData("데이터지롱");
  //   })();
  // }, []);

  return <div>{todo}</div>;
}
