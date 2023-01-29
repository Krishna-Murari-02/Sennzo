// import React, { useEffect, useState } from "react";
// import MovieDes from "./MovieDes";
// import MovieDetails from "./MovieDetails";
// import Navbar from "../Navbar/Navbar";
// import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";

// import ReactCardFlip from "react-card-flip/lib/ReactCardFlip";
// import Footer from "../Footer/Footer";

// function ForYou() {
//   const [isFlipped, isSetFlipped] = useState(false);

//   function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       let temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }

//     return array;
//   }
//   const movie_Popup = useSelector((state) => state.moviePopup.movie_Popup);

//   const [categoryTitle, setcategoryTitle] = useState(
//     "Our recommendation for you 💯"
//   );
//   const [recomendationMovie, setrecomendationMovie] = useState(
//     "https://api.themoviedb.org/3/movie/top_rated?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US&page=1"
//   );

//   const [category, setcategory] = useState({
//     activeObject: null,
//     objects: [
//       {
//         id: 1,
//         title: "Recommend",

//         desc: "Our recommendation for you 💯",
//         api: "https://api.themoviedb.org/3/movie/top_rated?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US&page=1",
//       },
//       {
//         id: 2,
//         title: "Popular",
//         desc: "Most popular 🔥",
//         api: "https://api.themoviedb.org/3/movie/popular?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US&page=1",
//       },
//       {
//         id: 3,
//         title: "New",
//         desc: "Recently released 🆕",
//         api: "https://api.themoviedb.org/3/movie/upcoming?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US&page=1",
//       },
//       {
//         id: 4,
//         title: "Experimental",
//         desc: "Experimental Picks",
//         api: "https://api.themoviedb.org/3/movie/top_rated?api_key=2330410c75bb1001e77fc4cddc8de20d&language=en-US&page=1",
//       },
//     ],
//   });

//   const Image_text_Array = [
//     {
//       img: "/img/entertainment.png",
//       title: "Entertainment",
//       isFlip: false,
//     },
//     {
//       img: "/img/Electronic.png",
//       title: "Electronic",
//       isFlip: true,
//     },
//     {
//       img: "/img/Leisure.png",
//       title: "Leisure",
//       isFlip: true,
//     },
//     {
//       img: "/img/Finance.png",
//       title: "Finance",
//       isFlip: true,
//     },
//     {
//       img: "/img/Auto.png",
//       title: "Auto",
//       isFlip: true,
//     },
//     {
//       img: "/img/entertainment.png",
//       title: "Entertainment",
//       isFlip: true,
//     },
//     {
//       img: "/img/Luxury.png",
//       title: "Luxury",
//       isFlip: true,
//     },
//     {
//       img: "/img/Sport.png",
//       title: "Sport",
//       isFlip: true,
//     },
//     {
//       img: "/img/Home.png",
//       title: "Home",
//       isFlip: true,
//     },
//   ];

//   const toggleActive = (index) => {
//     setcategory({
//       ...category,
//       activeObject: category.objects[index],
//     });
//   };
//   const toggleActiveStyle = (index) => {
//     if (category.objects[index] === category.activeObject) {
//       return "for-you-cat-active-resp md:for-you-cat-active";
//     }
//     return "for-you-cat-resp md:for-you-cat";
//   };

//   useEffect(() => {
//     setcategory({ ...category, activeObject: category.objects[0] });
//   }, []);
//   const [recomendedMovieData, setrecomendedMovieData] = useState([]);

//   const RecomendationMovieForYou = () => {
//     axios
//       .get(recomendationMovie)
//       .then((response) => {
//         if (response.status === 200) {
//           setrecomendedMovieData(
//             shuffleArray(response.data.results)
//               .slice(0, 3)
//               .map((item) => ({
//                 movie_id: item.id,
//               }))
//           );
//         }
//       })
//       .catch((error) => {});
//   };
//   useEffect(() => {
//     RecomendationMovieForYou();
//   }, [recomendationMovie]);

//   return (
//     <div className="w-full ">
//       {movie_Popup ? "" : <Navbar />}
//       <h1 className="font-quick font-bold text-6xl text-center pt-14 pb-10 dark:text-white">
//         For You
//       </h1>

//       <div
//         style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
//         className="px-4 max-w-5xl dark:bg-[#262525] pb-20 rounded-[40px]  mx-auto"
//       >
//         <h1 className="font-poppin font-medium text-3xl text-center pt-5 pb-5 dark:text-white">
//           Select a category to get a suggestions.
//         </h1>
//         <div className="flex w-full overflow-y-auto scrollbar-hide ">
//           {Image_text_Array.map((data, key) => (
//             <div
//               key={key}
//               className="px-1 border-b-2  flex flex-col justify-center  text-center "
//             >
//               <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//                 <img
//                   onMouseOver={() => {
//                     data.isFlip ? isSetFlipped(true) : isFlipped(false);
//                   }}
//                   className="w-28 h-40"
//                   src={data.img}
//                   alt=""
//                 />

//                 <div
//                   onMouseOut={() => isSetFlipped(false)}
//                   className="w-28 h-40 border-2 border-gray-300 bg-black text-white rounded-md justify-center flex items-center"
//                 >
//                   Comming Soon
//                 </div>
//               </ReactCardFlip>
//               <small className="font-medium p-1 font-quick dark:text-white">
//                 {data.title}
//               </small>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-wrap sm:space-x-3 space-x-0 mt-10">
//           <button className=" mt-2 font-semibold text-base font-quick  px-14 rounded-full py-2  text-white shadow-md bg-[#3a72b9]">
//             Movies
//           </button>
//           <button className=" mt-2 font-semibold text-base font-quick px-14 rounded-full py-2  bg-zinc-100 shadow-md">
//             TV Shows
//           </button>
//           <button className=" mt-2 font-semibold text-base font-quick px-14 rounded-full py-2  bg-zinc-100 shadow-md">
//             Books
//           </button>
//           <button className=" mt-2 font-semibold text-base font-quick px-14 rounded-full py-2  bg-zinc-100 shadow-md">
//             Games
//           </button>
//         </div>
//       </div>
//       <div className="max-w-5xl bg-zinc-100 dark:bg-[#262525] flex justify-between mx-auto mt-40 mb-20 font-quick rounded-full overflow-x-scroll scrollbar-hide">
//         {category.objects.map((item, index) => (
//           <button
//             onClick={() => {
//               toggleActive(index);
//               setcategoryTitle(item.desc);
//               setrecomendationMovie(item.api);
//             }}
//             key={index}
//             className={`${toggleActiveStyle(index)}`}
//           >
//             {item.title}
//           </button>
//         ))}
//       </div>

//       <div className="max-w-5xl mx-auto ">
//         <h1 className="font-quick font-bold text-5xl text-[#3a72b9]">
//           {categoryTitle}
//         </h1>
//         <div className="mt-10 space-y-10">
//           {recomendedMovieData.map((item, idx) => (
//             <MovieDes key={idx} movie_id={item.movie_id} />
//           ))}
//         </div>
//       </div>
//       {movie_Popup ? (
//         <div className=" ">
//           <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]  "></div>
//           <div className=" fixed top-0 left-[50%] translate-x-[-50%] w-11/12  lg:w-[75%] xl:[65%] rounded-[40px] p-6 pt-3 mt-20 bg-white shadow-movdesc">
//             <MovieDetails />
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//       <Footer />
//     </div>
//   );
// }
// // box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
// export default ForYou;

import React from "react";

const ForYou = () => {
  return <div>ForYou</div>;
};

export default ForYou;
