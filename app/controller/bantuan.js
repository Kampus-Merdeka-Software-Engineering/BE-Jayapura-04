const Contact = require('../model/bantuan');

// Post Contact Form Data
async function postBantuan(req, res){
    try {
        const contact = await Contact.create(req.body);
        res.json({ success: true, contact });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    postBantuan 
}