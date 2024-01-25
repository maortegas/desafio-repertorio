const express = require('express');

const router = express.Router();
const fs = require('fs')


router.get('/', (req,res)=>{
  res.sendFile(process.cwd()+"/index.html")
})

router.get('/canciones', (req,res)=>{
    const repertorio = JSON.parse(fs.readFileSync("./repertorio.json", "utf8"));
    res.json(repertorio)
})

router.put('/canciones/:id', (req, res)=>{
    const {id} = req.params
    const cancion = req.body
    const canciones = JSON.parse(fs.readFileSync("repertorio.json"))
    const index = canciones.findIndex(p => p.id == id)
    canciones[index] = cancion
    fs.writeFileSync("repertorio.json", JSON.stringify(canciones))
    res.send("Cancion modificada con éxito")
})

router.post("/canciones", (req, res) => {
  const cancion = req.body; 
  const canciones = JSON.parse(fs.readFileSync("repertorio.json"));
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