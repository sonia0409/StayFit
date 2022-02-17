import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";

import "./EditForm.css";

const EditForm = (props) => {
  console.log(props);
  const { duration, sets, reps, weight, onClose } = props;

  const exersiseName = props.name;
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
      bodyPart: bodyPart,
      muscleGroup: muscleGroup,
      exersiseName: exersiseName,
      duration: duration,
      sets: sets,
      reps: reps,
      weight: weight,
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
        onSubmit={handleSubmit((data) => {
          onClose();
          console.log(data);
        })}
      >
        <h1 onClick={onClose}>Close</h1>
        <div className="form-name">
          <h1>Edit Workout</h1>
        </div>

        {/* <label>Body Part</label> */}
        {/* <div className="form-dropdown">
          <Controller
            name="bodyPart"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                // value={bodyPart}
                options={[
                  { value: { bodyPart }, label: "readOnly" },
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
          <label>Muscle Group</label>
          {/* <Controller
            name="muscleGroup"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                options={[
                  { value: { muscleGroup } },
                  // { value: "abductors", label: "Abductors" },
                  // { value: "abs", label: "Abs" },
                  // { value: "biceps", label: "Biceps" },
                  // { value: "calves", label: "Calves" },
                  // {
                  // value: "cardiovascular system",
                  // label: "Cardiovascular System",
                  // },
                  // { value: "delts", label: "Delts" },
                  // { value: "forearms", label: "Forearms" },
                  // { value: "glutes", label: "Glutes" },
                  // { value: "hamstrings", label: "Hamstrings" },
                  // { value: "lats", label: "Lats" },
                  // { value: "levator scapulae", label: "Levator Scapulae" },
                  // { value: "pectorals", label: "Pectorals" },
                  // { value: "quads", label: "Quads" },
                  // { value: "serratus anterior", label: "Serratus Anterior" },
                  // { value: "spine", label: "Spine" },
                  // { value: "traps", label: "Traps" },
                  // { value: "triceps", label: "Triceps" },
                  // { value: "upper back", label: "Upper back" },
                  // { value: "other", label: "other" },
                ]}
              />
            )}
          /> 
              </div> */}
        {/* register your input into the hook by invoking the "register" function */}

        {/* Inputs */}

        <input
          {...register("bodyPart")}
          placeholder="bodyPart"
          value={bodyPart}
          // readonly
        />
        {/* <input
          {...register("muscleGroup")}
          placeholder="muscleGroup"
          value={muscleGroup}
          // disabled
        /> */}
        {/* <label> Body Part :</label>
        <label> {bodyPart} </label>
         */}
        {/* <label> Muscule Group :</label>
        <label> {muscleGroup} </label> */}
        <input
          {...register("exersiseName", {
            required: true,
          })}
          placeholder="Exersise Name"
        />
        {errors.exersiseName && <p>Exersise Name is required field</p>}
        <input {...register("duration")} placeholder="Duration / min" />
        <input {...register("sets")} placeholder="Sets" />
        <input {...register("reps")} placeholder="Reps" />
        <input {...register("weight")} placeholder="Weight" />

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
