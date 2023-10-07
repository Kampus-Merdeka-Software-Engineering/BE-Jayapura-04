const Bantuan = require('../model/bantuan');

// Post Contact Form Data
async function postBantuan(req, res){
    try {
        const bantuan = await Bantuan.create(req.body);
        res.json({ success: true, bantuan });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

async function getBantuan(req, res) {
    try {
      const bantuan = await Bantuan.findAll();
      res.status(200).json(bantuan);
    } catch (error) {
      res.status(500).json({ error: 'Terjadi kesalahan saat mengambil data pendaftaran' });
    }
  }

module.exports = {
    postBantuan,
    getBantuan 
}