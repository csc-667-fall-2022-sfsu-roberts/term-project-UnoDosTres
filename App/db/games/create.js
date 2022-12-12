const db = require("../index");

const CREATE_SQL = "INSERT INTO games (title) VALUES (${title}) RETURNING id";

const ADD_USER_SQL =
  "INSERT INTO game_users (game_id, user_id) VALUES (${game_id}, ${user_id}) RETURNING game_id";

const create = (user_id, title = "Game") => {
  return db
    .one(CREATE_SQL, { title })
    .then(({ id }) => db.one(ADD_USER_SQL, { game_id: id, user_id }));
};

module.exports = create;