import express from "express";
import {client} from "@repo/db/client"
const app = express()
app.use(express.json())

// app.listen(3000)
app.get('/',(req,res) => {
    res.send("Hello from yug!")
})

app.post("/signup" ,async (req,res) => {
    console.log("in signup");
    
    const username = req.body.username
    const password = req.body.password
    const user = await client.user.create({
        data:{
            username,
            password
        }
    })
    res.json({
        message : "Signup successfully",
        id : user.id
    })
})
app.listen(3002)