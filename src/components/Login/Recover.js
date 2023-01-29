import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Recover() {
  return (
    <div className="flex justify-center flex-col items-center ">
      <Navbar />
      <h1 className="text-3xl font-quick text-left font-extrabold mt-20 ">
        Recover your account
      </h1>
      <p className="font-poppin text-lg text-gray-700 mt-5 ">
        Fill in your. We will send you a link to <br /> recover a password
      </p>
      <div className="reg-div">
        <MdOutlineEmail className="text-2xl text-[#3a72b9]" />
        <input className="reg-input" type="text" placeholder="Email:" />
      </div>
      <hr className=" w-[400px]  bg-gray-500 text-gray-500 mt-8 mb-8 " />
      <button className="hover:bg-[#3a72b9] hover:border-[#3a72b9] hover:text-white h-14 rounded-full text-[#3a72b9] border-[#3a72b9] font-quick font-semibold text-3xl w-80 border-2">
        Recover
      </button>
      <hr className="w-full boder-2 border-gray-300 mt-12 mb-12" />
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}

export default Recover;
