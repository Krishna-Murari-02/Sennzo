import React, { useState } from "react";
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

function Genres() {
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
        <strong className="font-quick text-sm font-extrabold text-center">
          Pick Genres you are interested in:
        </strong>
        <small className="font-poppin text-xs font-normal text-gray-500 text-center">
          You can select up to 3 genres
        </small>
        <div className="mt-10 flex justify-between  flex-wrap ">
          {genres.objects.map((item, idx) => (
            <small
              onClick={() => toggleActive(idx)}
              key={idx}
              className={`flex border-2 ${toggleActiveStyle(
                idx
              )}  justify-center mb-3 items-center space-x-3 w-32 h-7 rounded-lg`}
            >
              <p>{item.img}</p>

              <p className="font-normal text-xs font-poppin  hover:text-gray-900">
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

export default Genres;
