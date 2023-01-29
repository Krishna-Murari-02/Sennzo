import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserSatus } from "../Login/loginSlice";
import { FiMenu } from "react-icons/fi";
import Switcher from "../../Switcher";

function Navbar() {
  const [slider, setslider] = useState(false);
  const user_img = useSelector((state) => state.login.user_img);
  const dispatch = useDispatch();
  var navigation = useNavigate();
  const [LogoutButton, setLogoutButton] = useState(false);
  const username = useSelector((state) => state.login.username);
  const user_status = useSelector((state) => state.login.user_status);
  const [hideNav, sethideNav] = useState(false);
  const [showBg, setshowBg] = useState(false);
  const [navSlider, setnavSlider] = useState(false);

  function logout() {
    alert("logout");
    dispatch(setUserSatus([null, null, null, null, false, false, null]));
    navigation("/login");
  }
  let activeStyle = {
    fontWeight: 600,
  };

  useEffect(() => {
    if (window.location.pathname === "/") {
      setnavSlider(true);
      const onScroll = () => {
        if (window.scrollY > 100 && window.scrollY < 500) {
          setshowBg(false);
          sethideNav(true);
          setnavSlider(false);
        } else if (window.scrollY > 500) {
          setshowBg(true);

          sethideNav(false);
          setnavSlider(true);
        } else {
          setshowBg(false);
          sethideNav(false);
          setnavSlider(true);
        }
      };
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    } else {
      setnavSlider(true);
      setshowBg(true);
      window.scrollTo(0, 0);
    }
  }, [showBg, navSlider]);

  return (
    <>
      <div
        className={`z-50 ease-in top-0 duration-1000 ${
          navSlider ? `top-0` : `-top-36`
        } w-full px-5 py-2 fixed flex justify-between items-center ${
          showBg ? `bg-white dark:bg-[#262525] shadow-md` : ""
        } ${hideNav ? `hidden` : `flex`} rounded-b-2xl md:rounded-none`}
      >
        <div className="flex space-x-1 justify-center items-center">
          <img
            className="w-6 "
            src="/img/logo_icon.svg"
            alt=""
            onClick={() => navigation("/")}
          />
          <span
            className={`font-pacifico text-2xl tracking-wider font-semibold ${
              showBg
                ? "text-black dark:text-white"
                : "text-white dark:text-dark"
            } `}
          >
            Sennzo
          </span>
        </div>
        <div className="md:flex items-center space-x-5 hidden ">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`nav-text ${showBg ? `text-black dark:text-white` : ""}`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`nav-text ${showBg ? `text-black dark:text-white` : ""}`}
            to="/quiz"
          >
            Quiz
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`nav-text ${showBg ? `text-black dark:text-white` : ""}`}
            to="/foryou"
          >
            For You
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className={`nav-text pr-7 ${
              showBg ? `text-black dark:text-white` : ""
            }`}
            to="/about"
          >
            About Us
          </NavLink>
          <Switcher />
          {user_status ? (
            <div className="relative">
              <img
                onClick={() => setLogoutButton(!LogoutButton)}
                src={user_img}
                className=" rounded-full w-12 h-12 "
                alt=""
                srcSet=""
              />

              {LogoutButton ? (
                <div className="absolute bg-white border-2 top-14 w-max -left-14 flex flex-col justify-center items-center space-y-4">
                  <small
                    onClick={() => {
                      navigation("/details");
                      setLogoutButton(false);
                    }}
                    className="text-xl px-3 text-[#c33764]"
                  >
                    About Me
                  </small>
                  <hr className=" border-0 border-b-2  w-full" />

                  <small
                    onClick={() => {
                      setLogoutButton(false);
                      logout();
                    }}
                    className="text-xl px-3 text-[#c33764] "
                  >
                    Logout
                  </small>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              <NavLink
                className={`nav-text pl-5 border-l-[1px] border-white ${
                  showBg ? `text-black border-black dark:text-white` : ""
                }`}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={`text-xl rounded-full hover:opacity-80  bg-white text-[#c33764] px-3 pb-1 font-light tracking-wide dark:bg-transparent
        ${showBg ? `border-[1px] border-[#c33764]` : ""}`}
                to="/register"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
        <div className="flex md:hidden">
          <FiMenu
            onClick={() => setslider(!slider)}
            className={`text-white text-2xl cursor-pointer w-10 h-10 p-2  rounded-full ${
              showBg ? `text-black dark:text-white` : ""
            }`}
          />
        </div>
      </div>
      <div
        className={`w-full md:hidden   bg-gray-100 dark:bg-gray-800 fixed transition-all duration-500 ease-in delay-100 ${
          slider ? "top-12" : "-top-[800px]"
        } z-30`}
      >
        <div className="w-full p-8 flex flex-col space-y-5 ">
          <NavLink
            className={`nav-text text-black font-semibold  py-2 dark:text-white  hover:bg-white hover:text-black`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`nav-text text-black font-semibold  py-2 dark:text-white hover:bg-white hover:text-black `}
            to="/quiz"
          >
            Quiz
          </NavLink>
          <NavLink
            className={`nav-text text-black font-semibold  py-2 dark:text-white hover:bg-white hover:text-black`}
            to="/foryou"
          >
            For You
          </NavLink>
          <NavLink
            className={`nav-text text-black font-semibold  py-2 dark:text-white hover:bg-white hover:text-black `}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={`nav-text  text-black font-semibold dark:text-white  py-2 hover:bg-white hover:text-black
                  
                `}
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className={` nav-text text-black font-semibold  py-2 dark:text-white hover:bg-white hover:text-black 
      `}
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
