const User = require('../model/users');

// Controller untuk pendaftaran (Signup)
function postSignup(req, res) {
  const { namaLengkap, email, password } = req.body;

  const user = {
    namaLengkap: namaLengkap,
    email: email,
    password: password,
  };

  User.create(user) // Menggunakan model User untuk membuat pengguna
    .then(() => {
      res.status(201).json({ message: 'Pendaftaran berhasil' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Pendaftaran gagal' });
    });
}

// Controller untuk mendapatkan data pendaftaran (Signup)
async function getSignup(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pendaftaran' });
  }
}

// Controller untuk masuk (Login)
async function postLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (user) {
      res.status(200).json({ message: 'Login berhasil', user });
    } else {
      res.status(401).json({ message: 'Login gagal' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat login' });
  }
}

module.exports = {
  postSignup,
  getSignup,
  postLogin,
};
