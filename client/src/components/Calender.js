import { React, useState } from 'react';
import DayWorkoutList from '../day_workout_list';
import WeeklyCalender from './WeeklyCalender';
import '../scss/calender.scss'
import Fab from "@mui/material/Fab";

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const splitDate = selectedDate.toDateString().split(' ');

  return (
    <div>
      <h2>Component: Header</h2>
      
      <div className="calender-information">
        <h2>{splitDate[1]} {splitDate[2]} </h2>
        <Fab variant="extended" onClick= { () => setSelectedDate(new Date()) }>
          Today
        </Fab>
        <h2>Tasks: 10</h2>
      </div>


      <WeeklyCalender  currDate={selectedDate} onClick={setSelectedDate} />

      <DayWorkoutList selectedDate={selectedDate}/>

    </div>
  );
}