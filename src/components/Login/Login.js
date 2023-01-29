// import React, { useEffect, useRef, useState } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import FacebookLogin from "react-facebook-login";
// import { RiLockPasswordLine } from "react-icons/ri";
// import { FaUser } from "react-icons/fa";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { setUserSatus } from "./loginSlice";
// import axios from "axios";

// function Login() {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current.focus();
//   }, []);
//   const dispatch = useDispatch();
//   var navigate = useNavigate();
//   const responseGoogle = (response) => {
//     // console.log(response.profileObj.email);
//     axios
//       .post("https://pawater.in/accounts/oauth/login/", {
//         provider: "google-oauth2",
//         access_token: response.accessToken,
//       })
//       .then((response) => {
//         if (response.status === 200) {
//           alert("Google SignIn Sucessfully");
//           dispatch(
//             setUserSatus([
//               response.data.user_id,
//               response.data.auth_token,
//               response.data.username,
//               response.data.email,
//               true,
//               response.data.is_superuser,
//             ])
//           );
//           navigate("/");
//         }
//       })
//       .catch((error) => {
//         console.log("Google login Failed");
//       });
//   };
//   const failureGoogle = (response) => {
//     console.log("Google login Failed");
//   };

//   const [signInData, setSignInData] = useState({
//     username: null,
//     password: null,
//   });
//   const SignIn = () => {
//     axios
//       .post("https://pawater.in/accounts/login/", signInData)
//       .then((response) => {
//         if (response.status === 200) {
//           alert("SignIn Sucessfully");
//           dispatch(
//             setUserSatus([
//               response.data.user_id,
//               response.data.auth_token,
//               response.data.username,
//               response.data.email,
//               true,
//               response.data.is_superuser,
//             ])
//           );
//         }
//       })
//       .catch((error) => {
//         alert("sorry, Please make sure you have filled all details");
//       });
//   };
//   return (
//     <>
//       <div className="w-screen">
//         <Navbar />
//         <div className="w-11/12 md:w-1/3 pt-20 mx-auto">
//           <h1 className="text-3xl font-quick font-bold ml-10 dark:text-white">
//             Please Login:
//           </h1>
//           <div className="flex justify-center flex-col items-center">
//             <div className="reg-div-respo md:reg-div">
//               <FaUser className="text-2xl text-[#3a72b9]" />
//               <input
//                 ref={ref}
//                 onChange={(e) =>
//                   setSignInData({ ...signInData, username: e.target.value })
//                 }
//                 className="reg-input-respo md:reg-input"
//                 type="text"
//                 placeholder="Username:"
//               />
//             </div>
//             <div className="reg-div-respo md:reg-div">
//               <RiLockPasswordLine className="text-2xl text-[#3a72b9]" />
//               <input
//                 onChange={(e) =>
//                   setSignInData({ ...signInData, password: e.target.value })
//                 }
//                 className="reg-input-respo md:reg-input"
//                 type="password"
//                 placeholder="Password"
//               />
//             </div>
//             <small className="text-base w-11/12 md:w-[400px] dark:text-white text-left font-quick font-normal">
//               Cannot login{" "}
//               <small
//                 className="cursor-pointer"
//                 style={{ color: "#3A72B9" }}
//                 onClick={() => navigate("/recover")}
//               >
//                 Recover Account
//               </small>
//               <br />
//               Don't have an account yet?
//               <small
//                 className=" cursor-pointer"
//                 style={{ color: "#3A72B9" }}
//                 onClick={() => navigate("/register")}
//               >
//                 Register here.
//               </small>
//             </small>
//           </div>
//           <div className="flex justify-center  flex-col items-center">
//             <button
//               onClick={() => SignIn()}
//               className="h-12 md:h-14 mt-5 rounded-full hover:bg-[#3a72b9] hover:text-white  text-[#3a72b9] border-[#3a72b9] font-quick font-semibold text-xl md:text-2xl w-[300px] border-2"
//             >
//               Login
//             </button>

//             <div className="flex mt-4 mb-10 items-center">
//               <hr style={{ width: "12vw" }} />
//               <small>Or</small>
//               <hr style={{ width: "12vw" }} />
//             </div>
//             <GoogleLogin
//               className="google-login "
//               clientId="952667530152-ne908k9ob34qp0sf8trbl6pifa2sb3um.apps.googleusercontent.com"
//               buttonText={
//                 <div className="w-[300px] h-14  flex  space-x-5 items-center   rounded-full   dark:bg-white  bg-black ">
//                   <img
//                     className="h-8 ml-5"
//                     src="/img/logo_google.png"
//                     alt=""
//                     srcSet=""
//                   />
//                   <small className="font-quick md:text-xl text-lg font-semibold text-white  dark:text-black">
//                     {" "}
//                     Continue with Google
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
//                 <div className="w-[300px] h-14 flex space-x-5  items-center  rounded-full   dark:bg-white  bg-black ">
//                   <img
//                     className="h-8 ml-5"
//                     src="/img/logof_acebook.png"
//                     alt=""
//                     srcSet=""
//                   />
//                   <small className="font-quick md:text-xl text-lg  font-semibold text-white dark:text-black">
//                     {" "}
//                     Login with Facebook
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

// export default Login;

import React from "react";

const Login = () => {
  return <div>Login</div>;
};

export default Login;
