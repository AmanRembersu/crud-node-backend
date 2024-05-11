
const product = require("../models/product.model.js")


const getProducts = async (req, res) => {
    try {
        const products = await product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const Product = await product.findById(id);
        res.status(200).json(Product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }


}

const createProduct = async (req, res) => {
    try {
        const Product = await product.create(req.body);
        res.status(200).json(Product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const Product = await product.findByIdAndUpdate(id, req.body);
        if (!Product) {
            return res.status(404).json({ message: "product not found" });
        }
        const updateProduct = await product.findById(id);
        res.status(200).json(updateProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteProduct = async (req, res) => {

    try {
        const { id } = req.params;
        const Product = await product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }

        res.status(200).json("Product deleted");

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}