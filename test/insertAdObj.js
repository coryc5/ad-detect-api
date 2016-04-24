/* globals describe, it */

const mongo = require('mongodb').MongoClient
const chai = require('chai')
const assert = chai.assert

const insertAdObj = require('../server/insertAdObj')

const validObj = {
  url: 'http://localhost:3000/',
  images:
   [ { src: 'http://localhost:3000/images/_show_ads=c.jpg',
       width: 800,
       height: 517 } ],
  videos: [],
  ip: '0.0.0.0',
  city: 'Melrose Place',
  state: 'California',
  country: 'United States',
  zipCode: '90210',
  date: '1990'
}

describe('insertAdObj', () => {
  it('should disallow invalid documents', () => {
    assert.equal(insertAdObj([]), false)
    assert.equal(insertAdObj({ video: 'amp' }), false)
  })

  it('should add valid documents to database', (done) => {
    mongo.connect('mongodb://localhost:27017/videoamp-test', (err, db) => {
      if (err) throw err

      db.collection('ads').insertOne(validObj, (err, data) => {
        if (err) throw err

        assert.equal(data.result.ok, 1)

        db.collection('ads').removeOne({ city: 'Melrose Place' }, (err, data) => {
          if (err) throw err

          done()
          db.close()
        })
      })
    })
  })
})
