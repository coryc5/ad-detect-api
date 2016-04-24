const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/videoamp-test'

function insertAdObj (adObj) {
  const example = {
    url: true,
    images: true,
    videos: true,
    ip: true,
    city: true,
    state: true,
    country: true,
    zipCode: true,
    date: true
  }

  const correctType = adObj.constructor === Object
  const correctKeys = Object.keys(adObj).every((key) => {
    return Object.keys(example).some((exampleKey) => key === exampleKey)
  })

  if (correctType && correctKeys) {
    mongo.connect(url, (err, db) => {
      if (err) throw err

      db.collection('ads').insertOne(adObj, (err, data) => {
        if (err) throw err

        db.close()
      })
    })
  } else {
    return false
  }
}

module.exports = insertAdObj
