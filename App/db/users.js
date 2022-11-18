const db = require("./index");

const REGISTER_USER = "INSERT INTO users (username, password) VALUES (${username}, ${password}) RETURNING id, username"


const register = ({ username, password }) => {
    return db.one(REGISTER_USER, { username, password });
}

module.exports = { register };