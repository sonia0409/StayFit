import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./AddForm.css";

const AddForm = (props) => {
  const { date, onSubmit, userid = 1, onClose } = props;

  const {
    control,
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      bodyPart: "",
      muscleGroup: "",
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: false,
      Sa: false,
      Su: false,
    },
  });

  return (
    <main>
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log("Data from form =====> ", data);
          // Use axios post to add exercise to database.
          await axios.post(
            `http://localhost:8080/day-exercises/${userid}/${date}/new`,
            data
          );

          // Change showAddForm state to false and cause re-render of calender component.
          //  This updated the current day with added exercise.
          onSubmit();
        })}
      >
        <div className="close-cross">
          <HighlightOffIcon fontSize="large" onClick={onClose} />
          <h5>Close</h5>
        </div>

        <div className="form-name">
          <h1>Add Workout</h1>
          <hr />
          <h4>{date}</h4>
        </div>

        {/* Dropdown */}
        <div className="form-dropdown">
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <label className="form-label">Body Part :</label>
            </Grid>
            <Grid item xs={9}>
              <Controller
                name="bodyPart"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    isClearable
                    {...field}
                    options={[
                      { value: "chest", label: "Chest" },
                      { value: "lower arms", label: "Lower arms" },
                      { value: "lower legs", label: "Lower legs" },
                      { value: "neck", label: "Neck" },
                      { value: "shoulders", label: "Shoulders" },
                      { value: "upper arms", label: "Upper arms" },
                      { value: "upper legs", label: "Upper legs" },
                      { value: "waist", label: "Waist" },
                      { value: "back", label: "Back" },
                      { value: "cardio", label: "Cardio" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>
        <div className="form-dropdown">
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <label className="form-label">Muscle Group :</label>
            </Grid>
            <Grid item xs={9}>
              <Controller
                name="muscleGroup"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    isClearable
                    {...field}
                    options={[
                      { value: "abductors", label: "Abductors" },
                      { value: "abs", label: "Abs" },
                      { value: "biceps", label: "Biceps" },
                      { value: "calves", label: "Calves" },
                      {
                        value: "cardiovascular system",
                        label: "Cardiovascular System",
                      },
                      { value: "delts", label: "Delts" },
                      { value: "forearms", label: "Forearms" },
                      { value: "glutes", label: "Glutes" },
                      { value: "hamstrings", label: "Hamstrings" },
                      { value: "lats", label: "Lats" },
                      { value: "levator scapulae", label: "Levator Scapulae" },
                      { value: "pectorals", label: "Pectorals" },
                      { value: "quads", label: "Quads" },
                      {
                        value: "serratus anterior",
                        label: "Serratus Anterior",
                      },
                      { value: "spine", label: "Spine" },
                      { value: "traps", label: "Traps" },
                      { value: "triceps", label: "Triceps" },
                      { value: "upper back", label: "Upper back" },
                      { value: "other", label: "other" },
                    ]}
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>
        {/* Inputs field */}
        {errors.exerciseName && <p>Exercise Name is required field</p>}
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label"> Name :</label>
          </Grid>
          <Grid item xs={9}>
            <input
              {...register("exerciseName", { required: true })}
              placeholder="Exercise Name"
            />
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

        {/* Checkboxes  */}
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <label className="form-label">Recurring :</label>
          </Grid>
          <Grid item xs={9}>
            <div className="form-checkboxes">
              <label> Mo </label>
              {/* control your input into the hook by invoking the "field" function */}
              <Controller
                name="Mo"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <label> Tu </label>
              <Controller
                name="Tu"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <label> We </label>
              <Controller
                name="We"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <label> Th </label>
              <Controller
                name="Th"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <label> Fr </label>
              <Controller
                name="Fr"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <label> Sa </label>
              <Controller
                name="Sa"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
              <label> Su </label>
              <Controller
                name="Su"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            </div>
          </Grid>
        </Grid>
        <input type="submit" />
      </form>
    </main>
  );
};
export default AddForm;
