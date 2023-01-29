import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setcriticsNo, setcriticsYes } from "../Ouiz/quizSlice";

function Rated() {
  const criticsYes = useSelector((state) => state.quiz.criticsYes);
  const criticsNo = useSelector((state) => state.quiz.criticsNo);
  let dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="font-quick text-sm font-extrabold text-center">
        Do you wish for a well rated movie by critics?
      </strong>
      <small className="font-poppin text-xs font-normal text-gray-500 text-center">
        Select only one answer
      </small>
      <div className="w-full flex mt-24 mb-24 justify-around">
        <button
          className={`font-quick text-sm px-10 py-2 rounded-lg border font-extrabold ${
            criticsYes ? "bg-[#3A72B9]" : ""
          }`}
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          onClick={() => {
            dispatch(setcriticsYes(9));
            dispatch(setcriticsNo(0));
          }}
        >
          Yes
        </button>
        <button
          className={`font-quick text-sm px-10 py-2 rounded-lg border font-extrabold  ${
            criticsNo ? "bg-[#3A72B9]" : ""
          }`}
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          onClick={() => {
            dispatch(setcriticsNo(1));
            dispatch(setcriticsYes(0));
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default Rated;
