import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user_id: null,
  auth_token: null,
  username: null,
  email: null,
  user_status: false,
  is_superuser: false,
  user_img:null
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // setUserSatus: (state) => {
    //   state.userStatus = "true";
    // },
    setUserSatus: (state, action) => {
      state.user_id = action.payload[0];
      state.auth_token = action.payload[1];
      state.username = action.payload[2];
      state.email = action.payload[3];
      state.user_status = action.payload[4];
      state.is_superuser = action.payload[5];
      state.user_img="https://www.pinpng.com/pngs/m/343-3435180_default-user-profile-image-png-not-available-transparent.png";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUserSatus } = loginSlice.actions;

export default loginSlice.reducer;
