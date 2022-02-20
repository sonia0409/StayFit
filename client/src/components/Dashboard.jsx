import React from "react";
import DayWorkoutList from "./Day_workout_list";

export default function Dashboard() {
  const today = new Date();

  return (
    <div>
      <h2> Today's Exercises:</h2>
      <DayWorkoutList
        selectedDate={today}
        setEditObj={() => {}}
        onClick={() => {}}
      />
    </div>
  );
}
