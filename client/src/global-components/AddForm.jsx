import { React, useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "../styles/AddForm.scss";
import { authContext } from "../providers/AuthProvider";
import { getMusclesByBodyPartName } from "../helpers/selectors";

const exercises = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
    id: "0001",
    name: "3/4 sit-up",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
    id: "0002",
    name: "45° side bend",
    target: "abs",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1512.gif",
    id: "1512",
    name: "all fours squad stretch",
    target: "quads",
  },
  {
    bodyPart: "waist",
    equipment: "cable",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0007.gif",
    id: "0007",
    name: "alternate lateral pulldown",
    target: "lats",
  },
  {
    bodyPart: "lower legs",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/1368.gif",
    id: "1368",
    name: "ankle circles",
    target: "calves",
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/3293.gif",
    id: "3293",
    name: "archer pull up",
    target: "lats",
  },
];

const AddForm = (props) => {
  const { user } = useContext(authContext);
  const { date, onSubmit, onClose } = props;

  const {
    watch, // follow up for changes in the input field
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    control, //same as register but for fields other than input
    formState: { errors },
  } = useForm({
    defaultValues: {
      bodyPart: "",
      muscleGroup: "",
      exerciseName: "",
      duration: 0,
      sets: 0,
      reps: 0,
      weight: 0,
      Mo: false,
      Tu: false,
      We: false,
      Th: false,
      Fr: false,
      Sa: false,
      Su: false,
    },
  });

  const selectedPart = watch("bodyPart").value;
  const updatedMuscles = getMusclesByBodyPartName(exercises, selectedPart);

  return (
    <main>
      <form
        className="add-form"
        onSubmit={handleSubmit(async (data) => {
          console.log("Data from form =====> ", data);
          // Use axios post to add exercise to database.
          await axios.post(
            `http://localhost:8080/day-exercises/${user.id}/${date}/new`,
            data
          );

          // Change showAddForm state to false and cause re-render of calender component.
          //  This updated the current day with added exercise.
          onSubmit();
        })}
      >
        <div className="add-close-cross">
          <CancelIcon fontSize="large" onClick={onClose} />
        </div>
        <div className="add-form-name">
          <h2>Add Exercise</h2>
        </div>
        {/* Dropdown */}
        <div className="form-dropdown">
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <label className="form-label">Body Part :</label>
            </Grid>
            <Grid item xs={7}>
              <Controller
                name="bodyPart"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    // isClearable
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
            <Grid item xs={5}>
              <label className="form-label">Muscle Group :</label>
            </Grid>
            <Grid item xs={7}>
              <Controller
                name="muscleGroup"
                control={control}
                render={({ field }) => (
                  <ReactSelect
                    // isClearable
                    {...field}
                    options={updatedMuscles}
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>

        {/* Inputs field */}
        {/* Error messages for input field validation */}
        {errors.exerciseName?.type === "required" && (
          <p> "First name is required"</p>
        )}
        {errors.exerciseName?.type === "maxLength" && (
          <p>Max length is 25 characters.</p>
        )}

        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Name : * Required </label>
          </Grid>
          <Grid item xs={7}>
            <input
              placeholder="Exercise Name / max 25 char"
              {...register("exerciseName", {
                required: {
                  value: true,
                  message: "required",
                },
                maxLength: {
                  value: 25,
                  message: "maxLength",
                },
              })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Duration (min) : </label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Duration"
              {...register("duration", {
                valueAsNumber: true,
              })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Sets :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Sets"
              {...register("sets", {
                valueAsNumber: true,
              })}
            />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <label className="form-label"> Reps :</label>
          </Grid>
          <Grid item xs={7}>
            <input
              type="number"
              placeholder="Reps"
              {...register("reps", {
                valueAsNumber: true,
              })}
            />
          </Grid>
        </Grid>
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
              })}
            />
          </Grid>
        </Grid>
        {/* Checkboxes  */}
        {/* <Grid container spacing={0}>
          <Grid item xs={4}> */}
        <label className="form-label">Recurring :</label>
        {/* </Grid>
          <Grid item xs={8}> */}
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
        {/* </Grid>
        </Grid> */}
        <input className="add-input" type="submit" />
      </form>
    </main>
  );
};
export default AddForm;
