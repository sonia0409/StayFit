import React from "react";

export default function DayWorkoutListItem(props) {
  
  const { workoutObj, setIsCompleted } = props;
  
  const { 
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed
   } = workoutObj;

  return (
    <article className="day_workout_list_item single_workout">
      <div onClick={() => console.log("dropdown clicked")}>
        &#xFE19;
      </div> 
      <h2>{ name }</h2>
      <div>Weight(lbs): { weight }</div>
      <div>Sets: { sets }</div>
      <div>Reps: { reps }</div>
      <div>Duration: { duration }</div>
    </article>
  );
}