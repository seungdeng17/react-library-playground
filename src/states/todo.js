import { atom, selector } from "recoil";

// export const todoState = atom({
//   key: "todo/todoState",
//   default: "",
// });

// export const todoSelector = selector({
//   key: "todo/todoSelector",
//   get: async () => {
//     await new Promise((res) => setTimeout(res, 3000));
//     // throw new Error("에러 발생 함");
//     return "내가 데이터";
//   },
//   //   set: ({ set }, newValue) => {
//   //     set(todoState, newValue);
//   //   },
// });

export const currentUserInfo = atom({
  key: "todo/currentUserInfo",
  default: {
    id: "",
    password: "",
  },
});

export const postUserInfo = selector({
  key: "todo/postUserInfo",
  get: async ({ get }) => {
    const { id, password } = get(currentUserInfo);
    if (!id || !password) return false;

    const retcode = await new Promise((res) =>
      setTimeout(() => res(100), 3000)
    );

    return retcode === 100;
  },
  set: ({ set }, newValue) => {
    set(currentUserInfo, newValue);
  },
});
