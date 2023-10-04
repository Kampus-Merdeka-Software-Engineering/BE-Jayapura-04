const User = require('../model/users');

// Controller untuk pendaftaran (Signup)
function postSignup(req, res) {
  const { NamaLengkap, email, password } = req.body;

  User.create({
    NamaLengkap,
    email,
    password,
  })
    .then(() => {
      res.status(201).json({ message: 'Pendaftaran berhasil' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Pendaftaran gagal' });
    });
}

// Controller untuk mendapatkan data pendaftaran (Signup)
function getSignup(req, res) {
    User.findAll()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pendaftaran' });
      });
  }

// Controller untuk masuk (Login)
function postLogin(req, res) {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email,
      password,
    },
  })
    .then((user) => {
      if (user) {
        res.status(200).json({ message: 'Login berhasil', user });
      } else {
        res.status(401).json({ message: 'Login gagal' });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: 'Terjadi kesalahan saat login' });
    });
}

module.exports = {
  postSignup,
  getSignup,
  postLogin,
};
