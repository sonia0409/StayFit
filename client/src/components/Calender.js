import { React, useState } from 'react';
import DayWorkoutList from '../day_workout_list';
import WeeklyCalender from './WeeklyCalender';

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const splitDate = selectedDate.toDateString().split(' ');

  return (
    <div>
      Calender pageeeee
      <h2>Component: Header</h2>
      <h2>Tasks left: 10</h2>
      <h2>{splitDate[1]} {splitDate[2]} </h2>
      <WeeklyCalender  currDate={selectedDate} onClick={setSelectedDate} />

      <DayWorkoutList />
      <button className="addNewExercise">
        Add new Exercise
      </button>
    </div>
  );
}