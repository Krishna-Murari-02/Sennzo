import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import MainQuiz from "./MainQuiz";

function Sub() {
  let navigate = useNavigate();
  return (
    <div className="w-full">
      <Navbar />
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
      <div className="flex md:w-[70%] w-11/12 mx-auto justify-center">
        <div className=" flex md:flex-wrap md:justify-center items-center overflow-x-scroll scrollbar-hide gap-5">
          <div
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Movie.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              onClick={() => navigate("/mainquiz")}
              className="h-full flex flex-col justify-center items-center"
            >
              <strong className="quiz-text invisible">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Movies</strong>
            </div>
          </div>

          <div
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/TvShows.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              onClick={() => navigate("/mainquiz")}
              className="h-full flex flex-col justify-center items-center  "
            >
              <strong className="quiz-text invisible">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Tv Shows</strong>
            </div>
          </div>
          <div
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Books.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="glass-blur h-full flex flex-col justify-center items-center  ">
              <strong className="quiz-text">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Books</strong>
            </div>
          </div>
          <div
            className="h-[350px] w-56 rounded-2xl overflow-hidden"
            style={{
              backgroundImage: "url('/img/Games.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="glass-blur h-full flex flex-col justify-center items-center  ">
              <strong className="quiz-text">Coming Soon</strong>
              <strong className="quiz-border"></strong>
              <strong className="quiz-text-bottom">Games</strong>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Sub;
