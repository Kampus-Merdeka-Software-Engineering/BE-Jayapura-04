const express = require('express');
const router = express.Router();
const controller = require("./controller/kategori");
const controller = require("./controller/user");

router.get('/kategori', controller.kategori);
router.get('/signup', controller.login);
router.post('/login', controller.signup);

module.exports = router;