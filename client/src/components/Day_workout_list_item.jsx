import { React, useState } from "react";
import {
  faTrashCan,
  faPenToSquare,
  faCircleInfo,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Day_workout_list_item.scss";
import axios from "axios";
import DeletePopup from "./popup/DeletePopup";
import "./popup/Popup.scss";

export default function DayWorkoutListItem(props) {
  const { workoutObj, onChange, onEditClick, toggleDeleted } = props;

  const {
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed,
    day_exercise_id,
    exercise_id,
    recurring_monday,
    recurring_tuesday,
    recurring_wednesday,
    recurring_thursday,
    recurring_friday,
    recurring_saturday,
    recurring_sunday,
  } = workoutObj;

  const isRecurring =
    recurring_monday ||
    recurring_tuesday ||
    recurring_wednesday ||
    recurring_thursday ||
    recurring_friday ||
    recurring_saturday ||
    recurring_sunday;

  const [localCompleted, setLocalCompleted] = useState(is_completed);

  const onClickHandler = () => {
    setLocalCompleted(!localCompleted);
    onChange();
  };

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const onSingleDelete = async () => {
    await axios
      .patch(`http://localhost:8080/exercises/${day_exercise_id}`)
      .then(() => {
        toggleDeleted();
        togglePopup();
      });
  };
  const onAllDelete = async () => {
    console.log(workoutObj);
    await axios
      .delete(`http://localhost:8080/exercises/${exercise_id}`)
      .then(() => {
        toggleDeleted();
        togglePopup();
      });
  };

  return (
    <div className="card">
      {isOpen && (
        <DeletePopup
          handleClose={togglePopup}
          onSingleDelete={onSingleDelete}
          onAllDelete={onAllDelete}
          isRecurring={isRecurring}
        />
      )}
      <div className="multi-button">
        <button className="fas fa-trash" onClick={() => togglePopup()}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button className="fas fa-edit" onClick={onEditClick}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          className="fas fa-view"
          onClick={() => console.log("View info clicked")}
        >
          <FontAwesomeIcon icon={faCircleInfo} />
        </button>
      </div>

      <div className="container">
        <h2 className="exercise-name">{name}</h2>

        <div className="exercise-info">
          {weight > 0 && (
            <div>
              Weight: <div>{weight} lbs</div>
            </div>
          )}
          {sets > 0 && (
            <div>
              Sets: <div>{sets}</div>
            </div>
          )}
          {reps > 0 && (
            <div>
              Reps: <div>{reps}</div>
            </div>
          )}
          {duration > 0 && (
            <div>
              Time: <div>{duration} min</div>
            </div>
          )}

          <div className="exercise-not-completed-button">
            <input
              type="checkbox"
              id="demo"
              checked={localCompleted}
              onChange={() => 1}
            />
            <label htmlFor="demo">
              <button id="btnbtn" onClick={onClickHandler}>
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
