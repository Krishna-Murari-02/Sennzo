import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMoviePopup, setMoviePopupId } from "../ForYou/movieDetailsSlice";
import { GoPrimitiveDot } from "react-icons/go";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import axios from "axios";

import { findCountryCode, timeConvert } from "../../lib/utils";
import Rating from "../DryComponents/Rating";

function MovieDes({ movie_id }) {
  const [trailerUrl, settrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          settrailerUrl(urlParams.get("v"));
        })
        .catch((err) => {});
    }
  };
  const opts = {
    height: "350",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const [movieDetailsData, setmovieDetailsData] = useState();

  const MovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US`
    );
    setmovieDetailsData(response.data);
  };

  useEffect(() => {
    MovieDetails();
  }, [movie_id]);

  const dispatch = useDispatch();
  return (
    <div className="max-w-5xl  h-52 rounded-[30px]  overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${
            movieDetailsData?.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetailsData?.backdrop_path}`
              : "/img/lion.svg"
          })`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full flex "
      >
        <img
          className="w-32"
          onClick={() => {
            dispatch(setMoviePopupId(movie_id));
            dispatch(setMoviePopup(true));
          }}
          src={
            movieDetailsData?.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movieDetailsData?.poster_path}`
              : "/img/lion.svg"
          }
          alt=""
        />
        <div className="w-full glass-blur2 pl-5 py-1 space-y-3">
          <h2 className="text-xl font-quick font-semibold tracking-wider text-white">
            {movieDetailsData?.original_title}
          </h2>

          <div className="flex justify-between">
            <div className="space-y-3">
              <div className="flex gap-2  flex-wrap">
                {movieDetailsData?.genres.map((e, key) => (
                  <p className="glass-rating-desc  rounded-full  px-3 text-sm text-white font-quick font-medium ">
                    {e.name}
                  </p>
                ))}
              </div>
              <div className="flex gap-2">
                <p className="tracking-wider text-xs text-gray-300 font-poppin font-normal">
                  2h 49m
                </p>
                <p className="tracking-wider text-xs text-gray-300 font-poppin font-normal">
                  <GoPrimitiveDot />
                </p>

                <p className="tracking-wider text-xs text-gray-300 font-poppin font-normal">
                  2009
                </p>
                <p className="tracking-wider text-xs text-gray-300 font-poppin font-normal">
                  <GoPrimitiveDot />
                </p>
                {movieDetailsData?.production_countries?.map((country) => (
                  <p className="tracking-wider text-xs text-gray-300 font-poppin font-normal">
                    {findCountryCode(country.name) || country.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="mr-5 ">
              <Rating />
            </div>
          </div>
          <h2 className="text-xl font-quick font-medium tracking-wider text-white">
            Descriptiom
          </h2>
          <p className="tracking-wider text-xs text-gray-300 font-poppin font-normal">
            {movieDetailsData?.overview.substr(1, 200)}...
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-2xl  overflow-hidden w-[95%]">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>

    // <div className="">
    //   <div className="w-full cursor-pointer shadow-movdesc hover:shadow-hoverMovdesc  rounded-2xl flex justify-between pt-3 pl-4 pr-8 pb-1 ">
    //     <div className="flex justify-between">
    //       <div className="flex space-x-10 ">
    //         <div className="flex flex-col justify-center space-y-2">
    //           <img
    //             className="w-28 rounded-md h-40 shadow-md"
    //             src={
    // movieDetailsData?.poster_path
    //   ? `https://image.tmdb.org/t/p/w500/${movieDetailsData?.poster_path}`
    //   : "/img/lion.svg"
    //             }
    //             alt=""
    //           />
    //         </div>
    //         <div
    // onClick={() => {
    //   dispatch(setMoviePopupId(movie_id));
    //   dispatch(setMoviePopup(true));
    // }}
    //           className="flex items-start flex-col space-y-5 "
    //         >
    //           <div className="flex justify-between ">
    //             <div className="flex flex-col space-y-5  ">
    //               <h3 className="font-bold font-quick text-2xl text-left ">
    //                 {movieDetailsData?.original_title}
    //               </h3>
    //               <p className="font-normal font-poppin text-sm flex items-center space-x-5">
    //                 <p className=""> Genre:</p>{" "}
    //                 <p className="flex  flex-wrap">
    //                   {movieDetailsData?.genres.map((e, key) => (
    //                     <p
    //                       key={key}
    //                       className="text-gray-700 text-sm mb-2 m-1 px-3 ring-gray-300 ring-1 shadow-md rounded-full cursor-pointer font-normal font-poppin "
    //                     >
    //                       {e.name}
    //                     </p>
    //                   ))}
    //                 </p>
    //               </p>
    //             </div>
    //             <Rating />
    //           </div>
    //           <p className="font-normal font-poppin text-sm flex items-center space-x-3 ">
    //             <p>{timeConvert(movieDetailsData?.runtime)}</p>
    //             <p className="text-base font-semibold">
    //               <GoPrimitiveDot />
    //             </p>
    //             <p>{movieDetailsData?.release_date.slice(0, 4)}</p>
    //             <p className="text-base font-semibold">
    //               <GoPrimitiveDot />
    //             </p>
    // {movieDetailsData?.production_countries?.map((country) => (
    //   <p>{findCountryCode(country.name) || country.name}</p>
    // ))}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // <div className="mt-3 rounded-2xl  overflow-hidden w-[95%]">
    //   {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    // </div>
    // </div>
  );
}

export default MovieDes;
