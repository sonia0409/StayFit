import React from "react";
import "../styles/Day_workout_list_item.scss";

export default function EmptyDayExercises() {
  return (
    <div className="empty-card">
      <div>
        <div>No exercises planned for today</div>
      </div>
    </div>
  );
}
