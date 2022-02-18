import { React, useState, useEffect } from "react";
import DayWorkoutListItem from "./day_workout_list_item";
import EmptyDayExercises from "./components/EmptyDayExercises";
import "./scss/day_workout_list.scss";
import axios from "axios";
import Fab from "@mui/material/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function DayWorkoutList(props) {
  const selectedDate = props.selectedDate.toDateString();
  const { setEditObj } = props;

  const [dayExercises, setDayExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exerciseDeleted, setExerciseDeleted] = useState(false);

  const toggleDeleted = () => {
    setExerciseDeleted(!exerciseDeleted)
  }

  const userid = 1;

  useEffect(() => {
    const updateData = async () => {
      setLoading(true);
      await axios
        .get(`http://localhost:8080/day-exercises/${userid}/${selectedDate}`)
        .then((response) => {
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setDayExercises([...response.data]);
        });
    };
    updateData();
  }, [selectedDate, exerciseDeleted]);

  const persistIsCompleted = async (dayExerciseId) => {
    // Update is_completed status in database
    await axios.patch(
      `http://localhost:8080/day-exercises/${dayExerciseId}`,
      {}
    );

    // Get day_exercises and update state
    await axios
      .get(`http://localhost:8080/day-exercises/${userid}/${selectedDate}`)
      .then((response) => {
        setDayExercises([...response.data]);
      });
    return;
  };

  const exerciseItems = dayExercises.map((exercise) => (
    <DayWorkoutListItem
      key={exercise.id}
      workoutObj={exercise}
      onChange={() => persistIsCompleted(exercise.day_exercise_id)} 
      onEditClick={() => setEditObj(exercise)}
      toggleDeleted={toggleDeleted}
    />
  ));

  return (
    <div className="exercises-container">
      {exerciseItems.length > 0 && !loading && exerciseItems}
      {exerciseItems.length === 0 && !loading && <EmptyDayExercises />}
      {loading && "Loading"}
      <Fab
        color="primary"
        aria-label="add"
        className="add-new-exercise"
        onClick={props.onClick(true)}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
