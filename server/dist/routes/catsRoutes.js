/////////// catsRoutes.js
const router = require('express').Router();
module.exports = (db) => {
    // all routes will go here 
    router.get('/', (req, res) => {
        const command = "SELECT * FROM urls";
        db.query(command)
            .then(data => {
            res.json(data.rows);
        });
    });
    return router;
};
//# sourceMappingURL=catsRoutes.js.map