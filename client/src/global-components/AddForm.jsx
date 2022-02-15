// without Slider
import React from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
// import { Input as AntdInput } from "antd";
import { Checkbox } from "@mui/material";

import "./AddForm.css";

const AddForm = () => {
  const {
    control,
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <main>
      {/* "handleSubmit" will validate your inputs  */}
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="form-name">
          <h1>Add Workout</h1>
        </div>
        {/* REACT SELECT */}
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
                  { value: "chest", label: "chest" },
                  { value: "lower arms", label: "lower arms" },
                  { value: "lower legs", label: "lower legs" },
                  { value: "neck", label: "neck" },
                  { value: "shoulders", label: "shoulders" },
                  { value: "upper arms", label: "upper arms" },
                  { value: "upper legs", label: "upper legs" },
                  { value: "waist", label: "waist" },
                  { value: "back", label: "back" },
                  { value: "cardio", label: "cardio" },
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
            name="Sat"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <label> Su </label>
          <Controller
            name="Sun"
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

// 0:"back"
// 1:"cardio"
// 2:"chest"
// 3:"lower arms"
// 4:"lower legs"
// 5:"neck"
// 6:"shoulders"
// 7:"upper arms"
// 8:"upper legs"
// 9:"waist"
