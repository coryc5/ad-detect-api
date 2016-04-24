const path = require('path')
const express = require('express')

const app = express()
const publicPath = path.join(__dirname, '../public')

app.get('/', (req, res) => res.sendFile(path.join(publicPath, 'index.html')))
app.get('/iframe.html', (req, res) => res.sendFile(path.join(publicPath, 'iframe.html')))
app.get('/bundle.js', (req, res) => res.sendFile(path.join(publicPath, 'bundle.js')))
app.get('/images/:img', (req, res) => res.sendFile(path.join(publicPath, 'images', req.params.img)))
app.get('/videos/:vid', (req, res) => res.sendFile(path.join(publicPath, 'videos', req.params.vid)))

app.listen(3000, () => console.log('Listening on port 3000...'))
