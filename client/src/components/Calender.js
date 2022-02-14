import { React, useState } from 'react';
import DayWorkoutList from '../day_workout_list';

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date().toDateString())

  // useEffect(() => {
  //   setSelectedDate(Date.now())
  // }, []);
  const splitDate = selectedDate.split(' ');
  
  return (
    <div>
      Calender page
      <h2>Component: Header</h2>
      <h2>{splitDate[1]} {splitDate[2]} </h2>
      <h2>Tasks left: 10</h2>
      <h2>Component: WeekCalender</h2>
      <DayWorkoutList />

      <button className="addNewExercise">
        Add new Exercise
      </button>
    </div>
  );
}