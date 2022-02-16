import React from "react";
import Dashboard from "./Dashboard";
import Calender from "./components/Calender";
import "./App.css";
import Application from "./components/Application";
import { Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Exercise from "./pages/Exercise";

function App() {
  return (
    <div className="App">
      <Calender />
      {/*  <div> <Header/> </div> }/:name
      <div><Application /> </div>F
       <div> <Footer/> </div>     } */}
      {/* <Routes>
        <Route path="/" element={<Application />} />
        <Route path="exercises/:part" element={<Exercises />} />
        <Route path="exercises/:part/exercise/:name" element={<Exercise />} />
      </Routes> */}
    </div>
  );
}

export default App;
