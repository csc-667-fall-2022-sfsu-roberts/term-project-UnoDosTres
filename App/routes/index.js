var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (request, response) => {
  const {sessionID } = request;
  const { username } = request.session;
  console.log({ username });

  response.render('public/index', { username, sessionID });
});

module.exports = router;
