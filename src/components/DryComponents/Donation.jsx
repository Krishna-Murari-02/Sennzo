import React from "react";
import { useNavigate } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

function Donation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  let navigate = useNavigate();
  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage: "url('/img/donationbg.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" w-11/12 mx-auto mt-52 md:w-[60%] rounded-[40px] h-auto md:h-[450px] bg-gradient-to-r from-[#3a72b9]  to-[#c33764] pr-16 pl-10 pt-10 pb-10 md:pb-0"
    >
      <h1 className="md:text-4xl text-2xl font-quick font-bold text-white text ">
        Do you like to use{" "}
        <strong className="text-4xl font-pacifico font-medium text-white ">
          Sennzo
        </strong>
        ?
      </h1>
      <h1 className="md:text-4xl text-2xl font-quick font-bold text-white text">
        Do you want support the team?
      </h1>

      <p className="text-base text-white font-quick mt-10 mb-16">
        You can denote on Patreon or send BTC/ETH/USDT/BNC or Dogecoin
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/payment")}
          className="md:text-2xl text-lg font-extrabold font-quick md:px-5 px-3 py-1 md:py-2 rounded-full bg-white hover:text-[#c33764]"
        >
          Go to donation page
        </button>
      </div>
    </div>
  );
}

export default Donation;
