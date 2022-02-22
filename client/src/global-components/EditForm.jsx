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
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bodyPart: bodyPart || "",
      muscleGroup: muscleGroup || "",
      exerciseName: exerciseName || "",
      duration: duration || 0,
      sets: sets || 0,
      reps: reps || 0,
      weight: weight || 0,
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
          // console.log("Data from Edit Form =======>", data);

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
        {/* Error messages for name field validation */}
        {errors.exerciseName?.type === "required" && (
          <p>Give the name for your exersicise.</p>
        )}
        {errors.exerciseName?.type === "maxLength" && (
          <p>Max length for name is 25 characters.</p>
        )}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Name : *</label>
          </Grid>
          <Grid item xs={7}>
            <input
              placeholder="Exercise Name"
              {...register("exerciseName", {
                required: true,
                maxLength: 25,
              })}
            />
          </Grid>
        </Grid>

        {/* Error messages for duration field. */}
        {errors.duration?.type === "required" && (
          <p> Duration field can't be empty. </p>
        )}
        {errors.duration?.type === "min" && <p>Duration can't be negative.</p>}
        {errors.duration?.type === "max" && (
          <p>Duration can't be more then 1000.</p>
        )}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Duration (min) : </label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Duration"
              {...register("duration", {
                required: true,
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for sets field. */}
        {errors.sets?.type === "required" && <p> Sets field can't be empty.</p>}
        {errors.sets?.type === "min" && <p>Sets can't be negative.</p>}
        {errors.sets?.type === "max" && <p>Sets can't be more then 1000.</p>}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Sets :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Sets"
              {...register("sets", {
                required: true,
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for reps field. */}
        {errors.reps?.type === "required" && <p> Reps field can't be empty.</p>}
        {errors.reps?.type === "min" && <p>Reps can't be negative.</p>}
        {errors.reps?.type === "max" && <p>Reps can't be more then 1000.</p>}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Reps :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Reps"
              {...register("reps", {
                required: true,
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
          </Grid>
        </Grid>
        {/* Error messages for weight field. */}
        {errors.weight?.type === "min" && <p>Weight can't be negative.</p>}
        {errors.weight?.type === "max" && (
          <p>Weight can't be more then 1000.</p>
        )}
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Weight (lbs) :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Weight"
              {...register("weight", {
                valueAsNumber: true,
                min: 0,
                max: 1000,
              })}
            />
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
