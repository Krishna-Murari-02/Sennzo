// import React, { useEffect, useMemo, useState } from "react";
// import "../../App.css";
// import { AiOutlinePlusCircle } from "react-icons/ai";
// import { MdOutlineClear } from "react-icons/md";
// import Slider from "react-rangeslider";
// import Multiselect from "multiselect-react-dropdown";
// import "react-rangeslider/lib/index.css";
// import Navbar from "../Navbar/Navbar";
// import MultipleValueTextInput from "react-multivalue-text-input";
// import { Navigate, useNavigate } from "react-router-dom";
// import MultiRangeSlider from "multi-range-slider-react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   setGeneres1,
//   setGeneres2,
//   setGeneres3,
//   setmaxValueMovieDuration,
//   setminValueMovieDuration,
//   setminValueMin,
//   setmaxValueScore,
//   setcriticsNo,
//   setcriticsYes,
//   setespionageNo,
//   setespionageYes,
//   setmaxValueMin,
//   setminValueScore,
// } from "./quizSlice";

// function MainQuiz() {
//   const genres1 = useSelector((state) => state.quiz.genres1);
//   const genres2 = useSelector((state) => state.quiz.genres2);
//   const genres3 = useSelector((state) => state.quiz.genres3);
//   const minValueMovieDuration = useSelector(
//     (state) => state.quiz.minValueMovieDuration
//   );
//   const maxValueMovieDuration = useSelector(
//     (state) => state.quiz.maxValueMovieDuration
//   );
//   const minValueMin = useSelector((state) => state.quiz.minValueMin);
//   const maxValueMin = useSelector((state) => state.quiz.maxValueMin);
//   const criticsYes = useSelector((state) => state.quiz.criticsYes);
//   const criticsNo = useSelector((state) => state.quiz.criticsNo);
//   const minValueScore = useSelector((state) => state.quiz.minValueScore);
//   const maxValueScore = useSelector((state) => state.quiz.maxValueScore);
//   const espionageYes = useSelector((state) => state.quiz.espionageYes);
//   const espionageNo = useSelector((state) => state.quiz.espionageNo);

// const [question, setquestion] = useState(1);
// const [quizCompletion, setQuizCompletion] = useState(0);
// let navigate = useNavigate();
// let dispatch = useDispatch();

//   return (
//     <div className="bg-red-500">
//       <Navbar />

//       <div>
//         <div
//           style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
//           className="w-[95%] md:w-[60%] p-10 rounded-[25px] h-auto md:h-[80vh]  bg-zinc-50 mt-20 mx-auto my-auto border-2  relative"
//         >
//           {question === 1 && <Genres />}
//           {question === 2 && <MovieDuration />}
//           {question === 3 && <MovieDuration2 />}
//           {question === 4 && <RatedMovies />}
//           {question === 5 && <MovieScore />}
//           {question === 6 && <Country />}
//           {question === 7 && <OtherRequirment />}
//           {question === 8 && <FilmFocus />}

// <div className="w-full right-1  p-10 flex flex-row  md:space-y-0 justify-between items-center absolute bottom-0">
//   {question === 1 ? (
//     ""
//   ) : (
//     <button
//       onClick={() => {
//         setquestion(question - 1);
//         setQuizCompletion(quizCompletion - 12.5);
//       }}
//       className=" main-quiz-btn-resp md:main-quiz-btn border-[#c33764] text-[#c33764]"
//     >
//       Previous Question
//     </button>
//   )}
//   {question === 1 ? (
//     ""
//   ) : (
//     <button
//       onClick={() => setquestion(question + 1)}
//       className="main-quiz-btn-resp md:main-quiz-btn "
//     >
//       I Don't know{" "}
//     </button>
//   )}
//   {question === 8 ? (
//     <button
//       onClick={() => navigate("/finish")}
//       className="main-quiz-btn-resp md:main-quiz-btn bg-[#3a72b9] text-white"
//     >
//       Finish quiz
//     </button>
//   ) : (
//     <button
//       onClick={() => {
//         setquestion(question + 1);
//         setQuizCompletion(quizCompletion + 12.5);
//       }}
//       className="main-quiz-btn-resp md:main-quiz-btn border-[#3a72b9]"
//     >
//       Next Question
//     </button>
//   )}
// </div>
//         </div>
//       </div>
//       <div className="w-11/12 md:w-[60%] mx-auto mt-10">
//         <h1 className="font-quick text-2xl font-extrabold text-gray-800 mt-2 mb-5">
//           {quizCompletion}% complete
//         </h1>
//         <Slider value={quizCompletion} aria-label="Small" />
//       </div>
//     </div>
//   );
// }

