// REACT useForm HOOK
import React from "react";
import { useForm } from "react-hook-form";
import "./AddFormHook.css";

export default function AddFormHook() {
  const {
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
    </main>
  );
}
