// import React, { useEffect, useRef, useState } from "react";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import Navbar from "../Navbar/Navbar";
// import { useNavigate } from "react-router-dom";

// import axios from "axios";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import Footer from "../Footer/Footer";

// function Register() {
//   let navigate = useNavigate();
//   const responseGoogle = (response) => {
//     navigate("/login");
//   };
//   const failureGoogle = (response) => {
//     console.log("Sign Up error");
//   };
//   const ref = useRef();
//   useEffect(() => {
//     ref.current.focus();
//   }, []);
//   const [showPassword, setshowPassword] = useState(false);
//   const [showCPassword, setshowCPassword] = useState(false);
//   const [signUpData, setSignUpData] = useState({
//     email: null,
//     username: null,
//     password: null,
//   });
//   const SignUp = () => {
//     axios
//       .post("https://pawater.in/accounts/register/", signUpData)
//       .then((response) => {
//         if (response.status === 201) {
//           alert("SignUp Sucessfully");
//         }
//       })
//       .catch((error) => {
//         alert(
//           "sorry, Please make sure you have filled all details properly and your password should be grater than 5 char."
//         );
//       });
//   };

//   return (
//     <>
//       <div className="w-screen ">
//         <Navbar />
//         <div className="w-11/12 md:w-1/3 pt-20 mx-auto overflow-x-hidden">
//           <h1 className="text-3xl font-quick font-bold ml-10 dark:text-white ">
//             Please Register:
//           </h1>
//           <div className=" flex justify-center flex-col items-center">
//             <div className="reg-div-respo md:reg-div">
//               <FaUser className="text-xl md:text-2xl text-[#3a72b9] " />
//               <input
//                 ref={ref}
//                 onChange={(e) =>
//                   setSignUpData({ ...signUpData, username: e.target.value })
//                 }
//                 className="reg-input-respo md:reg-input"
//                 type="text"
//                 placeholder="Username:"
//               />
//             </div>
//             <div className="reg-div-respo md:reg-div">
//               <MdOutlineEmail className="text-xl md:text-2xl text-[#3a72b9]" />
//               <input
//                 onChange={(e) =>
//                   setSignUpData({ ...signUpData, email: e.target.value })
//                 }
//                 className="reg-input"
//                 type="text"
//                 placeholder="Email:"
//               />
//             </div>
//             <div className="reg-div-respo md:reg-div">
//               <RiLockPasswordLine className="text-xl md:text-2xl text-[#3a72b9]" />
//               <input
//                 onChange={(e) =>
//                   setSignUpData({ ...signUpData, password: e.target.value })
//                 }
//                 className="reg-input"
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Password:"
//               />
//               {showPassword ? (
//                 <AiOutlineEyeInvisible
//                   onClick={() => setshowPassword(false)}
//                   className="text-xl md:text-2xl text-[#3a72b9]"
//                 />
//               ) : (
//                 <AiOutlineEye
//                   className="text-xl md:text-2xl text-[#3a72b9]"
//                   onClick={() => setshowPassword(true)}
//                 />
//               )}
//             </div>
//             <div className="reg-div-respo md:reg-div">
//               <RiLockPasswordLine className="text-xl md:text-2xl text-[#3a72b9]" />
//               <input
//                 className="reg-input"
//                 type={showCPassword ? "text" : "password"}
//                 placeholder="Confirm Password:"
//               />
//               {showCPassword ? (
//                 <AiOutlineEyeInvisible
//                   onClick={() => setshowCPassword(false)}
//                   className="text-xl md:text-2xl text-[#3a72b9]"
//                 />
//               ) : (
//                 <AiOutlineEye
//                   onClick={() => setshowCPassword(true)}
//                   className="text-xl md:text-2xl text-[#3a72b9]"
//                 />
//               )}
//             </div>
//             <small className="text-base w-11/12 md:w-[400px] dark:text-white  font-quick  font-normal">
//               By clicking{" "}
//               <small style={{ color: "#3A72B9" }}>Agree & Join,</small> you
//               agree to the Sennzo{" "}
//               <small style={{ color: "#C43764" }}>
//                 User Agreement , Privacy Policy,
//               </small>
//               and<small style={{ color: "#C43764" }}> Cookie Policy</small>.
//             </small>
//           </div>
//           <div className="flex justify-center w-full flex-col items-center">
//             <button
//               onClick={() => SignUp()}
//               className="h-12 md:h-14 mt-5 rounded-full hover:bg-[#3a72b9] hover:text-white  text-[#3a72b9] border-[#3a72b9] font-quick font-semibold text-xl md:text-2xl w-11/12 md:w-[300px] border-2"
//             >
//               Agree & Join
//             </button>

//             <div className="flex mt-4 mb-10 items-center ">
//               <hr style={{ width: "12vw" }} />
//               <small>Or</small>
//               <hr style={{ width: "12vw" }} />
//             </div>
//             <GoogleLogin
//               className="google-login "
//               // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//               clientId="952667530152-ne908k9ob34qp0sf8trbl6pifa2sb3um.apps.googleusercontent.com"
//               buttonText={
//                 // <img className="" src="/img/googleLogin.svg" alt="" />
//                 <div className="w-[300px] h-14  flex  space-x-5  items-center   rounded-full  bg-black dark:bg-white ">
//                   <img
//                     className="h-8 ml-5"
//                     src="/img/logo_google.png"
//                     alt=""
//                     srcSet=""
//                   />
//                   <small className="font-quick md:text-xl text-lg font-semibold text-white dark:text-black">
//                     {" "}
//                     Signup with Google
//                   </small>
//                 </div>
//               }
//               icon={false}
//               onSuccess={responseGoogle}
//               onFailure={failureGoogle}
//               cookiePolicy={"single_host_origin"}
//             />
//             <FacebookLogin
//               cssClass="google-login "
//               appId="356416933012200"
//               fields="name,email"
//               scope="public_profile, user_friends"
//               icon={
//                 <div className="w-[300px] h-14 flex space-x-5 items-center   rounded-full dark:bg-white  bg-black ">
//                   <img
//                     className="h-8 ml-5"
//                     src="/img/logof_acebook.png"
//                     alt=""
//                     srcSet=""
//                   />
//                   <small className="font-quick md:text-xl text-lg  font-semibold text-white dark:text-black">
//                     {" "}
//                     Signup with Facebook
//                   </small>
//                 </div>
//               }
//               textButton=""
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Register;
import React from "react";

const Register = () => {
  return <div>Register</div>;
};

export default Register;
