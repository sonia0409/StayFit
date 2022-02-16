import {React, useState} from "react";
import { faTrashCan, faPenToSquare, faCircleInfo, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/day_workout_list_item.scss"
import axios from 'axios'

export default function DayWorkoutListItem(props) {
  const { workoutObj, onChange, onEditClick } = props;
  
  const { 
    name,
    duration,
    sets,
    reps,
    weight,
    is_completed
  } = workoutObj;

  const [localCompleted, setLocalCompleted] = useState(is_completed)

  const onClickHandler = () => {
    setLocalCompleted(!localCompleted)
    onChange();

  }

  return (
    
      <div className="card">

        <div className="multi-button">
          <button className="fas fa-trash"
            onClick={() => console.log('Delete clicked')}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <button className="fas fa-edit"
          onClick={
            onEditClick
          }
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
          <h2 className="exercise-name">{ name }</h2>
          
          <div className="exercise-info">
            { weight && <div>Weight: <div>{ weight } lbs</div></div> }
            { sets && <div>Sets: <div>{ sets }</div></div> }
            { reps && <div>Reps: <div>{ reps }</div></div> }
            { duration && <div>Time: <div>{ duration } min</div></div> }

              <div className="exercise-not-completed-button">
                  <input type="checkbox" id="demo" checked={localCompleted} onChange={() => 1}/>
                  <label htmlFor="demo">

                    <button 
                    
                    id="btnbtn"
                    onClick={onClickHandler}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </label>

              </div>

          </div>

        </div>
      </div>

  );
}