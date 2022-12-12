const express = require("express");
const router = express.Router();

const Games = require("../../db/games");

router.post("/create", (request, response) => {
    const { user_id } = request.session;
    const { title } = request.body;
    
    Games.create(user_id, title).then(({ game_id }) => {
        response.redirect(`/games/${game_id}`);
    }).catch((error) => {
        console.log(error);
        response.status(500).send();
    });
});

router.post("/:id/join", (request, response) => {
    const { id: game_id } = request.params;
    const { user_id } = request.session;

    Games.join(game_id, user_id)
        .then(() => {
            response.redirect(`/games/${game_id}`);
    })
    .catch((error) => {
        console.log(error);
        response.status(500).send();
    });
})

router.get("/:id", (request, response) => {
    const { id } = request.params;

    response.render("authenticated/games", { id });
});

module.exports = router;