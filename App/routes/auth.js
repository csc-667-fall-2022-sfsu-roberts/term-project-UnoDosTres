const express = require("express");
const Users = require("../db/users");

const router = express.Router();

router.get("/login", (request, response) => {
    response.render("login");
});

router.post("/login", (request, response) => {
    const { username, password } = request.body;
    console.log({ username, password });

    request.session.authenticated = true;
    request.session.username = username;

    response.redirect("/lobby");
});

router.get("/register", (request, response) => {
    response.render("/register");
});

router.post("/register", (request, response) => {
    const { username, password } = request.body;

    Users.register({ username, password })
        .then(({ id, username }) => {
            request.session.authenticated = true;
            request.session.userId = id;
            request.session.username = username;

            response.redirect("/lobby");
        })
        .catch((error) => {
            console.log({ error });
            response.redirect("/register");
        });
});

module.exports = router;