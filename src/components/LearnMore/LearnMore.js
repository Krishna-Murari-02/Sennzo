import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const LearnMore = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="pt-20">
        <div className="flex items-center space-x-8 justify-center">
          <object
            className=" w-[500px]   "
            type="image/svg+xml"
            data="/img/GuyWithLaptop.svg"
          ></object>
          <p className=" text-3xl  learn-text">
            Completly a quiz or simply <br /> Login and use Sennzo{" "}
          </p>
        </div>
        <div className="flex items-center space-x-8 flex-row-reverse justify-center">
          {/* <img className=" w-[700px] " src="/img/ laplearn.sv" alt="" /> */}
          <object
            className=" w-[500px] mt-20 mb-20 "
            type="image/svg+xml"
            data="/img/laplearn.svg"
          ></object>

          <p className=" text-3xl learn-text">
            We are recomended you the best
            <br /> possible streaming services that <br /> suits your taste
          </p>
        </div>
        <div className="flex items-center justify-center -ml-20 -mt-20">
          <img className=" w-[600px]" src="/img/Sofa.gif" alt="" />
          <p className=" text-3xl learn-text">
            Pay for only one streaming services <br /> Save your money{" "}
          </p>
        </div>
        <div className="flex items-center mt-20 mb-40 flex-col space-y-8 justify-center">
          <p className="text-2xl font-quick font-extrabold">
            Make your life easier. Don't waste your money
          </p>
          <button className="hover:border-[#3a72b9] hover:bg-[#fff] hover:text-[#3a72b9] flex items-center bg-[#3a72b9] text-white px-4 py-6 text-2xl font-quick font-semibold border-2 rounded-2xl ">
            Go to Streaming Service Quiz
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LearnMore;
