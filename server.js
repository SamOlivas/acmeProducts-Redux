const express = require('express');
const path = require(path)
const PORT = process.env.PORT || 3000;
const {Product, syncAndSeed} = require('./db')

const app = express()

//syncAndSeed()

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, index.html))
})

app.get('/api/products', (req,res,next) => {
  res.send(404)
})


app.listen(PORT)
