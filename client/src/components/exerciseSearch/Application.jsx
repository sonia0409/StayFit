import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Application() {
  const exerciseList = ["Body Parts", "Muscles"];
  const [showBodyPart, setShowBodyPart] = useState(false);
  const [showMuscles, setShowMuscles] = useState(false);

  const navigate = useNavigate();

  const onExerciseSelection = (name) => {
    console.log("In applications name is:", name);
    navigate(`/exercises/${name}`);
  };

  return (
    <div>
      {!showBodyPart && !showMuscles && (
        <ItemList
          header="List of Exercises"
          exerciseList={exerciseList}
          onClick={onExerciseSelection}
        />
      )}
    </div>
  );
}
