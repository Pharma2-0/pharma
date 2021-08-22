const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    product: String,
    description: String,
    labo: String,
    price: Number,
    bajoreceta: Boolean,
    quant: Number,
    drug: String,
    elab: Date,
    venc: Date,
    lote: String,
    qrcode: String
},{ collection: 'osde' })

module.exports = mongoose.model("Product", postSchema);