const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const publicPath = path.join(__dirname, '../client/public')

app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile(path.join(publicPath, 'main.html')))
app.get('/iframe.html', (req, res) => res.sendFile(path.join(publicPath, 'iframe.html')))
app.get('/bundle.js', (req, res) => res.sendFile(path.join(publicPath, 'bundle.js')))
app.get('/ads.json', (req, res) => res.sendFile(path.join(__dirname, 'utils/ads.json')))
app.get('/images/:img', (req, res) => {
  res.sendFile(path.join(publicPath, 'images', req.params.img))
})
app.get('/videos/:vid', (req, res) => {
  res.sendFile(path.join(publicPath, 'videos', req.params.vid))
})

app.post('/database', (req, res) => {
  console.log(req.body)
})

app.listen(5000)
