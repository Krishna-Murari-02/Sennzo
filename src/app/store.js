import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/Login/loginSlice";
import quizReducer from "../components/Ouiz/quizSlice";
import popupReducer from "../components/ForYou/movieDetailsSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    quiz: quizReducer,
    moviePopup: popupReducer,
  },
});
