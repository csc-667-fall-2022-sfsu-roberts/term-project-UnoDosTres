const express = require("express");
const Users = require("../db/users");

const router = express.Router();

router.get("/login", (request, response) => {
    response.render("public/login", {
        username: request.session.username,
    });
});

router.post("/login", (request, response) => {
    const { username, password } = request.body;
    console.log({ username, password });

    Users.login({ username, password })
        .then(({ email, id }) => {
            request.session.authenticated = true;
            request.session.username = email;
            request.session.userId = id;

            response.redirect("/authenticated/lobby");
        })
        .catch((_error) => response.redirect("/public/login"));
});

router.get("/register", (request, response) => {
    response.render("public/register");
});

router.post("/register", (request, response) => {
    const { username, password } = request.body;

    Users.register({ username, password })
        .then(({ id, username }) => {
            request.session.authenticated = true;
            request.session.username = username;
            request.session.userId = id;

            response.redirect("/lobby");
        })
        .catch((_error) => response.redirect("/auth/register"));
});

router.get("/logout", (request, response) => {
    request.session.destroy((error) => {
        response.redirect("/");
    });
});

module.exports = router;