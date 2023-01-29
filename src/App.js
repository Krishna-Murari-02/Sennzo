import "./App.css";
import Home from "./components/Landing/Home";
import About from "./components/About/About";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import UserProfile from "./components/Login/UserProfile";
import ForYou from "./components/ForYou/ForYou";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import * as React from "react";

import QuizGrid from "./components/Ouiz/QuizGrid";
import CompleteQuiz from "./components/Ouiz/CompleteQuiz";
import Sub from "./components/Ouiz/Sub";
import MainQuiz from "./components/Ouiz/MainQuiz";
import LearnMore from "./components/LearnMore/LearnMore";

import Learn from "./components/LearnMore/Learn";
import Recover from "./components/Login/Recover";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";
import Contact from "./components/Contact/Contact";
import CurentlyProgressPage from "./components/CurentlyProgressPage/CurentlyProgressPage";

function App() {
  return (
    <div className="dark:bg-black bg-white">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/quiz" element={<QuizGrid />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/mainquiz" element={<MainQuiz />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/foryou" element={<ForYou />} />
          <Route path="/details" element={<UserProfile />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/finish" element={<CompleteQuiz />} />
          <Route path="/progress" element={<CurentlyProgressPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
