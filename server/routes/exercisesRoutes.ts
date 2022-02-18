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

  return router;
}