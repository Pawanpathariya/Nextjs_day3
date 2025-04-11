import mongoose from "mongoose";
const ProSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: String,
    imageurl: String,
  })

const Product=mongoose.models.ProductModel || mongoose.model("ProductModel",ProSchema);

export default Product;