const express = require("express");
const router = express.Router();

router.post("/:id", (request, response) => {
    const d = Date(Date.now());
    formattedDate = d.toString();

    const { id } = request.params;
    const { username } = request.session;    
    const { message } = request.body;    
    const timestamp = (" " + formattedDate);

    request.app.io.emit(`chat:${id}`, { username, message, timestamp });

    console.log({ username });
    console.log({ message });
    console.log({ timestamp });
    response.sendStatus(200);
});

module.exports = router;