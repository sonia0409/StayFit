import React from 'react';
import './App.css';
import DayWorkoutListItem from './day_workout_list_item';
const workoutObj = {
  id: 1,
  name: "push-up",
  type: "upper body",
  duration: 10,
  sets: 5,
  reps: 10,
  weight: 0,
  is_completed: false,
  date: "today",
};

function App() {
  return (
    <div>
      
      <DayWorkoutListItem id={workoutObj.id} workoutObj={workoutObj}/>
    </div>
  );
}

export default App;
