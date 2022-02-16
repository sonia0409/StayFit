"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/////////// usersRoutes.js
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function default_1(db) {
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
exports.default = default_1;
//# sourceMappingURL=usersRoutes.js.map