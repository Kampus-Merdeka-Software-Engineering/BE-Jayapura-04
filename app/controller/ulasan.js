const Ulasan = require('../model/ulasan');

// Controller untuk menyimpan ulasan
function postUlasan(req, res) {
  const { username, rating, ulasan } = req.body;

  const ulasanData = {
    username: username,
    rating: rating,
    ulasan: ulasan,
  };

  Ulasan.create(ulasanData)
    .then(() => {
      res.status(201).json({ message: 'Ulasan berhasil disimpan' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Gagal menyimpan ulasan' });
    });
}

function getUlasan(req, res) {
  Ulasan.findAll()
    .then((ulasan) => {
      res.status(200).json(ulasan);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Gagal mengambil ulasan' });
    });
}

module.exports = {
  postUlasan,
  getUlasan, 
};
