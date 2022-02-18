/////////// day_exercisesRoutes.js
import express from "express";

const router = express.Router();

// DELETE: /exercises/1
// DELETE /day-exercises/1

export default function (db) {
  // Delete a single exercise
  //  '/:dayExerciseId
  router.patch("/:dayExerciseId", (req, res) => {
    const { dayExerciseId } = req.params;
    const query = ` 
    UPDATE day_exercises
    SET is_deleted = true
    WHERE day_exercises.id = $1
    `;

    db.query(query, [dayExerciseId])
      .then(() => res.send(200))
      .catch((error) => console.log(error.message));
  });

  // Delete all future instances exercise
  //  '/exercises/:exerciseId
  router.delete("/:exerciseId", (req, res) => {
    const { exerciseId } = req.params;
    
    const recurringQuery = ` 
    DELETE FROM recurring_exercises
    WHERE recurring_exercises.exercise_id = $1
    `;

    const dayExerciseQuery = ` 
    DELETE FROM day_exercises
    WHERE day_exercises.exercise_id = $1
    `;

    db.query(recurringQuery, [exerciseId])
      .then(() => {
        db.query(dayExerciseQuery, [exerciseId])
          .then(() => res.send(200));
      })
      .catch((error) => console.log(error.message));
  });

  // Edit exercise
  //  '/exercises/:exerciseId
  router.post("/:exerciseId", (req, res) => {
    const { exerciseId } = req.params;
    const data = req.body;
    
    const { exerciseName } = data;
    const weight = data.weight || null;
    const duration = data.duration || null;
    const sets = data.sets || null;
    const reps = data.reps || null;
    
    const exercisesQuery = `
    UPDATE exercises 
    SET name = $1, 
        weight = $2,
        duration = $3,
        sets = $4, 
        reps = $5
    WHERE id = $6
    `;

    db.query(exercisesQuery, [exerciseName, weight, duration, sets, reps, exerciseId])
      .then((data) => {
        console.log(data.rows[0]);
        res.send(200);
      })
      .catch((error) => console.log(error.message));
  });

  return router;
}