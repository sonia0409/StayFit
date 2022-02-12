import React from "react";
import { faTrashCan, faPenToSquare, faCircleInfo, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/day_workout_list_item.scss"

export default function DayWorkoutListItem(props) {
  
  const { workoutObj, setIsCompleted } = props;
  
  const { 
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed
   } = workoutObj;

  return (
    
      <div className="card">
        <div className="multi-button">
          <button className="fas fa-trash"
            onClick={() => console.log('Delete clicked')}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button className="fas fa-edit"
          onClick={() => console.log('Edit clicked')}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className="fas fa-view"
          onClick={() => console.log('View info clicked')}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </button>
        </div>
        <div className="container">
          <h2>{ name }</h2>
          <div>Weight(lbs): { weight }</div>
          <div>Sets: { sets }</div>
          <div>Reps: { reps }</div>
          <div>Duration: { duration }</div>

          <div>

            <button className="fas fa-view"
            onClick={() => console.log('Check completed clicked')}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
          </div>

        </div>
      </div>

  );
}