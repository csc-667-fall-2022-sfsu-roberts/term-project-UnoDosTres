const session = require("express-session");

const sessionInstance = session({
    secret: "abracadabra",
    cookie: { maxAge: 24 * 60 * 60},
    saveUninitialized: true,
});

module.exports = sessionInstance;