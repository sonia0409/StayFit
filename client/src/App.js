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

function App() {
  const { auth } = useContext(authContext);
  const [show, setShow] = useState('LOGIN');

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
              {/* <Route path="/" element={<Dashboard/>} /> */}{" "}
              {/* rn - not working */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/calender" element={<Calender />} />
              {/* change path to /calender; once get Dashboard working */}
              <Route path="/exerciseCategory" element={<Application />} />
              <Route path="/exercises/:part" element={<Exercises />} />
              <Route
                path="/exercises/:part/exercise/:name"
                element={<Exercise />}
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
