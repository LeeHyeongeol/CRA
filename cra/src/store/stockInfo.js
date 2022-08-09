import { createSlice } from "@reduxjs/toolkit";

let stockInfo = createSlice({
  name: "stackInfo",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    upCount(state, action) {
      //클릭한 데이터의 id가 상품 id랑 같으면 카운트 ++
      console.log("state[action.payload])", state[action.payload]);
      state[action.payload].count++;
    },
    downCount(state, action) {
      state[action.payload].count--;
    },
    //주문하기 버튼 클릭 시 상품이 추가되는 기능
    order(state, action) {
      let stockNum = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      console.log("stockNum", stockNum);
      console.log("action.payload", action.payload);
      //장바구니에 있는 상품이면 수량+
      // 아니라면 새롭게 추가
      //   if (stockNum !== undefined) {
      //     state[stockNum].count++;
      //   } else {
      state.push(action.payload);
    },
    delet(state, action) {
      let stockNum = state.findIndex((a) => {
        return a.id === action.payload.id;
      });
      console.log(stockNum);
      state = [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1),
      ];
    },
  },
});

export default stockInfo;
