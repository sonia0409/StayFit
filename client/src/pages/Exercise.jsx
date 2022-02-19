import React from "react";
import ExerciseList from "../components/exerciseSearch/ExerciseList";
import { useParams } from "react-router-dom";
import {
  getExerciseByBodyPartName,
  getExerciseByMusclesName,
  getExercises,
} from "../helpers/selectors";
import useExercisesData from "../hooks/useExercisesData";

const Exercise = () => {
  let params = useParams();
  let part = params.part;
  let name = params.name;
   const { exercises } = useExercisesData()
 /*  const exercises = [
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
      id: "0001",
      name: "3/4 sit-up",
      target: "abs",
    },
    {
      bodyPart: "waist",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
      id: "0002",
      name: "45° side bend",
      target: "abs",
    },
    {
      bodyPart: "upper legs",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
      id: "1512",
      name: "all fours squad stretch",
      target: "quads",
    },
    {
      bodyPart: "back",
      equipment: "cable",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
      id: "0007",
      name: "alternate lateral pulldown",
      target: "lats",
    },
    {
      bodyPart: "lower legs",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
      id: "1368",
      name: "ankle circles",
      target: "calves",
    },
    {
      bodyPart: "back",
      equipment: "body weight",
      gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
      id: "3293",
      name: "archer pull up",
      target: "lats",
    },
  ]; */
  const filteredExercises = getExercises(exercises, part, name);

  return (
    <div>
      <ExerciseList header="Exercises" exercises={filteredExercises} />
    </div>
  );
};

export default Exercise;
