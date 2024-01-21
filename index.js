console.log("Primer Log");
const express = require('express')
const app = express()
const routes =require("./routes/routes");

const PORT = process.env.PORT ||3005;

app.method(path, callback)

app.use("/", routes);

app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))