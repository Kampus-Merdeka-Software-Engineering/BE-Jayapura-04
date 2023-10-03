const User = require('../model/user');

function signup(req, res, next) {
    if (req.body.namalengkap == "" || req.body.email == "" || req.body.password == "") {
        res.status(400).json({
            message: "EMPTY FIELD"
        });
        return;
    }

    db.create({
        namalengkap: req.body.namalengkap,
        email: req.body.email,
        password: req.body.password,
    })
        .then(function () {
            res.status(201).json({
                message: "User berhasil terdaftar"
            });
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                message: err
            });
        });
}

function login(req, res, next) {
    if (req.body.email == "" || req.body.password == "") {
        res.status(400).json({
            message: "EMPTY FIELD"
        });
        return;
    }

    db.findOne({
        where: {
            email: req.body.email,
            password: req.body.password
        }
    })
        .then(function (data) {
            if (!data) {
                res.status(404).json({
                    message: "User not found"
                });
            } else {
                res.status(200).json({
                    message: "Success login",
                    data: data
                });
            }
        })
        .catch(function (err) {
            console.log(err);
            res.status(500).json({
                message: err
            });
        });
}

module.exports = {
    login,
    signup,
};
