import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BiLocationPlus } from "react-icons/bi";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-down">
      <hr className="w-11/12 md:w-4/5 mx-auto boder-2 border-gray-600 mb-10 mt-52 " />
      <div className="w-11/12 md:w-4/5 mx-auto   flex flex-wrap justify-between ">
        <div className="flex flex-col space-y-4 ">
          <h1 className="font-pacifico text-left font-bold text-[#3a72b9] text-3xl">
            Sennzo
          </h1>
          <p className=" footer-text text-sm text-left font-normal font-poppin footer-text ">
            We know how hard is it to make <br />
            decision.That's why senzzo is here to
            <br /> help you !
          </p>
          <p className=" footer-text flex space-x-4 items-center">
            <MdOutlineEmail className="text-[#3a72b9]" />
            <small>support@sennzo.com</small>
          </p>
          <p className=" footer-text flex space-x-4 items-center">
            <BiPhoneCall className="text-[#3a72b9]" />
            <small>+12 23 432222</small>
          </p>
          <p className=" footer-text flex space-x-4 items-center">
            <BiLocationPlus className="text-[#3a72b9]" />
            <small>Address America</small>
          </p>

          <p></p>
        </div>
        <div className="flex text-left flex-col space-y-4  mr-8">
          <h1 className="font-quick font-bold text-pink-600 text-xl">Quiz</h1>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Entertainment
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Electronic
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Leisure
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">Auto</p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Finance
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Luxury
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">Sport</p>
          <p className=" footer-text text-sm font-normal font-poppin ">Home</p>
        </div>

        <div className="flex flex-col text-left space-y-3  mr-8">
          <h1 className="font-quick font-bold text-pink-600 text-xl">
            Support
          </h1>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Patreon
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Bitcoin
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Etherium
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Dogecoin
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Ripple
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Cardano
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Paypal
          </p>
        </div>

        <div className="flex flex-col text-left space-y-3  mr-8">
          <h1 className="font-quick font-bold text-pink-600 text-xl">
            Company
          </h1>
          <p className=" footer-text text-sm font-normal font-poppin ">About</p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Join Us
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">News</p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Partners
          </p>
        </div>

        <div className="flex flex-col text-left space-y-3  mr-8">
          <h1 className="font-quick font-bold text-pink-600 text-xl">Legal</h1>
          <p className=" footer-text text-sm font-normal font-poppin ">Claim</p>
          <p className=" footer-text text-sm font-normal font-poppin ">
            Privacy
          </p>
          <p className=" footer-text text-sm font-normal font-poppin ">Terms</p>
        </div>
        <div className="flex flex-row md:flex-col space-x-1 md:space-x-0 md:space-y-3  mr-8">
          <img className="w-32 md:w-44" src="/img/PlayStore.svg" alt="" />
          <img className="w-32 md:w-44" src="/img/AppStore.svg" alt="" />
        </div>
      </div>
      <div className="md:w-4/5   w-11/12 mt-3 md:mt-0 mx-auto flex justify-between md:justify-between">
        <div className="flex flex-col">
          <div className="flex font-quick text-sm font-medium">
            <p>Language: </p>{" "}
            <p className=" footer-text text-sm font-medium text-[#3a72b9] font-quick block">
              English
            </p>
          </div>
          <div className="flex font-quick text-sm font-medium">
            <p>Region: </p>{" "}
            <p className=" footer-text text-sm font-medium text-[#3a72b9] font-quick block">
              USA
            </p>
          </div>
        </div>
        <div className="  flex md:space-x-3 space-x-1 cursor-pointer">
          <img
            onClick={() =>
              window.open(
                "https://www.instagram.com/sennzo.official/",
                "_blank"
              )
            }
            className="social-icon"
            src="/img/insta.png"
            alt=""
            srcSet=""
          />
          <img
            onClick={() =>
              window.open("https://twitter.com/OfficialSennzo", "_blank")
            }
            className="social-icon"
            src="/img/twitter.png"
            alt=""
            srcSet=""
          />
          <img
            onClick={() =>
              window.open("https://www.linkedin.com/company/sennzo/", "_blank")
            }
            className="social-icon"
            src="/img/linkdin.png"
            alt=""
            srcSet=""
          />
          <img
            onClick={() =>
              window.open("https://www.facebook.com/sennzo.official", "_blank")
            }
            className="social-icon"
            src="/img/favelogo.png"
            alt=""
            srcSet=""
          />
        </div>
      </div>
      <hr className=" w-11/12 md:w-4/5 mx-auto border-gray-200 mt-1  mb-3" />
      <div className="w-11/12 md:w-4/5  mx-auto  flex justify-between ">
        <img className="h-9" src="/img/themoviedb.png" alt="" srcSet="" />
        <small className="text-xs  font-quick text-gray-500">
          Design with love @sennzo.com. All right reserved
        </small>
        <img
          className="h-9 opacity-0"
          src="/img/themoviedb.png"
          alt=""
          srcSet=""
        />
      </div>
    </div>
  );
}

export default Footer;
