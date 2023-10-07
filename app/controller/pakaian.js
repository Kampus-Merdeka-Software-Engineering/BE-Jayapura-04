const kategoriPakaian = require('../model/pakaian')

function getClothes(req, res) {
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

function getClothesByType(req, res) {
    const { type } = req.params; // Ambil jenis dari parameter URL
  
    kategoriPakaian.findAll({
      where: {
        type: type // Filter berdasarkan jenis yang diterima dari URL
      }
    })
      .then(function(data) {
        if (data.length === 0) {
          res.status(404).json({
            message: `Tidak ada pakaian dengan jenis ${type} ditemukan.`
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


function getClothesByID(req, res) {
  const { type, id } = req.params;

kategoriPakaian.findOne({
  where: {
    type: type,
    id: id,
  },
})
  .then(function (pakaian) {
    if (!pakaian) {
      return res.status(404).json({
        message: `Pakaian dengan jenis ${type} dan ID ${id} tidak ditemukan.`,
      });
    }

    res.status(200).json({
      data: mapTopakaianRes(pakaian),
    });
  })
  .catch(function (error) {
    console.error(error);
    res.status(500).json({
      error: 'Terjadi kesalahan saat mengambil detail pakaian.',
    });
  });
};

function mapTopakaianRes(pakaian){
  console.log(pakaian.colors);
  console.log(pakaian.sizes);
  return {
    id: pakaian.id,
    name: pakaian.name,
    type: pakaian.type,
    price: pakaian.price,
    img: pakaian.img,
    rating: pakaian.rating,
    colors: JSON.parse(pakaian.colors),
    sizes: JSON.parse(pakaian.sizes),
  }
}
  
module.exports = {
    getClothes,
    getClothesByType,
    getClothesByID,
}