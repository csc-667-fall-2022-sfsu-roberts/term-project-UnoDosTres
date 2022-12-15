const CREATE_SQL = "INSERT INTO games (title) VALUES (${title}) RETURNING id";

const ADD_USER_SQL =
  "INSERT INTO game_users (game_id, user_id) VALUES (${game_id}, ${user_id}) RETURNING game_id";

const CHECK_ACTIVE_GAMES = "SELECT * FROM game_users WHERE game_id=${game_id} AND user_id=${user_id}";

const ACTIVE_GAMES = 
    "SELECT id, title FROM games LEFT JOIN game_users ON games.id = game_users.game_id WHERE game_users.user_id=${user_id}";

const JOINABLE_GAMES = 
    "SELECT * FROM games WHERE id NOT IN (" +
    "SELECT id FROM games LEFT JOIN game_users ON games.id = game_users.game_id WHERE game_users.user_id=${user_id}" +
    ")";

module.exports = {
    CREATE_SQL,
    ADD_USER_SQL,
    CHECK_ACTIVE_GAMES,
    ACTIVE_GAMES,
    JOINABLE_GAMES
}