// REACT useForm HOOK
import { React, useState } from "react";
import { useForm } from "react-hook-form";
import "./AddFormHook.css";
import  {FormControlLabel,
FormControl,
FormLabel,
RadioGroup,
Radio,
Slider}
"@mui/material";

export default function AddFormHook() {
  // const [day, setDay] = useState();

  const {
    register, //cb ,register individual inputs into the hook
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const handleSliderChange = (name) => (e, value) => {
  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  return (
    <main>
      {/* "handleSubmit" will validate your inputs  */}
      <form
        onSubmit={handleSubmit((data) => {
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
        <input {...register("duration")} placeholder="Duration in min" />
        <input {...register("sets")} placeholder="Sets" />
        <input {...register("reps")} placeholder="Reps" />
        <input {...register("weight")} placeholder="Weight" />

        <input type="submit" />
      </form>

      {/* A component is changing the uncontrolled value state of RadioGroup to be controlled. */}
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name="day"
          value={day}
          onChange={(event) => {
            setDay(event.target.value);
          }}
          row
        >
          <FormControlLabel
            key="Mon"
            value="Mon"
            control={<Radio size="small" />}
            label="Mon"
          />
          <FormControlLabel
            key="Tue"
            value="female"
            control={<Radio size="small" />}
            label="Female"
          />
          <FormControlLabel
            key="Thu"
            value="other"
            control={<Radio size="small" />}
            label="Other"
          />
        </RadioGroup>
      </FormControl>

      {/* <div style={{ width: "400px" }}>
      Favorite Number
      <Slider
        value={formValues.favoriteNumber}
        onChange={handleSliderChange("favoriteNumber")}
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
        valueLabelDisplay="off"
      />
      </div> */}
    </main>
  );
}
