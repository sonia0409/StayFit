import { React, useState, useContext } from "react";
import Dashboard from "./components/Dashboard";
import Calender from "./components/Calender";
import "./App.scss";
import Application from "./components/exerciseSearch/Application";
import { Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Exercise from "./pages/Exercise";
import Footer from "./global-components/Footer";
import Header from "./global-components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { authContext } from './providers/AuthProvider';
import useExercisesData from "./hooks/useExercisesData";

//temporarty data- this data will be fetched from API call 
const exercises = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    name: "3/4 sit-up",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id: "0002",
    name: "45° side bend",
    target: "abs",
  },
  {
    bodyPart: "upper legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    id: "1512",
    name: "all fours squad stretch",
    target: "quads",
  },
  {
    bodyPart: "back",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
    id: "1368",
    name: "ankle circles",
    target: "calves",
  },
  {
    bodyPart: "back",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
];


function App() {
  const { auth } = useContext(authContext);
  const [show, setShow] = useState('LOGIN');
  // const { exercises } = useExercisesData()

  const showLogin = () => {
    setShow("LOGIN");
  }

  const showSignup = () => {
    setShow('SIGNUP');
  }

  return (
    <div className="App">
      {(!auth && show === "LOGIN") && <Login showSignup={showSignup} />}
      {(!auth && show === "SIGNUP") && <Signup showLogin={showLogin} />}

      {auth &&
        <>
          <div className="header">
            <Header />
          </div>
          <div className="routes">
            <Routes>
              {/* <Route path="/" element={<Dashboard/>} /> */}
              {/* rn - not working */}
              <Route exact path="/" element={
                <Dashboard />
              } />
              <Route exact path="/calender" element={
                <Calender />
              } />
              {/* change path to /calender; once get Dashboard working */}
              <Route exact path="/exerciseCategory" element={<Application />} />
              <Route exact path="/exercises/:part" element={<Exercises />} />
              <Route
               exact path="/exercises/:part/exercise/:name"
                element={<Exercise exercises={exercises} />}
              />
            </Routes>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </>
      }
    </div>
  );
}

export default App;
