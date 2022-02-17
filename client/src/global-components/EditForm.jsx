import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Grid from "@mui/material/Grid";
import "./EditForm.css";

const EditForm = (props) => {
  console.log("PROPS =====>", props);
  const { duration, sets, reps, weight, onClose } = props;

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
        onSubmit={handleSubmit((data) => {
          // onClose();
          console.log("Data from Edit Form =======>", data);
        })}
      >
        <div className="close-cross">
          <HighlightOffIcon fontSize="large" onClick={onClose} />
          <h5>Close</h5>
        </div>

        <div className="form-name">
          <h1>Edit Workout</h1>
          <hr />
          <h4>Do we want a date here?</h4>
        </div>

        <div className="form-dropdown"></div>

        {/* Inputs  */}
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label>Body Part : </label>
          </Grid>
          <Grid item xs={9}>
            <input
              {...register("bodyPart")}
              placeholder="bodyPart"
              value={bodyPart}
              disabled
            />
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label> Muscule Group :</label>
          </Grid>
          <Grid item xs={9}>
            <input
              {...register("muscleGroup")}
              placeholder="muscleGroup"
              value={muscleGroup}
              disabled
            />
          </Grid>
        </Grid>

        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Name :</label>
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

        <label>Recurring :</label>
        <div className="form-checkboxes">
          <label> Mo </label>
          {/* control your input into the hook by invoking the "field" function */}
          <Controller
            name="Mo"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={Mo} />}
          />
          <label> Tu </label>
          <Controller
            name="Tu"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={Tu} />}
          />
          <label> We </label>
          <Controller
            name="We"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={We} />}
          />
          <label> Th </label>
          <Controller
            name="Th"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={Th} />}
          />
          <label> Fr </label>
          <Controller
            name="Fr"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={Fr} />}
          />
          <label> Sa </label>
          <Controller
            name="Sa"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={Sa} />}
          />
          <label> Su </label>
          <Controller
            name="Su"
            control={control}
            render={({ field }) => <Checkbox {...field} defaultChecked={Su} />}
          />
        </div>
        <input type="submit" />
      </form>
    </main>
  );
};
export default EditForm;
