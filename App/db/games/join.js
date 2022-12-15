const db = require("../index");
const SQL = require("./sql");

const join = (game_id, userId) => {
    return db
        .none(SQL.CHECK_ACTIVE_GAMES, {game_id, userId})
        .then(() => db.one(SQL.ADD_USER_SQL, { game_id, userId }));
};

module.exports = join;