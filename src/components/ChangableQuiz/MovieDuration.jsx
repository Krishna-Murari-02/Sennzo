import MultiRangeSlider from "multi-range-slider-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setGeneres1,
  setGeneres2,
  setGeneres3,
  setmaxValueMovieDuration,
  setminValueMovieDuration,
  setminValueMin,
  setmaxValueScore,
  setcriticsNo,
  setcriticsYes,
  setespionageNo,
  setespionageYes,
  setmaxValueMin,
  setminValueScore,
} from "../Ouiz/quizSlice";

const MovieDuration = () => {
  const minValueMovieDuration = useSelector(
    (state) => state.quiz.minValueMovieDuration
  );
  const maxValueMovieDuration = useSelector(
    (state) => state.quiz.maxValueMovieDuration
  );
  let dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setminValueMovieDuration(e.minValue));
    dispatch(setmaxValueMovieDuration(e.maxValue));
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="font-quick  text-sm font-extrabold text-center">
        How old would you like the movie to be?
      </strong>
      <small className="font-poppin text-xs font-normal text-gray-500 text-center">
        Please drag the circle to adjust the maximum and the rectangle for
        minimum length
      </small>
      <div className="w-full flex mt-8 justify-end">
        <small className="px-8 text-gray-600 text-sm  flex justify-center items-center rounded-2xl border">
          {minValueMovieDuration} year
        </small>
        <small className=" flex justify-center items-center text-gray-600   text-2xl">
          -
        </small>
        <small className="px-8  text-gray-600 text-sm flex justify-center items-center rounded-2xl border">
          {maxValueMovieDuration} year
        </small>
      </div>

      <div className="w-[90%] mt-10">
        <MultiRangeSlider
          min={1900}
          max={2022}
          step={1}
          ruler={true}
          label={true}
          preventWheel={false}
          minValue={minValueMovieDuration}
          maxValue={maxValueMovieDuration}
          baseClassName="multi-range-slider"
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
};

export default MovieDuration;
