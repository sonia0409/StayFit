import React from "react";

export default function DeletePopup(props) {
  const { handleClose, onSingleDelete, onAllDelete, isRecurring } = props;
  
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>x</span>
        <div>
          Confirm deletion:
        </div>
        <button
          onClick={() => onSingleDelete()}
        >Delete exercise for today</button>
        { isRecurring && 
          <button
          onClick={() => onAllDelete()}
          >Delete for all future dates</button>
        }
      </div>
    </div>
  );
}
