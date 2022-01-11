import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { postUserInfo } from "../states/todo";

export default function Todo() {
  const [result, postApi] = useRecoilState(postUserInfo);

  const handleClick = () => {
    postApi({ id: "test", password: "111111" });
  };

  useEffect(() => {
    console.log(result);
    if (result) {
      alert("성공!");
    } else {
      // 실패 처리
    }

    return () => {
      console.log("component unmount");
    };
  }, [result]);

  return <div onClick={handleClick}>Click!</div>;
}
