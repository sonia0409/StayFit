/////////// usersRoutes.js
import express from 'express';

const router = express.Router();

export default function(db) {
  // GET: '/users'
  router.get('/', (req, res) => {
    const command = `
    SELECT * FROM day_exercises 
    JOIN day_exercises on exercise_id = exercises.id 
    WHERE date = 'Mon Feb 14 2022' 
    AND user_id = '1'
    `;
    db.query(command)
      .then(data => {
        res.json(data.rows);
      });
  });

  return router;
}