// export default MainQuiz;

import React, { useEffect, useMemo, useState } from "react";
import "../../App.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
// import Slider from "react-rangeslider";
import Multiselect from "multiselect-react-dropdown";
// import "react-rangeslider/lib/index.css";
import Navbar from "../Navbar/Navbar";
// import MultipleValueTextInput from "react-multivalue-text-input";
import { Navigate, useNavigate } from "react-router-dom";
import MultiRangeSlider from "multi-range-slider-react";
import { useSelector, useDispatch } from "react-redux";
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
} from "./quizSlice";

const MainQuiz = () => {
  const [question, setquestion] = useState(1);
  const [quizCompletion, setQuizCompletion] = useState(0);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  return (
    <div className="w-screen h-auto pb-10">
      <Navbar />
      <div className="pt-20">
        <div
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          className="max-w-4xl min-h-[80vh] mx-auto dark:bg-[#262525] rounded-3xl  relative"
        >
          <div className="p-10">
            {question === 1 && <Genres />}
            {question === 2 && <MovieDuration />}
            {question === 3 && <MovieDuration2 />}
            {question === 4 && <RatedMovies />}
            {question === 5 && <MovieScore />}
            {question === 6 && <Country />}
            {question === 7 && <OtherRequirment />}
            {question === 8 && <FilmFocus />}
          </div>
          <div className="w-full  flex flex-row  justify-around items-center absolute bottom-3">
            <button
              onClick={() => {
                setquestion(question - 1);
                setQuizCompletion(quizCompletion - 12.5);
              }}
              className={`main-quiz-btn-resp md:main-quiz-btn border-[#c33764] text-[#c33764] ${
                question > 1 ? "visible" : "invisible"
              }`}
            >
              Previous Question
            </button>

            <button
              onClick={() => setquestion(question + 1)}
              className={`main-quiz-btn-resp md:main-quiz-btn dark:text-white ${
                question > 1 ? "visible" : "invisible"
              }`}
            >
              I Don't know{" "}
            </button>

            {question == 8 ? (
              <button
                onClick={() => navigate("/finish")}
                className="main-quiz-btn-resp md:main-quiz-btn bg-[#3a72b9] text-white"
              >
                Finish quiz
              </button>
            ) : (
              <button
                onClick={() => {
                  setquestion(question + 1);
                  setQuizCompletion(quizCompletion + 12.5);
                }}
                className="main-quiz-btn-resp md:main-quiz-btn border-[#3a72b9] text-[#3a72b9]"
              >
                Next Question
              </button>
            )}
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-2">
          <h1 className="font-quick text-2xl font-extrabold text-gray-800 dark:text-white mt-2 mb-5">
            {quizCompletion}% complete
          </h1>
          {/* <Slider value={quizCompletion} aria-label="Small" /> */}
        </div>
      </div>
    </div>
  );
};

function Genres() {
  const genres1 = useSelector((state) => state.quiz.genres1);
  const genres2 = useSelector((state) => state.quiz.genres2);
  const genres3 = useSelector((state) => state.quiz.genres3);
  const dispatch = useDispatch();

  const [genres, setgenres] = useState({
    activeObject: [],
    objects: [
      {
        id: 1,
        img: "💥",
        title: "Action",
      },
      {
        id: 2,
        img: "🌍",
        title: "Documentary",
      },
      {
        id: 3,
        img: "🌈",
        title: "Animation",
      },
      {
        id: 4,
        img: "🎬",
        title: "Adventure",
      },
      {
        id: 5,
        img: "🐉",
        title: "Fantacy",
      },
      {
        id: 6,
        img: "👻",
        title: "Horor",
      },
      {
        id: 7,
        img: "🤠",
        title: "Western",
      },
      {
        id: 8,
        img: "🔍",
        title: "Krimi",
      },
      {
        id: 9,
        img: "🎵",
        title: "Musical",
      },
      {
        id: 10,
        img: "🧩",
        title: "Mystery",
      },
      {
        id: 11,
        img: "😂",
        title: "Comedy",
      },

      {
        id: 12,
        img: "💘",
        title: "Romantic",
      },
      {
        id: 13,
        img: "🍿",
        title: "Thriller",
      },
    ],
  });

  const toggleActive = (index) => {
    if (genres.activeObject.includes(genres.objects[index])) {
      const itemPos = genres.activeObject.indexOf(genres.objects[index]);
      const rest = [...genres.activeObject];
      rest.splice(itemPos, 1);
      setgenres({
        ...genres,
        activeObject: rest,
      });
    } else {
      setgenres({
        ...genres,
        activeObject: [...genres.activeObject, genres.objects[index]],
      });
    }
  };

  const toggleActiveStyle = (index) => {
    if (genres.activeObject.includes(genres.objects[index])) {
      return "bg-[#3A72B9]";
    }
    return "";
  };

  return (
    <div className="">
      <div className="flex flex-col items-center justify-center ">
        <strong className="quiz_title">
          Pick Genres you are interested in:
        </strong>
        <small className="quiz_title_small">
          You can select up to 3 genres
        </small>
        <div className="mt-10 flex justify-between  flex-wrap ">
          {genres.objects.map((item, idx) => (
            <small
              onClick={() => toggleActive(idx)}
              key={idx}
              className={`flex  border-2 ${toggleActiveStyle(
                idx
              )}  justify-center mb-5 items-center space-x-3 w-60 h-9 rounded-xl`}
            >
              <p>{item.img}</p>

              <p className="font-normal text-base font-poppin  hover:text-gray-500 dark:text-white ">
                {" "}
                {item.title}
              </p>
            </small>
          ))}
        </div>
      </div>
    </div>
  );
}

