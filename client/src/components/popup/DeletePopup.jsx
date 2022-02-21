import React from "react";

export default function DeletePopup(props) {
  const { handleClose, onSingleDelete, onAllDelete, isRecurring } = props;

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <div className="confirm-deletion">
          <h4>Confirm deletion:</h4>
          {/* <h4>Delete for:</h4> */}
        </div>
        <div className="container-delete-buttons">
          <div>
            <button id="single-delete" onClick={() => onSingleDelete()}>
              Delete exercise for today
              {/* Today only */}
            </button>
          </div>
          <div>
            {isRecurring && (
              <button id="all-delete" onClick={() => onAllDelete()}>
                Delete for all future dates
                {/* All future dates */}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
