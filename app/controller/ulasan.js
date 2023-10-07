const Ulasan = require('../model/ulasan');

async function postUlasan(req, res){
  try {
      const ulasan = await Ulasan.create(req.body);
      res.json({ success: true, ulasan });
  } catch (err) {
      res.status(500).json({ success: false, error: err.message });
  }
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