function MovieDuration() {
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
      <strong className="quiz_title">
        How old would you like the movie to be?
      </strong>
      <small className="quiz_title_small">
        Please drag the circle to adjust the maximum and the rectangle for
        minimum length
      </small>
      <div className="w-full flex mt-8 justify-end">
        <small className="px-14 dark:text-white text-gray-600 text-xl  flex justify-center items-center rounded-3xl border-2">
          {minValueMovieDuration} year
        </small>
        <small className=" flex justify-center items-center text-gray-600   text-6xl">
          -
        </small>
        <small className="px-14  text-gray-600 text-xl flex justify-center dark:text-white items-center rounded-3xl border-2">
          {maxValueMovieDuration} year
        </small>
      </div>

      <div className="w-[90%] mt-10">
        {/* <Slider
          value={handleChange}
          aria-label="Small"
          onChange={(e) => sethandleChange(e)}
        /> */}
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
}

function MovieDuration2() {
  const minValueMin = useSelector((state) => state.quiz.minValueMin);
  const maxValueMin = useSelector((state) => state.quiz.maxValueMin);
  let dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(setminValueMin(e.minValue));
    dispatch(setmaxValueMin(e.maxValue));
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        How long do you want your movie to be?
      </strong>
      <small className="quiz_title_small">
        Please drag the circle to adjust the maximum and the rectangle for
        minimum length
      </small>
      <div className="w-full flex mt-8 justify-end">
        <small className="px-14 dark:text-white text-gray-600 text-xl  flex justify-center items-center rounded-3xl border-2">
          {minValueMin} min
        </small>
        <small className=" flex justify-center items-center text-gray-600   text-6xl">
          -
        </small>
        <small className="px-14  text-gray-600 text-xl flex justify-center dark:text-white items-center rounded-3xl border-2">
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
}

