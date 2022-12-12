const db = require("../index");
const SQL = require("./sql");

const all = (user_id) => {
    return Promise.all([
        db.any(SQL.ACTIVE_GAMES, { user_id }), 
        db.any(SQL.JOINABLE_GAMES, { user_id }),
    ]).then(([ active, joinable ]) => ({ active, joinable }));
};

module.exports = all;