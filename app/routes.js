const express = require('express');
const router = express.Router();
const controller = require("./controller/pakaian");
const controllerUser = require("./controller/users");
const controllerUlasan = require("./controller/ulasan");

router.get('/pakaian', controller.getClothes);
router.get('/pakaian/:type', controller.getClothesByType);

router.post('/signup', controllerUser.postSignup);
router.get('/signup', controllerUser.getSignup);

router.post('/login', controllerUser.postLogin);

router.post('/ulasan', controllerUlasan.postUlasan);
router.get('/ulasan', controllerUlasan.getUlasan);

module.exports = router;