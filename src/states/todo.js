import { atom, selector } from "recoil";

export const todoSelector = selector({
  key: "todoSelector",
  get: async () => {
    await new Promise((res) => setTimeout(res, 3000));
    throw new Error("에러 발생 함");
    // return "내가 데이터";
  },
});
