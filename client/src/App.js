import React from "react";
import Dashboard from "./Dashboard";
import Calender from "./components/Calender";
import "./App.css";
import Application from "./components/Application";
import { Routes, Route } from "react-router-dom";
import Exercises from "./pages/Exercises";
import Exercise from "./pages/Exercise";
import Footer from "./global-components/Footer";
import Header from "./global-components/Header";
import AddForm from "./global-components/AddForm";
// import EditForm from "./global-components/EditForm";
import ExerciseList from "./components/ExerciseList";
import ExerciseListItem from "./components/ExerciseListItem";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Routes>
        {/* <Route path="/" element={<Dashboard/>} /> */} {/* rn - not working */}
        <Route path="/" element={<div>
          <h1 style={{color: "black"}}>"Bring Dashboard component here!!"</h1>
        </div>} />
        <Route path="/calender" element={<Calender />} />{/* change path to /calender; once get Dashboard working */}
        <Route path="/exerciseCategory" element={<Application />} />
        <Route path="/exercises/:part" element={<Exercises />} />
        <Route path="/exercises/:part/exercise/:name" element={<Exercise />} />
      </Routes>
      
    </div>
  );
}

export default App;