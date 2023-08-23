import express, { urlencoded } from "express"
import mongoose from "mongoose"
import cors from "cors"
import route from "./routes/userRoute.js"

const app=express()
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use("/register",route)

mongoose.connect("url",{
    dbName:"MernDataBase"
}).then(()=>{console.log("Connected to DB");})

app.listen(3001,()=>{console.log("Server Up & Running");})