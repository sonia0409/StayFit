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
      {/* <Calender /> */}
      {/* <ExerciseList /> */} {/* => not working yet */}
      {/* <ExerciseListItem /> */}
      {/* <Exercises /> */} {/*=> not working yet */}
      {/* <Exercise /> */} {/* => not working yet */}
      <AddForm />
      {/* <EditForm /> */}
      <Footer />
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
