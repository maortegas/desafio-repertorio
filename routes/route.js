const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs')

router.get('/', (req, res) => {
 console.log(__dirname)
    res.sendFile(__dirname + "/index.html");
});

router.get('/canciones', (req,res)=>{
    const repertorio = JSON.parse(fs.readFileSync("./repertorio.json", "utf8"));
    res.json(repertorio)
})
//router.get("/", (req, res) => {
//    res.send("Hello World! desde express con routes");
//  });
  

module.exports = router;

//router.get("/", (req, res)=> {
//    res.sendFile('./index.html', {root: __dirname});
//})

//router.post(`/registrer`, (req, res)=>{
//    res.send("Register a new user");
//})

//router.put(`/update`, (req,res)=>{
//    res.send("Update user");
//})

//router.delete(`/delete`, (req, res)=>{
//    res.send("Delete user")
//})

//module.exports = router;