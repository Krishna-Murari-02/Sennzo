import React from "react";
import Navbar from "../Navbar/Navbar";
import { FaUserAstronaut, FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";


function UserProfile() {
  const username = useSelector(
    (state) => state.login.username
  );
  const email = useSelector(
    (state) => state.login.email
  );
  const user_img = useSelector(
    (state) => state.login.user_img
  );
  const user_auth = useSelector(
    (state) => state.login.user_auth
  );
  const user_id = useSelector(
    (state) => state.login.user_id
  );
  const [profileInfobool, setprofileInfobool] = useState(false)
 
 
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <img className="w-36 mx-auto " src="/img/logowhite(3).png" alt="" />
        <hr className="w-56 mx-auto" />
      </div>
      <div className="w-11/12 md:w-[70%] mx-auto">
        <div>
          <strong className="user-heading ">
            <IoIosArrowDown onClick={()=>setprofileInfobool(!profileInfobool)} className={`mr-1 inline-block ` } /> Profile Information{user_auth}
          </strong>
          <div className={` justify-center flex-col items-center ${profileInfobool?"flex":"hidden"}`}>
            <img
              className="border-2 w-24 h-24  rounded-full"
              src={user_img}
              alt="jhgh"
            />
            <hr className="w-3/4 mt-8 mb-1" />
            <div className="flex flex-col w-full md:w-3/6 ">
              <div className="flex justify-between  items-center py-3 border-b-2 ">
                <small className="font-quick text-xl font-medium text-center">
                  <FaUserAstronaut className="inline-block mr-2" /> Name:
                </small>
                <small>
                  <strong className="font-quick text-lg font-bold ">
                   {username}
                  </strong>
                  <span className="font-quick text-lg font-medium text-[#3a72b9] ml-5">
                    Change
                  </span>
                </small>
              </div>
              <div className="flex justify-between  items-center py-3 border-b-2 ">
                <small className="font-quick text-xl font-medium text-center">
                  <FaUserAlt className="inline-block mr-2" /> User Name:
                </small>
                <small>
                  <strong className="font-quick text-lg font-bold ">
                    {username}
                  </strong>
                  <span className="font-quick text-lg font-medium text-[#3a72b9] ml-5">
                    Change
                  </span>
                </small>
              </div>
              <div className="flex justify-between  items-center py-3 border-b-2 ">
                <small className="font-quick text-xl font-medium text-center">
                  <AiTwotoneMail className="inline-block mr-2" /> Email:
                </small>
                <small>
                  <strong className="font-quick text-lg font-bold ">
                    {email}
                  </strong>
                  <span className="font-quick text-lg font-medium text-[#3a72b9] ml-5">
                    Change
                  </span>
                </small>
              </div>
              <div className="flex justify-between  items-center py-3 border-b-2 ">
                <small className="font-quick text-xl font-medium text-center">
                  <RiLockPasswordFill className="inline-block mr-2" /> Change
                  Password:
                </small>
                <small>
                  <span className="font-quick text-lg font-medium text-[#3a72b9] ml-5">
                    Change
                  </span>
                </small>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <strong className="user-heading ">
              <IoIosArrowDown className="mr-1 inline-block" /> History of Quiz
            </strong>
            <div className="flex justify-center flex-col items-center">
              <hr className="w-3/4 mt-8 mb-1" />
              <div className="flex flex-col w-full md:w-3/6  ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <strong className="user-heading ">
              <IoIosArrowDown className="mr-1 inline-block" /> History of Rating
              and Commenting
            </strong>
            <div className="flex justify-center flex-col items-center">
              <hr className="w-3/4 mt-8 mb-1" />
              <div className="flex flex-col w-full md:w-3/6  ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <strong className="user-heading ">
              <IoIosArrowDown className="mr-1 inline-block" /> General Setting
            </strong>
            <div className="flex justify-center flex-col items-center">
              <hr className="w-3/4 mt-8 mb-1" />
              <div className="flex flex-col w-full md:w-3/6  ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-3/6 ">
                <div className="flex justify-between  items-center py-3 border-b-2 ">
                  <small className="font-quick text-xl font-medium text-center">
                    12.10.2022
                  </small>

                  <strong className="font-quick text-lg font-bold ">
                    Movie name
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
