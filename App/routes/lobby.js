var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
    const {sessionID } = request;
    const { username } = request.session;
    
    console.log({ username });

    response.render("lobby", { username, sessionID });
});

module.exports = router;