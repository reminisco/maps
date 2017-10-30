var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // res.send('respond with a resource');

    // And insert something like this instead:
    res.json([{
        id: 1,
        username: "Mole"
    }, {
        id: 2,
        username: "Diddle"
    }]);
});

module.exports = router;
