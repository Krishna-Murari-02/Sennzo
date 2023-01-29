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

const MovieDuration2 = () => {
  const minValueMin = useSelector((state) => state.quiz.minValueMin);
  const maxValueMin = useSelector((state) => state.quiz.maxValueMin);
  let dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(setminValueMin(e.minValue));
    dispatch(setmaxValueMin(e.maxValue));
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="font-quick  text-sm font-extrabold text-center">
        How long do you want your movie to be?
      </strong>
      <small className="font-poppin text-xs font-normal text-gray-500 text-center">
        Please drag the circle to adjust the maximum and the rectangle for
        minimum length
      </small>
      <div className="w-full flex mt-8 justify-end">
        <small className="px-8  text-gray-600 text-sm flex justify-center items-center rounded-2xl border">
          {minValueMin} min
        </small>
        <small className=" flex justify-center items-center text-gray-600   text-2xl">
          -
        </small>
        <small className="px-8  text-gray-600 text-sm flex justify-center items-center rounded-2xl border">
          {maxValueMin} min
        </small>
      </div>
      <div className="w-[90%] mt-10">
        {/* <Slider
          value={handleChange}
          aria-label="Small"
          onChange={(e) => sethandleChange(e)}
        /> */}
        <MultiRangeSlider
          min={30}
          max={300}
          step={5}
          ruler={true}
          label={true}
          preventWheel={false}
          minValue={minValueMin}
          maxValue={maxValueMin}
          baseClassName="multi-range-slider"
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
};

export default MovieDuration2;
