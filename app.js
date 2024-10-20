import express from "express"
import dotenv from "dotenv"
import con from "./database/db.js"
import productRouter from "./routes/productsRoute.js"
const app =express()
dotenv.config()

con()
app.use(express.json())
app.use(productRouter)



export default app