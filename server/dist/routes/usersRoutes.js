"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/////////// catsRoutes.js
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
function default_1(db) {
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
exports.default = default_1;
//# sourceMappingURL=usersRoutes.js.map