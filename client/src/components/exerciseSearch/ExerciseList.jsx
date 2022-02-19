import ExerciseListItem from "./ExerciseListItem";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import BackButton from "./BackButton";

export default function ExerciseList(props) {
  const [current, setCurrent] = useState("");
  const { header, exercises, onClick } = props;
  const listOfExercises = exercises.map((exercise) => (
    <ExerciseListItem
      key={exercise.id}
      name={exercise.name}
      gifUrl={exercise.gifUrl}
      onClick={() => setCurrent(exercise.name)}
      show={current === exercise.name}
    />
  ));

  return (
    <div className='exerciseList'>
          <div className='heading-container'>
            <span>
              <BackButton />
            </span>
            <h2>
              {header}
            </h2>
          </div>
          <div className="item-container">
          {listOfExercises}
          </div>
    </div>
  );
}
