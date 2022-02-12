/////////// catsRoutes.js
import { Router, Request, response, NextFunction } from 'express';
const router = Router()

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req: Request, res: Response) => {
    const command = "SELECT * FROM users";
    db.query(command)
      .then(data => {
        res.json(data.rows);
      })
  });
  
  return router;
}