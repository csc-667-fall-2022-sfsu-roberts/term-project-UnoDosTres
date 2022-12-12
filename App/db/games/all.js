const db = require("../index");

const ACTIVE_GAMES = 
    "SELECT id, title FROM games LEFT JOIN game_users ON games.id = game_users.game_id WHERE game_users.user_id=${user_id}";

const JOINABLE_GAMES = 
    "SELECT * FROM games WHERE id NOT IN (" +
    "SELECT id FROM games LEFT JOIN game_users ON games.id = game_users.game_id WHERE game_users.user_id=${user_id}" +
    ")";

const all = (user_id) => {
    return Promise.all([
        db.any(ACTIVE_GAMES, { user_id }), 
        db.any(JOINABLE_GAMES, { user_id }),
    ]).then(([ active, joinable ]) => ({ active, joinable }));
};

module.exports = all;