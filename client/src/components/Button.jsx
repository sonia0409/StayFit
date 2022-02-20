import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./Button.scss";

export default function AddForm() {
  return (
    <div className="added-button">
      <Fab
        className="added-button"
        size="small"
        color="primary"
        aria-label="add"
        onClick={() => console.log("I was clicked")}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
