import React from 'react';
import DayWorkoutList from './day_workout_list';


export default function Dashboard() {
  return (
    <div>
      Componenet: Header
      <h2> Today's Workout:</h2>
      <p>Motivational quote!</p>
      <p>Exercises planned: 10</p>
      <p>Exercises not complete 10 or some other stats.</p>
      <DayWorkoutList />
      <div>
        Add new form button here.
      </div>
      Component: Footer/NavBar
    </div>
  )
}