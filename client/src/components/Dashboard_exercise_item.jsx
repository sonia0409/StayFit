import { React, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Dashboard_exercise_list_item.scss'

export default function DashboardExerciseListItem(props) {
  const { workoutObj, onChange } = props;

  const {
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed,
  } = workoutObj;

  const [localCompleted, setLocalCompleted] = useState(is_completed);

  const onClickHandler = () => {
    setLocalCompleted(!localCompleted);
    onChange();
  };

  return (
    <div className="db-card">

      <div className="db-container">
        <h2 className="db-exercise-name">{name}</h2>

        <div className="db-exercise-info">
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

          <div className="db-completed-button">
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
