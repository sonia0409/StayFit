import React from "react";
import ExerciseList from "../components/exerciseSearch/ExerciseList";
import { useParams } from "react-router-dom";
import {
  getExercises
} from "../helpers/selectors";


const Exercise = (props) => {
  let params = useParams();
  let part = params.part;
  let name = params.name;
  const {exercises} = props

 
  const filteredExercises = getExercises(exercises, part, name);

  return (
    <div>
      <ExerciseList header="Exercises" exercises={filteredExercises} />
    </div>
  );
};

export default Exercise;
