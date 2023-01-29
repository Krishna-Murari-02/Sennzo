import { createSlice } from "@reduxjs/toolkit";

const initialState = {
movie_Popup:false,
movie_Popup_id:null
};

export const moviePopupSlice = createSlice({
  name: "moviepopup",
  initialState,
  reducers: {
 
    setMoviePopup: (state, action) => {
      state.movie_Popup = action.payload;
     
    },
    setMoviePopupId: (state, action) => {
      state.movie_Popup_id = action.payload;
     
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMoviePopup,setMoviePopupId } = moviePopupSlice.actions;

export default moviePopupSlice.reducer;
