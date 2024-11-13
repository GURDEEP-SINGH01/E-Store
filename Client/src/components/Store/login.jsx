import { configureStore, createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "user",
  initialState: { isLogin: false },
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});
export const actions = loginSlice.actions;
const store = configureStore({ reducer: loginSlice.reducer });
export default store;
