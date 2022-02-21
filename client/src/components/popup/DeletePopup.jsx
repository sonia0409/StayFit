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
        </div>
        <div className="container-delete-buttons">
          <div>
            <button
              className="popup-delete-botton"
              onClick={() => onSingleDelete()}
            >
              Delete for today
            </button>
          </div>
          <div>
            {isRecurring && (
              <button
                className="popup-delete-botton"
                onClick={() => onAllDelete()}
              >
                Delete for all future dates
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
