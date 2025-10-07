const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    String,
  },
  stockQuantity: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  salePrice: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("products", productSchema);

module.exports = Product;
