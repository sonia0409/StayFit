import { React, useState, useEffect, useContext } from "react";
import EmptyDayExercises from "./EmptyDayExercises";
import axios from "axios";
import { authContext } from '../providers/AuthProvider';
import CircularIndeterminate from "../global-components/Loading";
import DashboardExerciseListItem from "./Dashboard_exercise_item";
import "../styles/Dashboard_exercise_list.scss";

export default function DashboardExerciseList(props) {
  const { user } = useContext(authContext);
  const selectedDate = props.selectedDate.toDateString();

  const [dayExercises, setDayExercises] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const updateData = async () => {
      setLoading(true);
      await axios
        .get(`http://localhost:8080/day-exercises/${user.id}/${selectedDate}`)
        .then((response) => {
          setTimeout(() => {
            setLoading(false);
          }, 500);
          setDayExercises([...response.data]);
        });
    };
    updateData();
  }, [selectedDate, user]);

  const persistIsCompleted = async (dayExerciseId) => {
    // Update is_completed status in database
    await axios.patch(
      `http://localhost:8080/day-exercises/${dayExerciseId}`,
      {}
    );

    // Get day_exercises and update state
    await axios
      .get(`http://localhost:8080/day-exercises/${user.id}/${selectedDate}`)
      .then((response) => {
        setDayExercises([...response.data]);
      });
    return;
  };

  const exerciseItems = dayExercises.map((exercise) => (
    <DashboardExerciseListItem
      key={exercise.id}
      workoutObj={exercise}
      onChange={() => persistIsCompleted(exercise.day_exercise_id)}
    />
  ));

  return (
    <div className="dashboard-exercises-container">
      {exerciseItems.length > 0 && !loading && exerciseItems}
      {exerciseItems.length === 0 && !loading && <EmptyDayExercises />}
      {loading && 
      <div className="loading-circle">
        <CircularIndeterminate/>
      </div>
      }
    </div>
  );
}
