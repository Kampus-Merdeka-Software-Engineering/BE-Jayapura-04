const express = require('express');
const router = express.Router();
const controller = require("./controller/pakaian");
const controllerUser = require("./controller/users");
const controllerBantuan = require("./controller/bantuan");

router.get('/pakaian', controller.getClothes);
router.get('/pakaian/:type', controller.getClothesByType);
router.get('/pakaian/:type/:id', controller.getClothesByID);


router.post('/signup', controllerUser.postSignup);

router.post('/login', controllerUser.postLogin);

router.post('/bantuan', controllerBantuan.postBantuan);

module.exports = router;