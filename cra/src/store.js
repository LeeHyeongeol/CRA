import { configureStore, createSlice } from "@reduxjs/toolkit";
//Redux 사용 이유 -> 컴포넌트간 state를 공유할 수 있어서 props 안해도 됨
let user = createSlice({
  name: "user",
  initialState: "Lee",
});

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    //추가하는 상태변수명 뒤에 .reducer를 추가해야 함
    user: user.reducer,
    stock: stock.reducer,
  },
});
