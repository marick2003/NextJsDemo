import { createSlice } from "@reduxjs/toolkit";


export const  authslice = createSlice({
  name: "authentication",
  initialState: {
    isAuthenticated: false
  },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});
// export default the store
export default authslice;
export const authActions = authslice.actions;

