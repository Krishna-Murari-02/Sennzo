import React from "react";
import { useNavigate } from "react-router-dom";
function Quiz() {
  let navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="flex justify-center pt-20 mb-28 md:text-6xl text-3xl font-extrabold font-quick ">
        <div className="text-black dark:text-white">
          <small className="md:text-6xl text-3xl font-extrabold font-quick text-[#3a72b9]">
            Select
          </small>{" "}
          one of the categories below <br /> to get started with the{" "}
          <small className="text-[#c33764] md:text-6xl text-3xl font-extrabold font-quick">
            Quiz
          </small>
          .
        </div>
      </div>
      <div className="flex md:w-[70%] w-11/12 mx-auto justify-center mb-10">
        <div className=" flex md:flex-wrap md:justify-center items-center overflow-x-scroll scrollbar-hide gap-5">
          <div
            onClick={() => navigate("/sub")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/entertainment.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="h-full flex flex-col justify-center items-center">
              <strong className="quiz-text invisible">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Entertainment</strong>
            </div>
          </div>

          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Electronic.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              onClick={() => navigate("/mainquiz")}
              className=" glass-blur h-full flex flex-col justify-center items-center  "
            >
              <strong className="quiz-text ">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Electronic</strong>
            </div>
          </div>
          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Leisure.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="glass-blur h-full flex flex-col justify-center items-center  ">
              <strong className="quiz-text">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Leisure</strong>
            </div>
          </div>
          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Finance.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="glass-blur h-full flex flex-col justify-center items-center  ">
              <strong className="quiz-text">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Finance</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:w-[70%] w-11/12 mx-auto justify-center mb-10">
        <div className=" flex md:flex-wrap md:justify-center items-center overflow-x-scroll scrollbar-hide gap-5">
          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Auto.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              onClick={() => navigate("/mainquiz")}
              className="glass-blur h-full flex flex-col justify-center items-center"
            >
              <strong className="quiz-text ">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Auto</strong>
            </div>
          </div>

          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Luxury.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              onClick={() => navigate("/mainquiz")}
              className="glass-blur h-full flex flex-col justify-center items-center  "
            >
              <strong className="quiz-text ">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Luxury</strong>
            </div>
          </div>
          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Sport.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="glass-blur h-full flex flex-col justify-center items-center  ">
              <strong className="quiz-text">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Sports</strong>
            </div>
          </div>
          <div
            onClick={() => navigate("/progress")}
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Home.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="glass-blur h-full flex flex-col justify-center items-center  ">
              <strong className="quiz-text">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Home</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
