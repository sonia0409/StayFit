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
    router.post('/:userid/:date', (req, res) => {
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
            .then(data => {
            res.json(data.rows);
        });
    });
    return router;
}
exports.default = default_1;
//# sourceMappingURL=dayExercises.js.map