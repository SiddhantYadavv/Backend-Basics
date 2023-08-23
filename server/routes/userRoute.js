import express from "express"
import User from "../model/userModel.js"

const route=express.Router()

route.get("/get", async(req,res)=>{
   const get= await User.findOne({})
    res.json(get)
})

route.post("/post", async(req,res)=>{
    const {name,password}=req.body
    const user= await User.findOne({name})
    res.json(user)
})

export default route