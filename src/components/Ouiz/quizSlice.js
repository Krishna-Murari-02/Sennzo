import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genres1: "Comedy",
  genres2: "Crime",
  genres3: "action",
  minValueMovieDuration: 1900,
  maxValueMovieDuration: 2022,
  minValueMin: 30,
  maxValueMin: 300,
  criticsYes: false,
  criticsNo: false,
  minValueScore: 0,
  maxValueScore: 10,
  espionageYes: false,
  espionageNo: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    // setUserSatus: (state) => {
    //   state.userStatus = "true";
    // },
    // setQuizSatus: (state, action) => {
    //   state.user_id = action.payload[0];
    //   state.auth_token = action.payload[1];
    //   state.username = action.payload[2];
    //   state.email = action.payload[3];
    //   state.user_status = action.payload[4];
    //   state.is_superuser = action.payload[5];
    // },
    setGeneres1: (state, action) => {
      state.genres1 = action.payload;
    },
    setGeneres2: (state, action) => {
      state.genres2 = action.payload;
    },
    setGeneres3: (state, action) => {
      state.genres3 = action.payload;
    },
    setminValueMovieDuration: (state, action) => {
      state.minValueMovieDuration = action.payload;
    },

    setmaxValueMovieDuration: (state, action) => {
      state.maxValueMovieDuration = action.payload;
    },
    setminValueMin: (state, action) => {
      state.minValueMin = action.payload;
    },

    setmaxValueMin: (state, action) => {
      state.maxValueMin = action.payload;
    },
    setcriticsYes: (state, action) => {
      state.criticsYes = action.payload;
    },
    setcriticsNo: (state, action) => {
      state.criticsNo = action.payload;
    },
    setminValueScore: (state, action) => {
      state.minValueScore = action.payload;
    },
    setmaxValueScore: (state, action) => {
      state.maxValueScore = action.payload;
    },
    setespionageYes: (state, action) => {
      state.espionageYes = action.payload;
    },
    setespionageNo: (state, action) => {
      state.espionageNo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setGeneres1,
  setGeneres2,
  setGeneres3,
  setmaxValueMovieDuration,
  setminValueMovieDuration,
  setcriticsYes,
  setcriticsNo,
  setespionageNo,
  setespionageYes,
  setmaxValueMin,
  setminValueMin,
  setmaxValueScore,
  setminValueScore,
} = quizSlice.actions;

export default quizSlice.reducer;
