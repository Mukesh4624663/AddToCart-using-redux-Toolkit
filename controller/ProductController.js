const Product = require("../models/productaddmodel");

const productController = {
  // add product to database
  addProduct: async (req, res) => {
    try {
      const {
        name,
        description,
        category,
        price,
        brand,
        imageUrl,
        featured,
        rating,
        onSale,
        salePrice,
      } = req.body;

      const product = new Product({
        name,
        description,
        category,
        price,
        brand,
        imageUrl,
        featured,
        rating,
        onSale,
        salePrice,
        // imageUrl: req.file.filename,
      });
      await product.save();
      res.status(201).json({ message: "added product successfully", product });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // get all products from database
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // get single product by id
  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not Found" });
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  //   delete product by id
  deleteProduct: async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.json({ message: "Product deleted sucessfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
module.exports = productController;
