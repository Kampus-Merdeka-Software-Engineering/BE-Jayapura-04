const express = require('express');
const router = express.Router();
const controller = require("./controller/index")
const controllerSignup = require("./controller/signup");


/* route init */
// router.get('/pakaian', controller.pakaian);

router.get('/filter', controller.filter)

router.get('/kategori/:category', controller.kategori)

router.get('/signup', controllerSignup.login)
router.post('/signup', controllerSignup.signup)



module.exports = router;
