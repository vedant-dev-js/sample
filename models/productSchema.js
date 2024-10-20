import mongoose from "mongoose";
const productSystem = mongoose.Schema({
    product:String,
    title:String,
    price:Number,
    category:String,
},{
    timestamps:true
})
const Product =mongoose.models.products ||  mongoose.model("products",productSystem)
export default  Product