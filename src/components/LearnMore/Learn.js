import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Learn = () => {
  var navigate = useNavigate();
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <div className="flex items-center justify-center">
          <object
            className=" w-[500px]   "
            type="image/svg+xml"
            data="/img/GuyWithLaptop.svg"
          ></object>
          <p className="ml-10 text-3xl  learn-text">
            Make an account, Comment <br /> rate and match with the movie{" "}
          </p>
        </div>
        <div className="flex items-center mt-20  flex-row-reverse justify-center">
          <object
            className=" w-[500px] ml-20  "
            type="image/svg+xml"
            data="/img/wonderful.svg"
          ></object>

          <p className=" text-3xl learn-text">
            Get results suited for your taste
            <br />
            View your quiz history <br />
          </p>
        </div>
        <div className="flex items-center justify-center space-x-14  mb-20 mt-20">
          {/* <img className=" w-[600px]" src="/img/ha]y" alt="" /> */}
          <object
            className="  w-[500px]  "
            type="image/svg+xml"
            data="/img/happy.svg"
          ></object>
          <p className=" text-3xl learn-text">
            Make your life easier and register <br />
            Enhance your experience.
          </p>
        </div>
        <div className="flex items-center  mb-40 flex-col space-y-8 justify-center">
          <p className="text-2xl font-quick font-extrabold">
            Join Sennzo make you decision easier
          </p>
          <button
            onClick={() => navigate("/register")}
            className="hover:border-[#3a72b9] hover:bg-[#fff] hover:text-[#3a72b9] flex items-center bg-[#3a72b9] text-white px-7 py-6 text-2xl font-quick font-semibold border-2 rounded-2xl "
          >
            Click to register here
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Learn;
