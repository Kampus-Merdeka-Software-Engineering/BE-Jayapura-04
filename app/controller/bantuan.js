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

module.exports = {
    postBantuan,
}