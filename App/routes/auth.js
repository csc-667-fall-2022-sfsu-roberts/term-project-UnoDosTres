const express = require("express");
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
    response.render("register");
});

router.post("/register", (request, response) => {
    const { username, password } = request.body;
    console.log({ username, password });

    request.session.authenticated = true;
    request.session.username = username;
    
    response.redirect("/lobby");
});

module.exports = router;