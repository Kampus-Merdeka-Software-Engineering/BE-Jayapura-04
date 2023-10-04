const kategoriPakaian = require('../model/pakaian')

function getPakaian(req, res) {
    kategoriPakaian.findAll()
    .then(function(data){
        res.status(200).json({
            data: data
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
}

function getPakaianByJenis(req, res) {
    const { jenis } = req.params; // Ambil jenis dari parameter URL
  
    kategoriPakaian.findAll({
      where: {
        jenis: jenis // Filter berdasarkan jenis yang diterima dari URL
      }
    })
      .then(function(data) {
        if (data.length === 0) {
          res.status(404).json({
            message: `Tidak ada pakaian dengan jenis ${jenis} ditemukan.`
          });
        } else {
          res.status(200).json({
            data: data
          });
        }
      })
      .catch(function(err) {
        res.status(500).json({
          error: err
        });
      });
  }

module.exports = {
    getPakaian,
    getPakaianByJenis,
}