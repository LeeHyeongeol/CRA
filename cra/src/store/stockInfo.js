import { createSlice } from "@reduxjs/toolkit";

let stockInfo = createSlice({
  name: "stackInfo",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 1, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    upCount(state, i) {
      state[i.payload].count++;
    },
    downCount(state, i) {
      state[i.payload].count--;
    },
  },
});

export default stockInfo;
