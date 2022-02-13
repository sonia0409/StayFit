import React from 'react';
import DayWorkoutListItem from './day_workout_list_item';
import './scss/day_workout_list.scss'

const workoutObjs = [
  {
    id: 1,
    name: "push-up",
    type: "upper body",
    duration: "-",
    sets: 5,
    reps: 10,
    weight: 0,
    is_completed: false,
    date: "today",
  },
  {
    id: 2,
    name: "sit-up",
    type: "core",
    duration: "-",
    sets: 5,
    reps: 10,
    weight: 0,
    is_completed: false,
    date: "today",
  },
  {
    id: 3,
    name: "squats",
    type: "lower body",
    duration: "-",
    sets: 5,
    reps: 10,
    weight: 150,
    is_completed: false,
    date: "today",
  },
  {
    id: 4,
    name: "Sprints",
    type: "cardio",
    duration: 10,
    sets: 5,
    reps: 1,
    weight: 0,
    is_completed: false,
    date: "today",
  },
  {
    id: 5,
    name: "jog",
    type: "cardio",
    duration: 10,
    sets: 2,
    reps: 1,
    weight: 0,
    is_completed: false,
    date: "today",
  },
];

export default function DayWorkoutList() {

  const exerciseItems = workoutObjs.map(exercise => 
    <DayWorkoutListItem id={exercise.id} workoutObj={exercise} />
  )

  return (
    <div className="exercises-container">
      {exerciseItems}
    </div>
  );
}