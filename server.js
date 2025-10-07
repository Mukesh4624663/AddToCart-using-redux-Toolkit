const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const productController = require("./controller/ProductController");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
const port = 8000;

// multer configuration for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cd(null, "upload/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Routes
app.post("/productsadd", upload.single("image"), productController.addProduct);
app.get("/products", productController.getAllProduct);
app.get("/products/:id", productController.getProductById);
app.delete("/products/:id", productController.deleteProduct);

// connect to mongoose
mongoose
  .connect(
    "mongodb+srv://mp4624663:1234567890@cluster0.karrcv1.mongodb.net/ecomm"
  )
  .then(() => {
    // starting the server
    app.listen(port, () => {
      console.log(`server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
