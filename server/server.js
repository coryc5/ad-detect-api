const path = require('path')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const insertAdObj = require('./insertAdObj')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/adfilters', (req, res) => res.sendFile(path.join(__dirname, 'utils/ads.json')))
app.post('/database', (req, res) => insertAdObj(req.body))

app.listen(5000, () => console.log('Listening on port 5000...'))
