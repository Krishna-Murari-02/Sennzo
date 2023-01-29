import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const PaymentMethod = () => {
  return (
    <div>
      <Navbar />
      <h1 className="font-quick font-bold md:text-6xl text-3xl w-11/12 text-center pt-20 pb-10 text">
        Thank you for your support <br />
        You help us, so we can help others.
      </h1>
      <div className="flex md:justify-evenly flex-col md:flex-row items-center w-11/12 mx-auto md:w-full mt-14">
        <div className="flex space-x-10">
          <div className="text-center ">
            <div className="flex justify-center space-x-2">
              <img className="h-7 md:h-11" src="/img/bitsmall.png" alt="" />
              <strong className="font-quick font-extrabold text-xl md:text-4xl ">
                Bitcoin
              </strong>
            </div>
            <img
              className="h-36 md:h-48 border-[15px] rounded-lg border-[#C43764]"
              src="/img/BTC.png"
              alt=""
            />
            <Link
              to=""
              className="text-xs md:text-base font-medium md:font-semibold cursor-pointer  text-gray-800 underline text text"
            >
              bc1qvxjec9r57920jaj8d <br />
              a5a5fryp06f6ce7vn6c0r
            </Link>
          </div>
          <div className="text-center ">
            <div className="flex justify-center space-x-2">
              <img className="h-7 md:h-10" src="/img/patreon.svg" alt="" />
              <strong className="font-quick font-extrabold text-xl md:text-4xl ">
                Patreon
              </strong>
            </div>
            <img
              className="h-36 md:h-48 border-[15px] rounded-lg border-[#3a72b9]"
              src="/img/LTC.png"
              alt=""
            />
            <Link
              to=""
              className="text-xs md:text-base font-medium md:font-semibold cursor-pointer text-gray-800 underline text "
            >
              0x02dFFd08746e71Ea6069 <br />
              a69Cdbe8e7eD68F14af8
            </Link>
          </div>
        </div>
        <img className="h-96 -mt-10" src="/img/heart.svg" alt="" />
      </div>

      <div className="flex flex-col w-11/12 md:w-[70%] mx-auto space-y-14 mt-20">
        <div className="flex space-x-10">
          <div className="flex items-center space-x-3 md:space-x-10">
            {" "}
            <img
              className="h-12 md:h-36  rounded-lg "
              src="/img/etherium.png"
              alt=""
            />
            <img className="h-16 md:h-48" src="/img/ETH.png" alt="" />
          </div>
          <div className="flex flex-col space-y-1">
            <strong className="font-quick font-extrabold text-xl md:text-4xl ">
              Etherium
            </strong>
            <Link
              to=""
              className="text-xs  text-center break-all  font-extralight md:font-semibold cursor-pointer  text-gray-600 underline"
            >
              0x02dFFd08746e71Ea6069a69Cdbe8e7eD68F14af8
            </Link>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center space-x-3 md:space-x-10">
            {" "}
            <img
              className="h-12 md:h-36 rounded-lg "
              src="/img/tether.svg"
              alt=""
            />
            <img className="h-16 md:h-48 " src="/img/teth.png" alt="" />
          </div>
          <div className="flex flex-col space-y-1">
            <strong className="font-quick font-extrabold text-xl md:text-4xl ">
              Tether
            </strong>
            <Link
              to=""
              className="text-xs  text-center break-all  font-extralight md:font-semibold cursor-pointer text-gray-800 underline text"
            >
              0x02dFFd08746e71Ea6069a69Cdbe8e7eD68F14af8
            </Link>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center space-x-3 md:space-x-10">
            {" "}
            <img
              className="h-12 md:h-36 rounded-lg "
              src="/img/litecoin.png"
              alt=""
            />
            <img className="h-16 md:h-48 " src="/img/BTC.png" alt="" />
          </div>
          <div className="flex flex-col space-y-1">
            <strong className="font-quick font-extrabold text-xl md:text-4xl ">
              Lite Coin
            </strong>
            <Link
              to=""
              className="text-xs  text-center break-all  font-extralight md:font-semibold  cursor-pointer text-gray-800 underline text"
            >
              ltc1qnrwealnjl6hl2h3ky34q00k3a570dprkdew7mx
            </Link>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center space-x-3 md:space-x-10">
            {" "}
            <img
              className="h-12 md:h-36  rounded-lg "
              src="/img/dogecoin.svg"
              alt=""
            />
            <img className="h-16 md:h-48 " src="/img/doge.png" alt="" />
          </div>
          <div className="flex flex-col space-y-1">
            <strong className="font-quick font-extrabold text-xl md:text-4xl ">
              Dogecoin
            </strong>
            <Link
              to=""
              className="text-xs  text-center break-all  font-extralight md:font-semibold  cursor-pointer text-gray-800 underline text"
            >
              DS8YqgTDw5qL3qY42ktoVd4ZFKPws2dSX4
            </Link>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="flex items-center space-x-3 md:space-x-10">
            {" "}
            <img
              className="h-12 md:h-36  rounded-lg "
              src="/img/paypal.png"
              alt=""
            />
            <img className="h-16 md:h-48 " src="/img/LTC.png" alt="" />
          </div>
          <div className="flex flex-col space-y-1">
            <strong className="font-quick font-extrabold text-xl md:text-4xl ">
              PayPal
            </strong>
            <Link
              to=""
              className="text-xs  text-center break-all  font-extralight md:font-semibold  cursor-pointer text-gray-800 underline text"
            >
              www.patreon.com/sennzo
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentMethod;
