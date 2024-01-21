const express = require('express')
const app = express()

const PORT = process.env.PORT ||3005;

app.get("/", (req, res)=> {
    res.send("hello");
})

app.post(`/registrer`, (req, res)=>{
    res.send("Register a new user");
})

app.put(`/update`, (req,res)=>{
    res.send("Update user");
})

app.delete(`/delete`, (req, res)=>{
    res.send("Delete user")
})

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))