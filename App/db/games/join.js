const db = require("../index");
const SQL = require("./sql");

const join = (game_id, user_id) => {
    return db
        .none(SQL.CHECK_ACTIVE_GAMES, {game_id, user_id})
        .then(() => db.one(SQL.ADD_USER_SQL, { game_id: id, user_id }));
};

module.exports = join;