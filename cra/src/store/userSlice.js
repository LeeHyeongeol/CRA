import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 27 },
  //state를 수정하는 방법 1
  reducers: {
    changeName(state) {
      return { name: "park", age: 20 };
      //state.name = 'park'
    },
    upAge(state) {
      state.age++;
    },
    downAge(state) {
      state.age--;
    },
  },
});

export default user;
