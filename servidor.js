const express = require('express')

const app = express()

const PORT = 8080   

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error=> console.log(`Error en el servidor ${error}`))

app.get('/', (req,res) => {
    req.send({mensaje:"hola mundo"})
})