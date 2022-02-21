import React, { useEffect, useState } from "react";
import DashboardExerciseList from "./Dashboard_exercise_list";
import "../styles/Dashboard.scss";
import axios from "axios";
import useQuotes from '../hooks/useQuotes'



export default function Dashboard() {
  const {quotes} = useQuotes()
  let displayQuoteNum = 0;
  const formatedDate = () => {
    const today = new Date();
    const splitDate = today.toDateString().split(' ');
    return `${splitDate[0]}, ${splitDate[1]} ${splitDate[2]}, ${splitDate[3]}`;
  }

  

  return (
    <div className="container-dashboard" >
      <h2 className="dashboard-date">Dashboard</h2>
      <h2 className="dashboard-date">{formatedDate()}</h2>
      <section className="container-quote">
        <div className="quote-data" >{quotes[displayQuoteNum].quote}</div>
        <div className="quote-author" >
          Author:
          <div>{quotes[displayQuoteNum].author}</div> 
        </div>
        </section>
      
      <div className="db-titles">
      <h3> Today's Exercises:</h3>
      <h3> Status</h3>
      </div>
      <DashboardExerciseList
        selectedDate={new Date()}
        setEditObj={() => {}}
        onClick={() => {}}
      />
    </div>
  );
}
