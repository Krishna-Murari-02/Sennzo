import React from "react";
import { GrStar } from "react-icons/gr";

const Rating = () => {
  return (
    <div className="h-16  glass-rating gap-10 bg-gray-200 flex pl-7">
      <div className="flex flex-col justify-between relative -top-3 ">
        <img className="w-16" src="/img/imdb.png" alt="" />
        <p className="text-2xl text-white font-quick  font-medium">88%</p>
      </div>
      <div className="flex flex-col justify-between relative -top-3 ">
        <img className="h-7" src="/img/tmdb.png" alt="" />
        <p className="text-2xl text-white font-quick  font-medium">9.1</p>
      </div>
      <div className="flex flex-col justify-between relative -top-3 ">
        <div className="flex space-x-1 justify-center items-center">
          <img className="w-4 " src="/img/logo_icon.svg" alt="" />
          <span
            className={`font-pacifico text-lg tracking-wider font-light ${"text-black dark:text-white"} `}
          >
            Sennzo
          </span>
        </div>
        <div className="flex justify-around">
          <GrStar className="text-yellow-400 text-xl" />
          <GrStar className="text-yellow-400 text-xl" />
          <GrStar className="text-yellow-400 text-xl" />
          <GrStar className="text-yellow-400 text-xl" />
          <GrStar className="text-yellow-400 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Rating;
