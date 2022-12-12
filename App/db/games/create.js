const db = require("../index");
const SQL = require("./sql");

const create = (user_id, title = "Game") => {
  return db
    .one(SQL.CREATE_SQL, { title })
    .then(({ id }) => db.one(SQL.ADD_USER_SQL, { game_id: id, user_id }));
};

module.exports = create;