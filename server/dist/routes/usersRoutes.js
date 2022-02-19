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
    router.get('/:email', (req, res) => {
        console.log(req.params.email);
        const query = `
    SELECT * FROM users
    where email = $1
    `;
        db.query(query, [req.params.email])
            .then(data => {
            res.json(data.rows);
        });
    });
    // POST: '/users/'
    router.post('/', (req, res) => {
        const data = req.body;
        const query = `
    INSERT INTO users 
    (firstName, lastName, email, password) 
    VALUES 
    ($1, $2, $3, $4);
    `;
        const queryInputs = [data.firstName, data.lastName, data.email, data.password];
        db.query(query, queryInputs)
            .then(() => console.log('NEW USERR ADDED TO DATABASE'))
            .then(() => res.send(200))
            .catch(error => console.log(error.message));
    });
    return router;
}
exports.default = default_1;
//# sourceMappingURL=usersRoutes.js.map