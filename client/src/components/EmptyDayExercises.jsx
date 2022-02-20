import React from "react";
import "../styles/Day_workout_list_item.scss";

export default function EmptyDayExercises() {
  return (
    <div className="empty-card">
      <div>
        <p>No exercises planned for today</p>
      </div>
    </div>
  );
}
