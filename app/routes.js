const express = require('express');
const router = express.Router();
const controller = require("./controller/pakaian");
const controllerUser = require("./controller/users");
const controllerUlasan = require("./controller/ulasan");
const controllerBantuan = require("./controller/bantuan");

router.get('/pakaian', controller.getClothes);
router.get('/pakaian/:type', controller.getClothesByType);
router.get('/pakaian/:type/:id', controller.getClothesByID);


router.post('/signup', controllerUser.postSignup);
router.get('/signup', controllerUser.getSignup);

router.post('/login', controllerUser.postLogin);

router.post('/ulasan', controllerUlasan.postUlasan);
router.get('/ulasan', controllerUlasan.getUlasan);

router.post('/bantuan', controllerBantuan.postBantuan);
router.get('/bantuan', controllerBantuan.getBantuan);

module.exports = router;