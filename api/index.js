const express = require("express")
const app = express()

app.get('*', (req, res) => {
    console.log("Hola mundo!")
    res.send({ mensaje: "listo" })
})


module.exports = app