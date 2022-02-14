import React from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function AddForm() {
  return (
    <div>
      <Fab
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
