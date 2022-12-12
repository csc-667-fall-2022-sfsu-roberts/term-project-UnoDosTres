var express = require('express');
var router = express.Router();

const Games = require("../../db/games");

router.get('/', (request, response) => {
    const { user_id } = request.session;

        Games.all(user_id).then((games) => 
            response.render("protected/lobby", { games })
        ).catch(error => {
            console.log(error);
            response.status(500).send();
        })

    ;
});

module.exports = router;