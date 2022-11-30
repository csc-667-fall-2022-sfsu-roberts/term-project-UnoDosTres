const express = require("express");
const router = express.Router();

router.post("/:id", (request, response) => {
    const { id } = request.params;
    const { username } = request.session;
    const { message } = request.body;
    const timestamp = Date.now();

    request.app.io.emit(`chat:${id}`, { username, message, timestamp });


    response.sendStatus(200);
});

module.exports = router;