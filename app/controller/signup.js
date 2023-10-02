const user = require('../model/signup');
const bcrypt = require('bcrypt');

function login(req, res, next) {
    const { email, password } = req.body;

    // Cari pengguna berdasarkan email
    user.findOne({
        where: {
            email: email
        }
    })
    .then(function(user) {
        if (!user) {
            return res.status(401).json({ message: "Email tidak ditemukan." });
        }

        // Bandingkan password yang diterima dengan yang ada di basis data
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                return res.status(500).json({ error: err });
            }
            if (result === true) {
                // Password cocok, pengguna berhasil login
                res.status(200).json({ message: "Login berhasil" });
            } else {
                // Password tidak cocok
                res.status(401).json({ message: "Password salah." });
            }
        });
    })
    .catch(function(err) {
        res.status(500).json({ error: err });
    });
}

function signup(req, res, next) {
    const { namaLengkap, email, password } = req.body;

    // Menggunakan bcrypt untuk mengenkripsi password
    bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
            return res.status(500).json({ error: err });
        }

        // Menyimpan pengguna baru ke basis data dengan kata sandi yang di-hash
        user.create({
            namaLengkap: namaLengkap,
            email: email,
            password: hash, // Menyimpan hash kata sandi
        })
        .then(function() {
            res.status(201).json({
                message: "user berhasil ditambahkan"
            });
        })
        .catch(function(err) {
            res.status(500).json({
                error: err,
            });
        });
    });
}

module.exports = {
    login,
    signup,
}
