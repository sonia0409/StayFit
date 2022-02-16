import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";

import "./EditForm.css";

const EditForm = (props) => {
  const {
    exersiseName = "Back Hurt",
    duration = "From morining to the fence",
    sets = "I would like to watch rather",
    reps = "Seven and a half",
    weight = "One chicken",
    bodyPart = "Chest",
    muscleGroup = "I WON? Props!",
    Mo = true,
    Tu = true,
    We = true,
    Th = true,
    Fr = true,
    Sa = false,
    Su = false,
    onClose
  } = props;
  const {
    control,
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      //these values are NOT VISIABLE on the screen for user
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
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1 onClick={onClose}>Close</h1>  
        <div className="form-name">
          <h1>Edit Workout</h1>
        </div>
        <label>Body Part</label>
        <div className="form-dropdown">
          <Controller
            name="bodyPart"
            control={control}
            render={({ field }) => (
              <ReactSelect
                isClearable
                {...field}
                value={bodyPart}
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

          <label>Muscle Group</label>
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
                  { value: "serratus anterior", label: "Serratus Anterior" },
                  { value: "spine", label: "Spine" },
                  { value: "traps", label: "Traps" },
                  { value: "triceps", label: "Triceps" },
                  { value: "upper back", label: "Upper back" },
                  { value: "other", label: "other" },
                ]}
              />
            )}
          />
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          {...register("exersiseName", { required: true })}
          placeholder="Exersise Name"
          value={exersiseName}
        />
        {errors.exersiseName && <p>Exersise Name is required field</p>}
        <input
          {...register("duration")}
          placeholder="Duration / min"
          value={duration}
        />
        <input {...register("sets")} placeholder="Sets" value={sets} />
        <input {...register("reps")} placeholder="Reps" value={reps} />
        <input {...register("weight")} value={weight} placeholder="Weight" />

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
