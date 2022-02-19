import ExerciseListItem from "./ExerciseListItem";
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import BackButton from "./BackButton";

export default function ExerciseList(props) {
  const [current, setCurrent] = useState("");
  const { header, exercises, onClick } = props;
  const listOfExercises = exercises.map((exercise) => (
    <ExerciseListItem
      key={exercise.id}
      name={exercise.name}
      gifUrl={exercise.gifUrl}
      onClick={() => setCurrent(exercise.name)}
      show={current === exercise.name}
    />
  ));

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={"auto"}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            {header}
          </Typography>
          <div>
            <BackButton />
          </div>
          {listOfExercises}
        </Grid>
      </Grid>
    </Box>
  );
}
