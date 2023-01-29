import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Donation from "../DryComponents/Donation";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const CurentlyProgressPage = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <div className="px-20 relative pb-10">
        <div className=" space-y-10 pp">
          <h1 className="font-quick font-bold text-6xl pt-20 dark:text-white">
            This Feature is currently <br /> being worked on
          </h1>
          <p>
            <p className="font-medium text-xl  font-poppin text-gray-800 dark:text-white ">
              You can help us by donating.
            </p>
            <p className="font-medium text-xl  font-poppin text-gray-800 dark:text-white">
              Scroll down for more Information.
            </p>
          </p>
          <button className="btn-para z-10">
            Go to donation page
            <BsArrowUpRight className="ml-3 text-2xl" />
          </button>
        </div>
        <img
          className="w-[55%] pp absolute top-48 right-32  object-contain"
          src="/img/currentlyworking.svg"
          alt=""
        />
      </div>
      <div className="top-48 pb-20 relative">
        <Donation />
      </div>
      <Footer />
    </div>
  );
};

export default CurentlyProgressPage;
