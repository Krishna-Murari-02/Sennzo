import React, { useRef } from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Quiz from "../Ouiz/Quiz";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TestiMonialsDetails from "./TestiMonialsDetails";
// import "pure-react-carousel/dist/react-carousel.es.css";
import Donation from "../DryComponents/Donation";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Switcher from "../../Switcher";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  var navigate = useNavigate();
  const quizRef = useRef();
  function quizlinkClick() {
    quizRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const testiMonials = [
    {
      name: "Rekob Ramya",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg",
    },
    {
      name: "Brandon Savage",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/z7Kp6yr/np-file-33188.jpg",
    },
    {
      name: "Steve Burns",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg",
    },
    {
      name: "Kevin Canlas",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.",
      address: "USA",
      img: "https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg",
    },
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
  return (
    <>
      <div
        className="pb-20"
        style={{
          backgroundImage: "url('/img/backgroundTom.svg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pb-14">
          <Navbar />
        </div>

        <div className="text-center md:text-left font-extrabold md:text-7xl text-3xl tracking-wide font-quick    md:ml-32 mt-3 md:mt-0 text-white pp">
          We are <small className="font-pacifico">Sennzo</small>
          <br />
          Making your Decision Easier
        </div>

        <object
          className="mt-14 mb-20 md:pt-10 md:pb-20 w-11/12 mx-auto md:mt-0 md:mb-0 "
          type="image/svg+xml"
          data="/img/landing_page.svg"
        ></object>
        <p className="md:w-[63%] mt-10  mx-auto md:text-3xl text-xl text-center text-white font-medium font-poppin">
          We know how hard is to make decisions. That’s why Sennzo is here to
          help you! Fill in a short quiz and our website recommends you the best
          possible match.
        </p>
        <button
          onClick={quizlinkClick}
          className="m-auto mt-20  flex items-center bg-white text-[#3a72b9]  px-4 py-1 text-3xl font-poppin font-semibold  rounded-full "
        >
          Go to quiz
          <BsArrowUpRight className="ml-3 text-xl" />
        </button>
      </div>
      <div className="mt-14 w-11/12 mx-auto md:w-full ">
        <div
          data-aos="fade-up"
          className="flex  justify-center flex-col-reverse md:flex-row md:items-center  "
        >
          <div className="flex flex-col space-y-10  md:w-1/4">
            <p className="head-para text-black">
              <small className="head-para text-[#3a72b9]">Decisions </small>{" "}
              will get easier every time you{" "}
              <small className="head-para text-[#c33764]">
                search, comment
              </small>{" "}
              or
              <small className="head-para text-[#c33764]"> rate</small> any
              product.
            </p>
            <p className="text-para">
              After you sign up, and comment, search or rate a product our
              algorithm will try to understand what you like and dislike. It
              will be able to recommend you the best options suited for you.
            </p>

            <button
              onClick={() => navigate("/learn")}
              className="btn-para z-10"
            >
              Register here
              <BsArrowUpRight className="ml-3 text-2xl" />
            </button>
          </div>
          <object
            className="w-full md:w-[35rem] mb-10"
            type="image/svg+xml"
            data="/img/Girl-&-plant.svg"
          ></object>
        </div>

        <div
          data-aos="fade-up"
          className="flex  md:justify-center flex-col md:flex-row items-center mt-52"
        >
          <object
            className="  w-full md:w-[500px] mb-10 "
            type="image/svg+xml"
            data="/img/popnew.svg"
          ></object>

          <div className="flex  flex-col space-y-10 md:ml-20 ">
            <p className="head-para text-black">
              <small className="head-para font-pacifico"> Sennzo</small> can{" "}
              <small className="head-para text-[#3a72b9]">calculate </small>
              what <br /> online{" "}
              <small className="head-para text-[#c33764]">
                streaming service <br />
              </small>
              might be optimal for you.
            </p>
            <p className="text-para ">
              While you use Sennzo for commenting, rating <br /> or searching
              movies, our algorithm tries to <br /> understand your movie genome
              and gives you a <br /> recommendation of what online streaming{" "}
              <br /> service might be the best suited to you.
            </p>

            <button onClick={() => navigate("/learnmore")} className="btn-para">
              Learn more
              <BsArrowUpRight className="ml-3 text-2xl" />
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col-reverse  md:justify-center items-center md:flex-row space-x-20  mt-52"
        >
          <div className="flex flex-col space-y-10  ">
            <p className="head-para text-black">
              With us, You are{" "}
              <small className="head-para text-[#3a72b9]">saving </small> <br />
              <small className="head-para text-[#c33764]">Time </small>
              and <small className="head-para text-[#c33764]"> Money</small>
            </p>
            <p className="text-para ">
              Our quiz will take you only up to 5min. Yet <br /> you can save
              hours of searching the <br /> internet for the best possible
              product. We <br /> help you chose the best product that <br />{" "}
              specifically matches your needs.
            </p>
          </div>

          <object
            className="w-[80%]  md:w-[500px]  md:h-[400px] mb-10 "
            type="image/svg+xml"
            data="/img/timernew.svg"
          ></object>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col-reverse  md:justify-center items-center  md:flex-row mt-40 mb-40"
        >
          <img
            className=" md:ml-20 h-[450px] "
            src="/img/phone (1).svg"
            alt=""
          />

          <div className="flex flex-col space-y-10 w-full md:w-2/5  ">
            <p className="head-para text-black">
              Use Sennzo{" "}
              <small className="head-para text-[#3a72b9]">Everywhere </small>
              <br />
              Download our
              <small className="head-para text-[#c33764]"> App</small>
            </p>
            <div className="flex items-center ">
              <button>
                <img
                  className="md:w-[12vw] md:mr-[20px] w-36"
                  src="/img/PlayStore.svg"
                  alt=""
                />
              </button>
              <button>
                <img
                  className="md:w-[12vw]  w-36"
                  src="/img/AppStore.svg"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" ref={quizRef} className=" w-11/12 mx-auto">
        <Quiz />
      </div>

      <div data-aos="fade-up" className="  w-11/12 mx-auto text-center mb-14">
        <strong className="text-6xl font-quick font-normal footer-text">
          What people{" "}
          <small className="text-[#3a72b9] text-6xl font-quick font-normal">
            say?
          </small>
          <p className=" mt-6 text-3xl font-poppin font-medium text-gray-500 dark:text-white ">
            We are glad we have a opportunity to help people with their{" "}
            <p className="inline-block text-3xl font-poppin font-medium text-[#c33764] dark:text-white">
              dilemmas
            </p>{" "}
          </p>
        </strong>
        <OwlCarousel
          id="customer-testimonoals"
          className="owl-carousel owl-theme"
          {...options}
        >
          {testiMonials.length === 0 ? (
            <div className="item">
              <div className="shadow-effect">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="testimonial-name">
                <img className="w-36 h-36" src="" alt="Image" />
                <h5>Rajon Rony</h5>
                <small>ITALY</small>
              </div>
            </div>
          ) : (
            testiMonials.map((testiMonialDetail) => {
              return (
                <TestiMonialsDetails
                  testiMonialDetail={testiMonialDetail}
                  key={testiMonialDetail._key}
                />
              );
            })
          )}
        </OwlCarousel>
      </div>
      <Donation />
      <Footer />
    </>
  );
}

export default Home;
