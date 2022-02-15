"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/////////// day_exercisesRoutes.js
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function default_1(db) {
    // GET: '/day-exercises/:userid/:date'
    //  date => 'Mon Feb 14 2022'
    router.get('/:userid/:date', (req, res) => {
        // console.log(req.params);
        const { date, userid } = req.params;
        const command = `
    SELECT * FROM day_exercises 
    JOIN users ON user_id = users.id
    JOIN exercises on exercise_id = exercises.id 
    WHERE date = $1 
    AND user_id = $2
    `;
        db.query(command, [date, userid])
            .then((data) => {
                res.json(data.rows);
            });
    });
    // POST: '/day-exercises/:userid/:date'
    //  date => 'Mon Feb 14 2022'
    //Insert and update the day_exercises_list
    router.put('/:userid/:date/new', (req, res) => {
        const { name, muscleGroup, bodyPart, weight, duration, sets, reps, userid, exercise_id, date, mo, tu, we, th, fr, sa, su } = req.body;
        const exercisesArray = [name, muscleGroup, bodyPart, weight, duration, sets, reps];
        const recurringArray = [userid, exercise_id, date, mo, tu, we, th, fr, sa, su];
        const exercisesQuery =
            `
        INSERT INTO exercises (name, muscleGroup, bodyPart, weight, duration, sets, reps) 
        VALUES ($1::text, $2::text, $3::text, $4::integer, $5::integer, $6::integer, $7::integer)
      `;
        const recurringQuery = `
    INSERT INTO day_exercises(
      user_id,
      exercise_id,
      date,
      recurring_monday,
      recurring_tuesday,
      recurring_wednesday,
      recurring_thursday,
      recurring_friday,
      recurring_saturday,
      recurring_sunday
    ) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    ON CONFLICT (exercise_id) DO
    UPDATE SET 
    user_id,      
    date,
    recurring_monday,
    recurring_tuesday,
    recurring_wednesday,
    recurring_thursday,
    recurring_friday,
    recurring_saturday,
    recurring_sunday
    `;
        db.query(exercisesQuery, exercisesArray)
            .then(db.query(recurringQuery, recurringArray))
            .then(data => {
                console.log(data);
                res.status(200);
            })
            .catch(error => console.log(error));
    });
    return router;
}
exports.default = default_1;
//# sourceMappingURL=dayExercises.js.map