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
    /*  router.get("/:userid/:date", (req, res) => {
      // console.log(req.params);
      const { date, userid } = req.params;
      const command = `
      SELECT * FROM day_exercises
      JOIN users ON user_id = users.id
      JOIN exercises on exercise_id = exercises.id
      WHERE date = $1
      AND user_id = $2
      ORDER BY name
      `;
      db.query(command, [date, userid])
        .then((data) => {
          res.json(data.rows);
        })
        .catch((error) => res.status(500).send(error.message));
    }); */
    //GET REQUEST BASED ON THE RECURRING DAYS
    router.get("/:userid/:date", (req, res) => {
        console.log(req.params);
        const { date, userid } = req.params;
        const day = date.split(" ")[0];
        console.log("<========day=====>", day);
        const recurring_days = {
            Mon: "recurring_monday",
            Tue: "recurring_tuesday",
            Wed: "recurring_wednesday",
            Thu: "recurring_thursday",
            Fri: "recurring_friday",
            Sat: "recurring_saturday",
            Sun: "recurring_sunday",
        };
        const currentDay = recurring_days[day];
        const command = `
    SELECT * FROM exercises 
    JOIN day_exercises on day_exercises.exercise_id = exercises.id 
    WHERE 
    (date = $1 AND user_id = $2) 
    OR
    (${currentDay} = TRUE AND user_id = $2)
    ORDER BY exercises.id
    `;
        console.log(date, userid, currentDay);
        db.query(command, [date, userid])
            .then((data) => {
            res.json(data.rows);
        })
            .catch((error) => res.status(500).send(error.message));
    });
    // POST: '/day-exercises/:userid/:date'
    //  date => 'Mon Feb 14 2022'
    //update the is_complete status
    router.patch("/:id", (req, res) => {
        const { id } = req.params;
        const query = ` UPDATE day_exercises
    SET is_completed = NOT is_completed
    WHERE day_exercises.id = $1
    `;
        db.query(query, [id])
            .then(() => res.send(200))
            .catch((error) => console.log(error.message));
    });
    //Add the day_exercises_list
    router.post("/:userid/:date/new", (req, res) => {
        // console.log("form values recieved", req.body);
        const { date, userid } = req.params;
        console.log(date, userid);
        const { exerciseName, weight, duration, sets, reps, Mo = false, Tu = false, We = false, Th = false, Fr = false, Sa = false, Su = false, } = req.body;
        console.log("+++++", exerciseName);
        const muscleGroup = req.body.muscleGroup.value;
        const bodyPart = req.body.bodyPart.value;
        const exercisesArray = [
            exerciseName,
            muscleGroup,
            bodyPart,
            weight,
            duration,
            sets,
            reps,
        ];
        const exercisesQuery = `
    INSERT INTO exercises (name, muscleGroup, bodyPart, weight, duration, sets, reps) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
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
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `;
        db.query(exercisesQuery, exercisesArray)
            .then((results) => {
            console.log("----------------", results);
            const exercise_id = results.rows[0].id;
            const recurringArray = [
                Number(userid),
                exercise_id,
                date,
                Mo,
                Tu,
                We,
                Th,
                Fr,
                Sa,
                Su,
            ];
            console.log("recurring array====>", recurringArray);
            return db.query(recurringQuery, recurringArray);
        })
            .then((data) => {
            console.log("<========New data=====>", data);
            res.status(200).send("successfully submitted!");
        })
            .catch((error) => {
            console.log(error.message);
            res.status(500).send(error.message);
        });
    });
    //edit the form values
    router.put("/:exercise_id", (req, res) => {
        const { exercise_id } = req.params;
        console.log("edited form values recieved", req.body);
        const { name, weight, duration, sets, reps, Mo = false, Tu = false, We = false, Th = false, Fr = false, Sa = false, Su = false, } = req.body;
        const exercisesArray = [name, weight, duration, sets, reps, exercise_id];
        const exercisesQuery = `
    UPDATE exercises 
    SET name = $1, 
        weight = $2,
        duration = $3,
        sets = $4, 
        reps = $5

        WHERE exercises.id = $6
    `;
        const recurringQuery = `
    UPDATE day_exercises 
    SET 
      recurring_monday = $1,
      recurring_tuesday = $2,
      recurring_wednesday = $3,
      recurring_thursday = $4,
      recurring_friday = $5,
      recurring_saturday = $6,
      recurring_sunday = $7

      WHERE exercise_id = $8
    `;
        db.query(exercisesQuery, exercisesArray)
            .then((results) => {
            const recurringArray = [Mo, Tu, We, Th, Fr, Sa, Su, exercise_id];
            return db.query(recurringQuery, recurringArray);
        })
            .then((data) => {
            console.log(data);
            res.status(200).send("successfully submitted!");
        })
            .catch((error) => {
            console.log(error);
            res.status(500).send(error.message);
        });
    });
    //delete the schedule
    router.delete("/:id", (req, res) => {
        const { id } = req.params;
        const query = `
    DELETE FROM day_exercises WHERE day_exercises.id = $1
    RETURNING *
    `;
        db.query(query, [id])
            .then((data) => {
            console.log(data.rows[0]);
            res.status(200).send(`row ${id} sucessfully deleted`);
        })
            .catch((error) => res.send(500).send(error.message));
    });
    return router;
}
exports.default = default_1;
//# sourceMappingURL=dayExercises.js.map