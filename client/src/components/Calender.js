import { React, useEffect, useState } from "react";
import DayWorkoutList from "../day_workout_list";
import WeeklyCalender from "./WeeklyCalender";
import AddForm from "../global-components/AddForm";
import EditForm from "../global-components/EditForm";
import "../scss/calender.scss";
import Fab from "@mui/material/Fab";

export default function Calender() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showAddForm, setShowAddForm] = useState(false);
  // const [showEditForm, setShowEditForm] = useState(false);
  const [editExerciseObj, setEditExerciseObj] = useState({});

  useEffect(() => {
    setEditExerciseObj({});
  }, [selectedDate]);

  // const dateStringFormat = selectedDate.toDateString();
  const splitDate = selectedDate.toDateString().split(" ");
  // console.log(selectedDate)
  return (
    <div className="calender-container">
      <div className="calender-information">
        <h2>
          {splitDate[1]} {splitDate[2]}{" "}
        </h2>
        <Fab variant="extended" onClick={() => setSelectedDate(new Date())}>
          Today
        </Fab>
        <h2>Tasks: 10</h2>
      </div>

      <WeeklyCalender
        currDate={selectedDate}
        onClick={setSelectedDate}
        onClose={() => setShowAddForm(false)}
      />
      {!showAddForm && Object.keys(editExerciseObj).length === 0 && (
        <DayWorkoutList
          selectedDate={selectedDate}
          onClick={() => setShowAddForm}
          // onEditClick={() => setShowEditForm}
          setEditObj={setEditExerciseObj}
        />
      )}

      {showAddForm && (
        <AddForm
          date={selectedDate.toDateString()}
          onSubmit={() => setShowAddForm(false)}
          onClose={() => setShowAddForm(false)}
        />
      )}

      {Object.keys(editExerciseObj).length > 0 && (
        <EditForm
          key={editExerciseObj.id}
          {...editExerciseObj}
          onClose={() => setEditExerciseObj({})}
        />
      )}
    </div>
  );
}
