var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
    const {sessionID } = request;
    const { username, userId } = request.session;
    
    console.log({ username });

    response.render("lobby", { username, userId });
});

module.exports = router;