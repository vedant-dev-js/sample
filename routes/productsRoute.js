import express from "express";
import {demo,  deleteproducts, product, updateproducts } from "../controller/products/productController.js";
const router = express.Router()



router.post("/api/v1/demo",demo)
router.get("/api/v1/demo",product)
router.delete("/api/v1/demo",deleteproducts)
router.patch("/api/v1/demo",updateproducts)

export default router