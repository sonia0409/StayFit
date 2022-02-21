import React from "react";
import { useForm } from "react-hook-form";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "../styles/EditForm.scss";

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

  const isRecurring = Mo || Tu || We || Th || Fr || Sa || Su;

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
        className="edit-form"
        onSubmit={handleSubmit(async (data) => {
          console.log("Data from Edit Form =======>", data);

          // Use axios to edit exercise in database.
          //path:  ("exercise/:exercise_id");
          await axios.post(
            `http://localhost:8080/exercises/${exercise_id}`,
            data
          );

          onClose();
        })}
      >
        <div className="edit-close-cross">
          <CancelIcon fontSize="large" onClick={onClose} />
        </div>

        <div className="edit-form-name">
          <h2>Edit Exercise</h2>
        </div>

        {/* Inputs  */}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Exercise Name :</label>
          </Grid>
          <Grid item xs={7}>
            <input {...register("exerciseName")} placeholder="Exercise Name" />
            {errors.exerciseName && <p>Exercise Name is required field</p>}
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Duration (min) : </label>
          </Grid>
          <Grid item xs={7}>
            <input {...register("duration")} placeholder="Duration / min" />
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Sets :</label>
          </Grid>
          <Grid item xs={7}>
            <input {...register("sets")} placeholder="Sets" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Reps :</label>
          </Grid>
          <Grid item xs={7}>
            <input {...register("reps")} placeholder="Reps" />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Weight (lbs) :</label>
          </Grid>
          <Grid item xs={7}>
            <input {...register("weight")} placeholder="Weight" />
          </Grid>
        </Grid>
        {isRecurring && (
          <div className="note-message">
            <h5>
              * Note: This is a recurring exercise and will modify all related
              events.
            </h5>
          </div>
        )}
        <input className="edit-input" type="submit" />
      </form>
    </main>
  );
};
export default EditForm;
