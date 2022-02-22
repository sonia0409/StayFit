import React, { useEffect, useState } from "react";
import DashboardExerciseList from "./Dashboard_exercise_list";
import "../styles/Dashboard.scss";

export default function Dashboard(props) {
  const {quotes} = props;

  const randomQuote = Math.floor((Math.random() * 6));

  const formatedDate = () => {
    const today = new Date();
    const splitDate = today.toDateString().split(' ');
    return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`;
  }
  //weather api data======
  const weather = props.todayWeather
  const temperatureInCelsius = Math.round((weather.main.temp - 32) / 1.8)
  const { icon } = weather.weather['0']
  const iconurl = `http://openweathermap.org/img/w/${icon}.png`;
  //=========**=====
  return (
    <div className="container-dashboard">
      <div className="heading-container">
        <div className="weather">
          <img src={`${iconurl}`} alt=""/>
          {temperatureInCelsius}&#8451; {weather.name}
        </div>
        <div>
          <h2 className="dashboard-date">Dashboard</h2>
          <h2 className="dashboard-date">{formatedDate()}</h2>
        </div>
      </div>
      <section className="container-quote">
        <div className="quote-data" >{quotes[randomQuote].quote}</div>
        <div className="quote-author" >
          {/* Author: */}
          <div>- {quotes[randomQuote].author}</div>
        </div>
      </section>

      <div className="db-titles">
        <h3> Today's Exercises:</h3>
        {/* <h3> Status</h3> */}
      </div>
      <DashboardExerciseList
        selectedDate={new Date()}
        setEditObj={() => { }}
        onClick={() => { }}
      />
    </div>
  );
}
