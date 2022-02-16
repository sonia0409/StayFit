"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  ---------------------------- server/app.js
// declarations
require("dotenv/config");
const { ENVIRONMENT, PORT } = process.env;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
// db connection
const db_config_1 = __importDefault(require("../configs/db.config"));
// routes import
const usersRoutes_1 = __importDefault(require("../routes/usersRoutes"));
const dayExercises_1 = __importDefault(require("../routes/dayExercises"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// middleware setup
app.use((0, morgan_1.default)(ENVIRONMENT));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/users', (0, usersRoutes_1.default)(db_config_1.default));
app.use('/day-exercises', (0, dayExercises_1.default)(db_config_1.default));
app.get('/', (req, res) => {
    res.json({ greetings: 'hello world' });
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
//# sourceMappingURL=app.js.map