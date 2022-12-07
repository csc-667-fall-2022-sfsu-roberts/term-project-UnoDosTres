const bcrypt = require("bcrypt");
const db = require("./index");

const LOOKUP_USER = "SELECT * FROM users WHERE email=${username}";

const REGISTER_USER = "INSERT INTO users (email, password) VALUES (${username}, ${password}) RETURNING id, email";

const FIND_USER = "SELECT * FROM users WHERE email=${username} AND password=${password}";

const login = ({ username, password }) => {
    return db
        .one(LOOKUP_USER, { username })
        .then(({ id, email, password: hash }) =>
            Promise.all([bcrypt.compare(password, hash), { id, email }]))
        .then(([result, { id, email }]) => {
            if (result) {
                return { id, email };
            } else {
                return Promise.reject("Please enter a valid email and password.")
            }
        })
};

const register = ({ username, password }) => {
    return db
        .none(LOOKUP_USER, { username })
        .then(() => bcrypt.hash(password, 10))
        .then((hash) => db.one(REGISTER_USER, { username, password: hash }));
};

module.exports = { login, register };