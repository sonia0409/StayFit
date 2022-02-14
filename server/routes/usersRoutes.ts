/////////// catsRoutes.js
import express from 'express';

const router = express.Router();

export default function(db) {
  // all routes will go here
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      });
  });
  
  return router;
}