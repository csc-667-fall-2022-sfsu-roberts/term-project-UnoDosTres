const express = require("express");
const router = express.Router();

const Games = require("../../db/games");

router.post("/create", (request, response) => {
    const { userId } = request.session;
    const { title } = request.body;
    
    Games.create(userId, title).then(({ game_id }) => {
        response.redirect(`/authenticated/games/${game_id}`);
    }).catch((error) => {
        console.log(error);
        response.status(500).send();
    });
});

router.post("/:id/join", (request, response) => {
    const { game_id } = request.params;
    const { userId } = request.session;

    Games.join(game_id, userId)
        .then(() => {
            response.redirect(`/authenticated/games/${game_id}`);
    })
    .catch((error) => {
        console.log(error);
        response.status(500).send();
    });
})

router.get("/:id", (request, response) => {
    const { id } = request.params;

    response.render("protected/game", { id });
});

module.exports = router;