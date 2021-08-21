const Product = require('../models/product');

module.exports = class API{
    // fetch all products
    static async fetchAllProducts(req, res) {
        try{
            const product = await Product.find()
            res.status(200).json(product);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }

    // fetch product by QR Code
    static async fetchProductByQRCode(req, res) {
        try{
            const product = await Product.findOne({ qrcode: req.params.id })
            res.status(200).json(product);
        } catch(err) {
            res.status(404).json({ message: err.message });
        }
    }

    // create product
    static async addProduct(req, res) {
        const product = req.body;
        try{
            await Product.create(product);
            res.status(201).json({ message: "Post created successfully!" });
        } catch(err) {
            res.status(400).json({ message: err.message });
        }
    }

}
