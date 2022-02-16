import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Checkbox } from "@mui/material";

import "./AddForm.css";

const AddForm = (props) => {
  const { date = "Mon Feb 14 2022" } = props;
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
      {/* "handleSubmit" will validate your inputs  */}
      <form
        action="/day-exercises/:userid/:date/new"
        method="POST"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="form-name">
          <h1>Add Workout</h1>
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
        />
        {errors.exersiseName && <p>Exersise Name is required field</p>}
        <input {...register("duration")} placeholder="Duration / min" />
        <input {...register("sets")} placeholder="Sets" />
        <input {...register("reps")} placeholder="Reps" />
        <input {...register("weight")} placeholder="Weight" />
        <input
          {...register("date")}
          placeholder="Date"
          type="hidden"
          value={date}
        />

        <label>Recurring :</label>
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
        <input type="submit" />
      </form>
    </main>
  );
};
export default AddForm;
