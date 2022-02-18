import React from "react";
import { useForm } from "react-hook-form";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./EditForm.css";

const EditForm = (props) => {
  // console.log("PROPS =====>", props);
  const { exercise_id, duration, sets, reps, weight, onClose } = props;

  const exerciseName = props.name;
  const bodyPart = props.bodypart;
  const muscleGroup = props.musclegroup;
  const Mo = props.recurring_monday;
  const Tu = props.recurring_tuesday;
  const We = props.recurring_wednesday;
  const Th = props.recurring_thursday;
  const Fr = props.recurring_friday;
  const Sa = props.recurring_saturday;
  const Su = props.recurring_sunday;

  const isRecurring = (Mo || Tu || We || Th || Fr || Sa || Su);

  const {
    control,
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bodyPart: bodyPart || "",
      muscleGroup: muscleGroup || "",
      exerciseName: exerciseName || "",
      duration: duration || null,
      sets: sets || null,
      reps: reps || null,
      weight: weight || null,
      Mo: Mo || false,
      Tu: Tu || false,
      We: We || false,
      Th: Th || false,
      Fr: Fr || false,
      Sa: Sa || false,
      Su: Su || false,
    },
  });

  return (
    <main>
      <form
        onSubmit={handleSubmit(async (data) => {
          // console.log("Data from Edit Form =======>", data);

          // Use axios to edit exercise in database.
          //path:  ("exercise/:exercise_id");
          await axios.post(
            `http://localhost:8080/exercises/${exercise_id}`,
            data
          );

          // onClose();
        })}
      >
        <div className="close-cross">
          <HighlightOffIcon fontSize="large" onClick={onClose} />
          <h5>Close</h5>
        </div>

        <div className="form-name">
          <h2>Edit Workout</h2>
          {/* <hr /> */}
        </div>

        {/* Inputs  */}

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Exercise Name :</label>
          </Grid>
          <Grid item xs={9}>
            <input {...register("exerciseName")} placeholder="Exercise Name" />
            {errors.exerciseName && <p>Exercise Name is required field</p>}
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Duration (min) : </label>
          </Grid>
          <Grid item xs={9}>
            <input {...register("duration")} placeholder="Duration / min" />
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Sets :</label>
          </Grid>
          <Grid item xs={9}>
            <input {...register("sets")} placeholder="Sets" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Reps :</label>
          </Grid>
          <Grid item xs={9}>
            <input {...register("reps")} placeholder="Reps" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Weight (lbs) :</label>
          </Grid>
          <Grid item xs={9}>
            <input {...register("weight")} placeholder="Weight" />
          </Grid>
        </Grid>
        { isRecurring && 
          <div className="note-message">
            * Note: This is a recurring exercise and will modify all related events. 
          </div>
        }
        <input type="submit" />
      </form>
    </main>
  );
};
export default EditForm;
