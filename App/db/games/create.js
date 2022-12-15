const db = require("../index");
const SQL = require("./sql");

const create = (user_id, title = "Game") => {
  return db
    .one(SQL.CREATE_SQL, { title })
    .then(({ id }) => db.one(SQL.ADD_USER_SQL, { game_id: id, user_id }))
    .then(({ game_id }) =>
      Promise.all([db.many(SQL.GET_DECK),
        game_id
      ]))
    .then(([cards, game_id]) => Promise.all([
      game_id,
      ... cards.map(({ id }) => db.none(SQL.INITIALIZE_CARD, { game_id, card_id: id }))
    ]))
    .then(([ game_id ]) => ({ game_id }));
};

module.exports = create;