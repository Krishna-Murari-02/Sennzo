import React, { useEffect, useState } from "react";
import { MdOutlineClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setMoviePopup, setMoviePopupId } from "../ForYou/movieDetailsSlice";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { GrStar } from "react-icons/gr";
import { GoPrimitiveDot } from "react-icons/go";
import { timeConvert, findCountryCode } from "../../lib/utils";

function MovieDetails() {
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
  const dispatch = useDispatch();
  const movie_Popup_id = useSelector(
    (state) => state.moviePopup.movie_Popup_id
  );
  const [movieDetailsData, setmovieDetailsData] = useState();
  const [countryName, setcountryName] = useState();
  const [selectcountryName, setSelectcountryName] = useState("US");
  const [castDetailsData, setCastDetailsData] = useState([]);
  const [similarMovieData, setsimilarMovieData] = useState([]);
  const [watchProviderDetails, setwatchProviderDetails] = useState();
  const [streaming, setstreaming] = useState(1);
  const [category, setcategory] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        title: "Streaming On",
      },
      {
        id: 2,
        title: "Buy On",
      },
      {
        id: 3,
        title: "Rent On",
      },
    ],
  });

  const toggleActive = (index) => {
    setcategory({
      ...category,
      activeObject: category.objects[index],
    });
  };
  const toggleActiveStyle = (index) => {
    if (category.objects[index] === category.activeObject) {
      return "px-2 rounded-full py-2  bg-[#3a72b9] text-white  min-w-[190px]  text-base font-bold";
    }
    return "hover:bg-zinc-200 px-2 rounded-full py-2  text-[#3a72b9]  min-w-[190px]  text-base font-bold";
  };

  useEffect(() => {
    setcategory({ ...category, activeObject: category.objects[0] });
  }, []);

  const MovieDetails = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_Popup_id}?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US`
      )
      .then((response) => {
        if (response.status === 200) {
          // console.log(response)
          setmovieDetailsData({
            release_date: response.data.release_date,
            genres: response.data.genres,
            original_title: response.data.original_title,
            overview: response.data.overview,
            poster_path: response.data.poster_path,
            vote_average: response.data.vote_average,
            runtime: response.data.runtime,
            production_countries: response.data.production_countries,
          });
        }
      })
      .catch((error) => {});
  };
  const CastFunction = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_Popup_id}/credits?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US`
    );
    setCastDetailsData(
      response.data.cast.map((item) => ({
        cast_id: item.id,
        original_name: item.original_name,

        character: item.character,
        profile_path: item.profile_path,
      }))
    );
  };
  const SimlarMovie = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_Popup_id}/similar?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US&page=1`
    );
    setsimilarMovieData(
      response.data.results.map((item) => ({
        id: item.id,
        poster_path: item.poster_path,
      }))
    );
  };
  const WatchProvider = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_Popup_id}/watch/providers?api_key=2330410c75bb1001e77fc4cddc8de20d`
    );
    for (const [key, value] of Object.entries(response.data.results)) {
      if (key === selectcountryName) {
        setwatchProviderDetails(value);
        return;
      } else {
        setwatchProviderDetails(null);
      }
    }
  };

  const Country = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/configuration/countries?api_key=2330410c75bb1001e77fc4cddc8de20d`
    );
    setcountryName(
      response.data.map((country) => ({
        english_name: country.english_name,
        iso_3166_1: country.iso_3166_1,
      }))
    );
  };

  useEffect(() => {
    MovieDetails();
    CastFunction();
    WatchProvider();
    SimlarMovie();
    Country();
  }, [selectcountryName, movie_Popup_id]);
  console.log("code", selectcountryName);
  return (
    <div className="overflow-x-hidden overflow-y-scroll scrollbar-hide h-[80vh]  relative">
      <MdOutlineClear
        onClick={() => dispatch(setMoviePopup(false))}
        className="w-10 h-10  absolute right-0 top-0  text-gray-700 hover:cursor-pointer hover:text-gray-900"
      />
      <div className="w-full text-left flex mt-8 space-x-7 pr-8 pl-8 ">
        <div className=" space-y-4">
          <img
            className="h-64 w-60 rounded-xl shadow-img-sh"
            src={
              movieDetailsData?.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieDetailsData?.poster_path}`
                : "/img/lion.svg"
            }
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between ">
            <div className="space-y-3 ">
              <h3 className="font-extrabold font-quick text-3xl ">
                {movieDetailsData?.original_title}
              </h3>
              <div className="flex space-x-5">
                {movieDetailsData?.genres.map((ele, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 text-sm  px-3 ring-gray-300 ring-1 shadow-sm rounded-full cursor-pointer font-normal font-poppin "
                  >
                    {ele.name}
                  </p>
                ))}
              </div>
              <p className="font-normal font-poppin text-sm flex items-center space-x-1 ">
                <p>{timeConvert(movieDetailsData?.runtime)}</p>
                <p className="text-sm">
                  <GoPrimitiveDot />
                </p>
                <p>{movieDetailsData?.release_date.slice(0, 4)}</p>
                <p className="text-sm">
                  <GoPrimitiveDot />
                </p>
                {movieDetailsData?.production_countries?.map((country) => (
                  <p>{findCountryCode(country.name)}</p>
                ))}
              </p>
            </div>
            <div className="w-96 h-20 pl-8 pr-2 mt-14 bg-gray-200 flex justify-between">
              <div className="flex flex-col -mt-4 text-center">
                <img className="w-20" src="/img/imdb.png" alt="" />
                <p className="text-3xl font-medium">88%</p>
              </div>
              <div className="flex flex-col ml-8 mr-8 -mt-4 text-center">
                <img className="w-16" src="/img/tmdb.png" alt="" />
                <p className="text-3xl font-medium">9.1</p>
              </div>
              <div className="flex flex-col -mt-4 text-center">
                <img className="w-20 h-12" src="/img/logowhite(3).png" alt="" />
                <div className="flex justify-around">
                  <GrStar className="text-yellow-400 text-xl" />
                  <GrStar className="text-yellow-400 text-xl" />
                  <GrStar className="text-yellow-400 text-xl" />
                  <GrStar className="text-yellow-400 text-xl" />
                  <GrStar className="text-yellow-400 text-xl" />
                </div>
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-gray-800 font-quick text-2xl pt-3 pb-3 ">
            Descriptions:
          </h3>

          <p className=" font-medium font-poppin text-gray-600 text-sm">
            {movieDetailsData?.overview}
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-2xl  overflow-hidden ">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>

      <div className="flex justify-between mt-8 pb-8 pr-8 pl-10 space-x-8 w-full">
        <div
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          className=" h-min rounded-2xl px-1 py-1"
        >
          <button
            onClick={() => handleClick(movieDetailsData?.original_title)}
            className="font-poppin font-medium items-center flex justify-center w-full text-base border rounded-full border-[#c33764] text-[#c33764] "
          >
            Trailer
          </button>
          <div className="rounded-xl mt-1  border border-[#3a72b9]">
            <p className="text-[#3a72b9] px-2 font-semibold text-base  font-quick">
              Seen this? and rate it.
            </p>
            <div className="flex space-x-1 justify-around">
              <p className="text-3xl text-gray-300  ">☆</p>

              <p className="text-3xl text-gray-300">☆</p>
              <p className="text-3xl text-gray-300">☆</p>
              <p className="text-3xl text-gray-300">☆</p>
              <p className="text-3xl text-gray-300">☆</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4  p-1 w-[73%]">
          <div
            style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
            className="rounded-3xl p-3 py-0 pb-2 pr-4 "
          >
            <div className="flex items-center justify-end w-full  ">
              {/* <h3 className="font-semibold text-gray-900 font-quick text-xl "></h3> */}

              <select
                className="outline-none shadow-md ring-1 ring-gray-300 mt-1 rounded-md px-1 py-3"
                value={selectcountryName}
                id=""
                onChange={(e) => {
                  setSelectcountryName(e.target.value);
                }}
              >
                {countryName?.map((country, key) => (
                  <option key={key} value={country?.iso_3166_1}>
                    {country?.english_name}
                  </option>
                ))}
              </select>
            </div>

            <div className=" bg-zinc-100 flex justify-evenly w-[80%]  mx-auto mb-10 mt-8 font-quick rounded-full">
              {category.objects.map((item, index) => (
                <button
                  onClick={() => {
                    toggleActive(index);
                    setstreaming(item.id);
                  }}
                  key={index}
                  className={`${toggleActiveStyle(index)}`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="flex space-x-3 h-16 overflow-x-scroll scrollbar-hide">
              {streaming === 1 &&
                watchProviderDetails?.buy?.map((e) => (
                  <img
                    className="h-12"
                    src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`}
                    alt="Images"
                  />
                ))}
              {streaming === 1 &&
                watchProviderDetails?.rent?.map((e) => (
                  <img
                    className="h-12"
                    src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`}
                    alt="Images"
                  />
                ))}
              {streaming === 2 &&
                watchProviderDetails?.buy?.map((e) => (
                  <img
                    className="h-12"
                    src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`}
                    alt="Images"
                  />
                ))}
              {streaming === 3 &&
                watchProviderDetails?.rent?.map((e) => (
                  <img
                    className="h-12"
                    src={`https://image.tmdb.org/t/p/w500/${e.logo_path}`}
                    alt="Images"
                  />
                ))}
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
            className="rounded-3xl  px-3 py-1 w-full "
          >
            <h3 className="font-semibold text-gray-900 font-quick text-xl  ">
              Cast:
            </h3>
            <div className="flex space-x-5 overflow-x-scroll scrollbar-hide ">
              {castDetailsData.map((cast, idx) => (
                <div key={idx} className="flex flex-col  items-center w-52">
                  <img
                    className=" rounded-md"
                    style={{ minWidth: "80px" }}
                    src={
                      cast?.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast?.profile_path}`
                        : "/img/noimage.png"
                    }
                    alt=""
                  />
                  <small className=" font-semibold font-quick text-sm">
                    {cast?.original_name}
                  </small>
                  <small className="text-gray-500 font-quick text-xs">
                    {cast?.character}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
        className=" w-[98%] mb-4 px-5 mx-auto border  py-2 rounded-2xl"
      >
        <h3 className="font-semibold text-gray-900 font-quick text-xl  ">
          Similar Movie:
        </h3>
        <div className="flex space-x-5 overflow-x-scroll scrollbar-hide ">
          {similarMovieData.map((cast, idx) => (
            <div key={idx} className="flex flex-col  items-center w-52">
              <img
                style={{ minWidth: "100px" }}
                className=" shadow-img-sh rounded-md"
                src={
                  cast?.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${cast?.poster_path}`
                    : "/img/noimage.png"
                }
                alt=""
                onClick={() => dispatch(setMoviePopupId(cast.id))}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
