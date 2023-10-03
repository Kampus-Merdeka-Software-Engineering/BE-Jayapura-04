const express = require('express');
const router = express.Router();
const controller = require("./controller/user");

router.get('/register', controller.login);
router.post('/login', controller.signup);

module.exports = router;
