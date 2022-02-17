import { React, useState, useEffect } from "react";
import DayWorkoutListItem from "./day_workout_list_item";
import EmptyDayExercises from "./components/EmptyDayExercises";
import "./scss/day_workout_list.scss";
import axios from "axios";
import Fab from "@mui/material/Fab";
import AddIcon from "@material-ui/icons/Add";

const workoutObjs = [
  {
    id: 1,
    name: "push-up",
    type: "upper body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 2,
    name: "sit-up",
    type: "core",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 3,
    name: "squats",
    type: "lower body",
    duration: null,
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
    weight: null,
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
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 6,
    name: "push-up",
    type: "upper body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 7,
    name: "sit-up",
    type: "core",
    duration: null,
    sets: 5,
    reps: 10,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 8,
    name: "squats",
    type: "lower body",
    duration: null,
    sets: 5,
    reps: 10,
    weight: 150,
    is_completed: false,
    date: "today",
  },
  {
    id: 9,
    name: "Sprints",
    type: "cardio",
    duration: 10,
    sets: 5,
    reps: 1,
    weight: null,
    is_completed: false,
    date: "today",
  },
  {
    id: 10,
    name: "jog",
    type: "cardio",
    duration: 10,
    sets: 2,
    reps: 1,
    weight: 100,
    is_completed: false,
    date: "today",
  },
];

export default function DayWorkoutList(props) {
  const selectedDate = props.selectedDate.toDateString();
  const { setEditObj } = props;

  const [dayExercises, setDayExercises] = useState([]);
  const [loading, setLoading] = useState(true);

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
  }, [selectedDate]);

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
      onChange={() => persistIsCompleted(exercise.id)}
      onEditClick={() => setEditObj(exercise)}
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
