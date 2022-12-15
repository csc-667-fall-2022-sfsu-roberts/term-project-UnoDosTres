var express = require('express');
var router = express.Router();

const Games = require("../../db/games");

router.get('/', (request, response) => {
    const { userId } = request.session;

        Games.all(userId).then((games) => 
            response.render("protected/lobby", { games })
        ).catch(error => {
            console.log(error);
            response.status(500).send();
        })

    ;
});

module.exports = router;