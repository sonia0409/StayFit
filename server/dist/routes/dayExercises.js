"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function default_1(db) {
    //GET REQUEST BASED ON THE RECURRING DAYS
    // router.get("/:userid/:date", (req, res) => {
    //   console.log(req.params);
    //   const { date, userid } = req.params;
    //   const day = date.split(" ")[0];
    //   console.log("<========day=====>",day);
    //   const recurring_days = {
    //     Mon: "recurring_monday",
    //     Tue: "recurring_tuesday",
    //     Wed: "recurring_wednesday",
    //     Thu: "recurring_thursday",
    //     Fri: "recurring_friday",
    //     Sat: "recurring_saturday",
    //     Sun: "recurring_sunday",
    //   };
    //   const currentDay = recurring_days[day];
    //   const command = `
    //   SELECT * FROM exercises 
    //   JOIN day_exercises on day_exercises.exercise_id = exercises.id 
    //   WHERE 
    //   (date = $1 AND user_id = $2) 
    //   OR
    //   (${currentDay} = TRUE AND user_id = $2)
    //   ORDER BY exercises.id
    //   `;
    //   console.log(date, userid, currentDay)
    //   db.query(command, [date, userid])
    //     .then((data) => {
    //       res.json(data.rows);
    //     })
    //     .catch((error) => res.status(500).send(error.message));
    // });
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
    // router.post("/:userid/:date/new", (req, res) => {
    //   // console.log("form values recieved", req.body);
    //   const { date, userid } = req.params;
    //   console.log(date, userid)
    //   const {
    //     exerciseName,
    //     weight,
    //     duration,
    //     sets,
    //     reps,
    //     Mo = false,
    //     Tu = false,
    //     We = false,
    //     Th = false,
    //     Fr = false,
    //     Sa = false,
    //     Su = false,
    //   } = req.body;
    //   console.log('+++++', exerciseName)
    //   const muscleGroup = req.body.muscleGroup.value;
    //   const bodyPart = req.body.bodyPart.value;
    //   const exercisesArray = [
    //     exerciseName,
    //     muscleGroup,
    //     bodyPart,
    //     weight,
    //     duration,
    //     sets,
    //     reps,
    //   ];
    //   const exercisesQuery = `
    //   INSERT INTO exercises (name, muscleGroup, bodyPart, weight, duration, sets, reps) 
    //   VALUES ($1, $2, $3, $4, $5, $6, $7)
    //   RETURNING id
    //   `;
    //   const recurringQuery = `
    //   INSERT INTO day_exercises(
    //     user_id,
    //     exercise_id,
    //     date,
    //     recurring_monday,
    //     recurring_tuesday,
    //     recurring_wednesday,
    //     recurring_thursday,
    //     recurring_friday,
    //     recurring_saturday,
    //     recurring_sunday
    //     ) 
    //   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    //   `;
    //   db.query(exercisesQuery, exercisesArray)
    //     .then((results) => {
    //       console.log('----------------',results)
    //       const exercise_id = results.rows[0].id;
    //       const recurringArray = [
    //         Number(userid),
    //         exercise_id,
    //         date,
    //         Mo,
    //         Tu,
    //         We,
    //         Th,
    //         Fr,
    //         Sa,
    //         Su
    //       ];
    //       console.log("recurring array====>", recurringArray);
    //       return db.query(recurringQuery, recurringArray);
    //     })
    //     .then((data) => {
    //       console.log("<========New data=====>", data);
    //       res.status(200).send("successfully submitted!");
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //       res.status(500).send(error.message);
    //     });
    // });
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
            const recurringArray = [
                Mo,
                Tu,
                We,
                Th,
                Fr,
                Sa,
                Su,
                exercise_id
            ];
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
    // NEWWWWWWWWWW
    //Add the day_exercises_list
    router.post("/:userid/:date/new2", (req, res) => {
        // Get data from url params
        const { date, userid } = req.params;
        // Get data from request body
        const data = req.body;
        const { exerciseName, muscleGroup = data.muscleGroup.value, bodyPart = data.bodyPart.value, weight, duration, sets, reps, recurring_monday, recurring_tuesday, recurring_wednesday, recurring_thursday, recurring_friday, recurring_saturday, recurring_sunday } = req.body;
        const isRecurring = (recurring_monday || recurring_tuesday || recurring_wednesday || recurring_thursday || recurring_friday || recurring_saturday || recurring_sunday);
        // Create queries to be used
        const exercisesQuery = `
    INSERT INTO exercises (name, muscleGroup, bodyPart, weight, duration, sets, reps) 
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
    `;
        const dayExercisesQuery = `
    INSERT INTO day_exercises (user_id, exercise_id, is_completed, date) 
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
        const recurringQuery = `
    INSERT INTO recurring_exercises(
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
    RETURNING *
    `;
        // Exercises query inputs
        const exercisesArray = [
            exerciseName,
            muscleGroup,
            bodyPart,
            weight,
            duration,
            sets,
            reps,
        ];
        // Add new exercise item
        db.query(exercisesQuery, exercisesArray)
            .then((results) => __awaiter(this, void 0, void 0, function* () {
            const exerciseId = results.rows[0].id;
            console.log('-----new exercise item added', exerciseId);
            // 2 cases after adding new exercise item:
            //  1: isRecurring is false => only add new day_exercise item
            //  2: isRecurring is true => create new recurring_exercise item
            // Create query inputs:
            const dayExercisesArray = [
                Number(userid),
                exerciseId,
                false,
                date
            ];
            const recurringArray = [
                Number(userid),
                exerciseId,
                date,
                recurring_monday,
                recurring_tuesday,
                recurring_wednesday,
                recurring_thursday,
                recurring_friday,
                recurring_saturday,
                recurring_sunday
            ];
            // CASE 1: NOT RECURRING
            if (!isRecurring) {
                yield db.query(dayExercisesQuery, dayExercisesArray)
                    .then(data => {
                    console.log('-----not recurring => new day_exercise item added', data.rows[0].id);
                })
                    .catch((error) => {
                    console.log(error.message);
                    res.status(500).send(error.message);
                });
                return res.status(200).send("successfully submitted!");
            }
            // CASE 2: RECURRING
            yield db.query(recurringQuery, recurringArray)
                .then(data => {
                console.log('-----recurring => new recurring_exercise item added', data.rows[0].id);
                return res.status(200).send("successfully submitted!");
            })
                .catch((error) => {
                console.log(error.message);
                res.status(500).send(error.message);
            });
        }))
            .catch((error) => {
            console.log(error.message);
            res.status(500).send(error.message);
        });
    });
    // GET: '/day-exercises/:userid/:date'
    //  Get day_exercises for user for the selected date
    //  date => 'Mon Feb 14 2022'
    router.get("/:userid/:date", (req, res) => {
        // Get data from url params
        const { date, userid } = req.params;
        // Setup date formats for comparisons
        const todayDate = new Date();
        todayDate.setHours(0, 0, 0, 0);
        const selectedDate = new Date(date);
        // Get recurring day
        const dayList = [
            "recurring_sunday",
            "recurring_monday",
            "recurring_tuesday",
            "recurring_wednesday",
            "recurring_thursday",
            "recurring_friday",
            "recurring_saturday"
        ];
        const recurringDay = dayList[selectedDate.getDay()];
        // Cases for selecting data:
        //  ------
        //  Case 1: Selected date is in the past => Query day_exercises for all
        //            exercises for the user and the selected date.
        //  ------
        //  Case 2: 1. Selected date is today or future => check recurring_exercises
        //              for all rows with selected DAY as true for user.
        //          2. Loop through exerciseIds found and look for the ids in
        //              day_exercises table.
        //              -> if present, skip.
        //              -> if not present, create instance in day_exercises with
        //                 the selected date.
        //          3. Query day_exercises for all exercises for the user and
        //              the selected date.
        //  -----
        // Create queries to be used
        // -----
        const dayExercisesQuery = `
    SELECT *, day_exercises.date AS date, day_exercises.id as day_exercise_id FROM day_exercises
    JOIN exercises ON day_exercises.exercise_id = exercises.id
    JOIN recurring_exercises ON recurring_exercises.exercise_id = exercises.id
    WHERE day_exercises.user_id = $1
    AND day_exercises.date = $2
    `;
        const recurringExercisesQuery = `
    SELECT recurring_exercises.exercise_id FROM recurring_exercises
    WHERE recurring_exercises.user_id = $1
    AND ${recurringDay} = TRUE
    `;
        const exerciseInDayExerciseQuery = `
    SELECT day_exercises.exercise_id FROM day_exercises
    WHERE user_id = $1
    AND date = $2
    `;
        const addDayExerciseItemQuery = `
    INSERT INTO day_exercises (user_id, exercise_id, is_completed, date) 
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
        // -----
        // Query inputs
        // -----
        const dayExercisesArray = [userid, date];
        const recurringExercisesArray = [userid];
        // -----
        const renderExercises = () => {
            db.query(dayExercisesQuery, dayExercisesArray)
                .then(result => res.json(result.rows))
                .catch(error => res.status(500).send(error.message));
        };
        // CASE 1:
        if (todayDate > selectedDate) {
            renderExercises();
        }
        else {
            // CASE 2:
            db.query(recurringExercisesQuery, recurringExercisesArray)
                .then(result => {
                const recurringExerciseIds = result.rows.map(a => a.exercise_id);
                return recurringExerciseIds;
            })
                .then((recurringExerciseIds) => __awaiter(this, void 0, void 0, function* () {
                yield db.query(exerciseInDayExerciseQuery, [userid, date])
                    .then((result) => __awaiter(this, void 0, void 0, function* () {
                    const existingExerciesIds = result.rows.map(a => a.exercise_id);
                    const idsToAdd = recurringExerciseIds.filter(id => !existingExerciesIds.includes(id));
                    // Loop through idsToAdd and create day_exercise items
                    for (const id of idsToAdd) {
                        const queryInputs = [userid, id, false, date];
                        yield db.query(addDayExerciseItemQuery, queryInputs);
                    }
                }));
            }))
                .then(() => renderExercises())
                .catch((error) => res.status(500).send(error.message));
            return;
        }
    });
    return router;
}
exports.default = default_1;
//# sourceMappingURL=dayExercises.js.map