function RatedMovies() {
  const criticsYes = useSelector((state) => state.quiz.criticsYes);
  const criticsNo = useSelector((state) => state.quiz.criticsNo);
  let dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        Do you wish for a well rated movie by critics?
      </strong>
      <small className="quiz_title_small">Select only one answer</small>
      <div className="w-full flex mt-24 mb-24 justify-around">
        <button
          className={`font-quick text-base px-24 py-3 rounded-xl border-2 text font-extrabold ${
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
          className={`font-quick text-base px-24 py-3 rounded-xl border-2 text font-extrabold  ${
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

function MovieScore() {
  const minValueScore = useSelector((state) => state.quiz.minValueScore);
  const maxValueScore = useSelector((state) => state.quiz.maxValueScore);
  let dispatch = useDispatch();
  const handleInput = (e) => {
    dispatch(setminValueScore(e.minValue));
    dispatch(setmaxValueScore(e.maxValue));
  };
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        Please select the range of the movie score you want
      </strong>
      <small className="quiz_title_small">
        We are using rotten tomatoes 🍅 for our scale
      </small>
      <div className="w-full flex mt-8 justify-end">
        <small className="px-14 dark:text-white text-gray-600 text-xl  flex justify-center items-center rounded-3xl border-2">
          {minValueScore}
        </small>
        <small className=" flex justify-center items-center text-gray-600   text-6xl">
          -
        </small>
        <small className="px-14  text-gray-600 text-xl flex justify-center text items-center rounded-3xl border-2">
          {maxValueScore}
        </small>
      </div>
      <div className="w-[90%] mt-10">
        <MultiRangeSlider
          min={0}
          max={10}
          step={1}
          ruler={true}
          label={true}
          preventWheel={false}
          minValue={minValueScore}
          maxValue={maxValueScore}
          baseClassName="multi-range-slider"
          onInput={(e) => {
            handleInput(e);
          }}
        />
      </div>
    </div>
  );
}

function Country() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        Do you have a preferred country where you want your movie to be from?
      </strong>
      <small className="quiz_title_small">
        We are using rotten tomatoes 🍅 for our scale
      </small>
      <div className=" flex mt-8 justify-center">
        <Multiselect
          showArrow
          customArrow={
            <AiOutlinePlusCircle className="w-8 relative  right-3 -top-2 h-8" />
          }
          customCloseIcon={<MdOutlineClear />}
          displayValue="key"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={[
            {
              cat: "Group 1",
              key: "India",
            },
            {
              cat: "Group 1",
              key: "America",
            },
            {
              cat: "Group 1",
              key: "Australia",
            },
            {
              cat: "Group 2",
              key: "China",
            },
            {
              cat: "Group 1",
              key: "Pakistan",
            },
            {
              cat: "Group 1",
              key: "Brazil",
            },
            {
              cat: "Group 1",
              key: "Britain",
            },
            {
              cat: "Group 2",
              key: "Russia",
            },
            {
              cat: "Group 2",
              key: "Country E",
            },
            {
              cat: "Group 2",
              key: "Country F",
            },
            {
              cat: "Group 2",
              key: "Country G",
            },
          ]}
          placeholder="Search here"
        />
      </div>
    </div>
  );
}
function OtherRequirment() {
  const [showKeywords, setKeywords] = React.useState(true);
  const keywords = "keywords";
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        Do you have extra requirements you would like to see in the movie?
      </strong>
      <small className="quiz_title_small">
        Please select what you are looking for
      </small>
      <div className="w-full flex justify-center flex-col items-center mt-10">
        {/* <MultipleValueTextInput
          className="multitext"
          onItemAdded={() => setKeywords(false)}
          onItemDeleted={(item, allItems) =>
            console.log(`Item removed: ${item}`)
          }
          name="item-input"
          placeholder="Actor"
          deleteButton={
            <span>
              <MdOutlineClear />
            </span>
          }
        /> */}
        {/* <MultipleValueTextInput
          className="multitext"
          onItemAdded={() => setKeywords(false)}
          onItemDeleted={(item, allItems) =>
            console.log(`Item removed: ${item}`)
          }
          name="item-input"
          placeholder="Cast"
          deleteButton={
            <span>
              <MdOutlineClear />
            </span>
          }
        /> */}
        {/* <MultipleValueTextInput
          className="multitext"
          onItemAdded={() => setKeywords(false)}
          onItemDeleted={(item, allItems) =>
            console.log(`Item removed: ${item}`)
          }
          name="item-input"
          placeholder="Keyword"
          deleteButton={
            <span>
              <MdOutlineClear />
            </span>
          }
        /> */}
      </div>
    </div>
  );
}

function FilmFocus() {
  const espionageYes = useSelector((state) => state.quiz.espionageYes);
  const espionageNo = useSelector((state) => state.quiz.espionageNo);
  let dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        Would you like a film focused on espionage and spies?
      </strong>
      <small className="quiz_title_small">Select only one answer</small>
      <div className="w-full flex mt-24 mb-24 justify-around">
        <button
          className={`font-quick text-base px-24 py-3 rounded-xl border-2 text font-extrabold ${
            espionageYes ? "bg-[#3A72B9]" : ""
          }`}
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          onClick={() => {
            dispatch(setespionageYes(true));
            dispatch(setespionageNo(false));
          }}
        >
          Yes
        </button>
        <button
          className={`font-quick text-base px-24 py-3 rounded-xl border-2 text font-extrabold ${
            espionageNo ? "bg-[#3A72B9]" : ""
          }`}
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          onClick={() => {
            dispatch(setespionageYes(false));
            dispatch(setespionageNo(true));
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

function Espionage() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <strong className="quiz_title">
        Would you like a film focused on espionage and spies
      </strong>
      <small className="quiz_title_small">Select only one answer</small>
      <div className="w-full flex mt-24 mb-24 justify-around">
        <button
          className="font-quick text-base px-24 py-3 rounded-xl border-2 font-extrabold text"
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
        >
          Yes
        </button>
        <button
          className="font-quick text-base px-24 py-3 rounded-xl border-2 font-extrabold text"
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default MainQuiz;
