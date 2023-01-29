import React from "react";
import Navbar from "../Navbar/Navbar";
import { GrLocationPin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="w-1/3 mx-auto  mt-20 flex flex-col space-y-5 justify-center">
        <img
          className="h-32 object-contain border-b-[0.1px] border-gray-400"
          src="/img/logoWhite(3).png"
          alt=""
        />

        <strong className="mx-auto font-quick font-bold text-3xl">
          Tomas Heger{" "}
        </strong>

        <div className="flex justify-between">
          <small className="font-quick text-2xl font-semibold ">
            <MdEmail className="inline-block text-gray-400" /> Email:
          </small>
          <small className="font-quick text-2xl font-semibold italic">
            tomasheger@sebertooth.in
          </small>
        </div>
        <div className="flex justify-between">
          <small className="font-quick text-2xl font-semibold ">
            <BsFillTelephonePlusFill className="inline-block text-[#c33764]" />{" "}
            Phone:
          </small>
          <small className="font-quick text-2xl font-semibold italic">
            +234 788
          </small>
        </div>
        <div className="flex justify-between">
          <small className="font-quick text-2xl font-semibold ">
            <GrLocationPin className="inline-block text-blue-800" />
          </small>
          <small className="font-quick text-2xl font-semibold italic">
            Currently Unavalible
          </small>
        </div>
        <div className="flex justify-between">
          <small className="font-quick text-2xl font-semibold ">
            <IoIosPeople className="inline-block text-purple-900" /> Social:
          </small>
          <div className="flex space-x-3">
            <img className="w-11" src="/img/insta.png" alt="" />
            <img className="w-11" src="/img/linkdin.png" alt="" />
            <img className="w-11" src="/img/twitter.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <small className=" text-center font-quick text-xl font-medium italic text-gray-500">
          Please note it can take me up to 8h to answer.
        </small>
      </div>
      <hr className="w-3/4 bottom-2 mx-auto mb-16 mt-36" />
      <Footer />
    </div>
  );
}

export default Contact;
