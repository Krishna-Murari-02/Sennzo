// import Slider from "react-rangeslider";
import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import MovieDes from "../ForYou/MovieDes";
import axios from "axios";
import MovieDetails from "../ForYou/MovieDetails";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import TestiMonialsDetails from "../Landing/TestiMonialsDetails";
import Genres from "../ChangableQuiz/Genres";
import MovieDuration from "../ChangableQuiz/MovieDuration";
import MovieDuration2 from "../ChangableQuiz/MovieDuration2";
import Rated from "../ChangableQuiz/Rated";

function CompleteQuiz() {
  const [showMatch, setShowMatch] = useState(false);
  let navigate = useNavigate();
  const movie_Popup = useSelector((state) => state.moviePopup.movie_Popup);
  const shuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const testiMonials = [
    <Genres />,
    <MovieDuration />,
    <MovieDuration2 />,
    <Rated />,
  ];
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  const genres1 = useSelector((state) => state.quiz.genres1);
  const genres2 = useSelector((state) => state.quiz.genres2);
  const genres3 = useSelector((state) => state.quiz.genres3);
  const minValueMovieDuration = useSelector(
    (state) => state.quiz.minValueMovieDuration
  );
  const maxValueMovieDuration = useSelector(
    (state) => state.quiz.maxValueMovieDuration
  );

  const minValueScore = useSelector((state) => state.quiz.minValueScore);
  const maxValueScore = useSelector((state) => state.quiz.maxValueScore);

  const [recomendedMovieData, setrecomendedMovieData] = useState([]);
  const [suffleArray, setsuffleArray] = useState([]);
  // https://api.themoviedb.org/3/discover/movie?api_key=1678287e4d3f1a445b8c833b66b2bdce&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${date}&vote_average.gte=${avgVote}&with_genres=${generaName1}%2C${generaName2}%2C${generaName3}&with_runtime.gte=${duration}&with_watch_monetization_types=flatrate

  // `https://pawater.in/movies/?start_date=${minValueMovieDuration}-01-01&end_date=${maxValueMovieDuration}-01-01&vote_average__gte=${minValueScore}&vote_average__lte=${maxValueScore}&runtime=${minValueMovieDuration}&genres=${genres1},${genres2},${genres3}`
  const RecomendationMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=1678287e4d3f1a445b8c833b66b2bdce&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.gte=${minValueMovieDuration}-01-01&vote_average.gte=${minValueScore}&with_genres=${genres1}%2C${genres2}%2C${genres3}&with_runtime.gte=${minValueMovieDuration}&with_watch_monetization_types=flatrate`
      )

      .then((response) => {
        if (response.status === 200) {
          // setsuffleArray(
          //   response?.data.results.map((item) => ({
          //     movie_id: item.id,
          //   }))
          // );
          // setrecomendedMovieData(
          //   response?.data.results.map((item) => ({
          //     movie_id: item.id,
          //   }))
          // );
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    RecomendationMovie();
  }, []);

  const [categoryTitle, setcategoryTitle] = useState(1);
  const [category, setcategory] = useState({
    activeObject: null,
    objects: [
      {
        id: 1,
        title: "The best match",
        desc: "Our recommendation for you 💯",
      },
      {
        id: 2,
        title: "Almost perfect match",
        desc: "Most popular 🔥",
      },
      {
        id: 3,
        title: "Experimental pick",
        desc: "Recently released 🆕",
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
      return "for-you-cat-active-resp md:for-you-cat-active";
    }
    return "for-you-cat-resp md:for-you-cat";
  };

  useEffect(() => {
    setcategory({ ...category, activeObject: category.objects[0] });
  }, []);
  return (
    <div className="w-screen min-h-screen">
      <Navbar />
      <div className="max-w-5xl pt-20 mb-8 flex space-y-2 flex-col mx-auto">
        <strong className="font-quick text-4xl font-extrabold text-center text">
          You have completed the quiz.
        </strong>
        {/* <small className="font-poppin text-base font-medium text-gray-500 text-center">
          You can slide through the quiz, click if you want to edit it
        </small> */}
      </div>
      <div className="flex  items-center justify-center w-full ">
        {/* <OwlCarousel
          id="customer-testimonoals"
          className="owl-carousel owl-theme"
          {...options}
        >
          {testiMonials.map((testiMonialDetail) => (
            <div onClick={() => navigate("/mainquiz")} className="item-quiz">
              <div className="shadow-effect-quiz">{testiMonialDetail}</div>
            </div>
          ))}
        </OwlCarousel> */}
      </div>
      <div className="max-w-4xl  mx-auto mt-10">
        <h1 className="font-quick text-2xl font-extrabold dark:text-white text-gray-800 mt-2 mb-5">
          100% complete
        </h1>

        {/* <Slider value={100} aria-label="Small" /> */}
      </div>
      <div className="w-full flex mt-24 mb-24 justify-around">
        <button
          onClick={() => navigate("/mainquiz")}
          className="font-quick text-base text-[#c33764] px-16 py-3 rounded-xl border-2 font-extrabold hover:shadow-md"
        >
          Edit Answer
        </button>
        <button
          onClick={() => setShowMatch(true)}
          className="font-quick text-base px-16 text-[#3a72b9] py-3 rounded-xl border-2 font-extrabold hover:shadow-md"
        >
          Show Mateches
        </button>
      </div>
      {showMatch ? (
        <div
          style={{ boxShadow: "0px 0px 5px rgb(0 0 0 / 50%)" }}
          className="max-w-4xl mx-auto  rounded-3xl p-10 pt-3 text-center dark:bg-[#262525]"
        >
          <h1 className="font-quick font-bold text-5xl dark:text-white">
            Here are our recomendations:
          </h1>
          <div className="max-w-4xl bg-zinc-100  flex justify-between mx-auto mt-40 mb-20 font-quick rounded-full overflow-x-scroll scrollbar-hide">
            {category.objects.map((item, index) => (
              <button
                onClick={() => {
                  toggleActive(index);
                  setcategoryTitle(item.id);
                }}
                key={index}
                className={`${toggleActiveStyle(index)}`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="mt-10 space-y-3">
            {categoryTitle == 1 &&
              recomendedMovieData
                .slice(0, 3)
                .map((item, idx) => (
                  <MovieDes key={idx} movie_id={item?.movie_id} />
                ))}
            {categoryTitle == 2 &&
              recomendedMovieData
                .slice(3, 8)
                .map((item, idx) => (
                  <MovieDes key={idx} movie_id={item?.movie_id} />
                ))}
            {categoryTitle == 3 &&
              recomendedMovieData
                .slice(0, 2)
                .map((item, idx) => (
                  <MovieDes key={idx} movie_id={item?.movie_id} />
                ))}
          </div>
        </div>
      ) : null}
      {movie_Popup ? (
        <div className=" ">
          <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"></div>
          <div className=" fixed top-0 left-[50%] translate-x-[-50%]  w-[65%] rounded-[40px] p-6  mt-20 pt-3 bg-white">
            {/* <MovieDetails /> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CompleteQuiz;
