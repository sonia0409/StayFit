// REACT useForm HOOK with Slider
import { React, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import "./AddFormHook.css";
import { Checkbox, Slider } from "@mui/material";

export default function AddFormHook() {
  const [duration, setDuration] = useState(0);

  const {
    control,
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleSliderChange(e) {
    setDuration(e.target.value);
    console.log(e.target.value);
  }

  return (
    <main>
      {/* "handleSubmit" will validate your inputs  */}
      <form
        onSubmit={handleSubmit((data) => {
          data.slider = duration;
          console.log(data);
        })}
      >
        <div className="formName">
          <h1>Add Workout</h1>
        </div>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register("bodyPart")} placeholder="Body Part" />
        <input
          {...register("exersiseName", { required: true })}
          placeholder="Exersise Name"
        />
        {errors.exersiseName && <p>Exersise Name is required field</p>}
        <input {...register("sets")} placeholder="Sets" />
        <input {...register("reps")} placeholder="Reps" />
        <input {...register("weight")} placeholder="Weight" />
        <div className="checkboxes">
          <Controller
            name="MO"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <Controller
            name="TO"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
          <Controller
            name="We"
            control={control}
            render={({ field }) => <Checkbox {...field} />}
          />
        </div>

        <Controller
          name="Slider"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              defaultValue={1}
              step={1}
              min={1}
              max={3}
              marks={[
                {
                  value: 1,
                  label: "1",
                },
                {
                  value: 2,
                  label: "2",
                },
                {
                  value: 3,
                  label: "3",
                },
              ]}
              value={duration}
              onChange={handleSliderChange}
            />
          )}
        />
        <input type="submit" />
      </form>
    </main>
  );
}
