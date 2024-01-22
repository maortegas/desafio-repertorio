const express = require('express');
const path = require('path');
const router = express.Router();
const fs = require('fs')

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/index.html");
});

router.get('/canciones', (req,res)=>{
    const repertorio = JSON.parse(fs.readFileSync("./repertorio.json", "utf8"));
    res.json(repertorio)
})
//router.get("/", (req, res) => {
//    res.send("Hello World! desde express con routes");
//  });


router.post("/canciones", (req, res) => {
  const cancion = req.body; 
  const canciones = JSON.parse(fs.readFileSync("repertorio.json")); // 3
  canciones.push(cancion);
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));

  res.send("cancion agregada con éxito!");
});

router.delete("/canciones/:id", (req, res) => {
  const { id } = req.params;
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
  const index = canciones.findIndex((p) => p.id == id);
  canciones.splice(index, 1);
  fs.writeFileSync("repertorio.json", JSON.stringify(canciones));
  res.send("cancion eliminada con éxito");
});

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