const session = require("express-session");

const sessionInstance = session({
    secret: "abracadabra",
    cookie: { maxAge: 24 * 60 * 60},
    resave: true,
    saveUninitialized: false,
});

module.exports = sessionInstance;