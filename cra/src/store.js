import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";
import stockInfo from "./store/stockInfo.js";
//Redux 사용 이유 -> 컴포넌트간 state를 공유할 수 있어서 props 안해도 됨

export let { changeName, upAge, downAge } = user.actions; //변경사항만 남음
export let { upCount, downCount, order, delet } = stockInfo.actions;

let stock = createSlice({
  name: "stock",
  initialState: [10, 11, 12],
});

export default configureStore({
  reducer: {
    //추가하는 상태변수명 뒤에 .reducer를 추가해야 함
    user: user.reducer,
    stock: stock.reducer,
    stockInfo: stockInfo.reducer,
  },
});
