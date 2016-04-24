/* globals describe, beforeEach, afterEach, it, chai, sinon, getAdFilters */


const assert = chai.assert

const data = ['video', 'amp']
const dataJson = JSON.stringify(data)

describe('getAdFilters', () => {
  beforeEach(() => {
    this.xhr = sinon.useFakeXMLHttpRequest()

    this.requests = []
    this.xhr.onCreate = (xhr) => {
      this.requests.push(xhr)
    }
  })

  afterEach(() => {
    this.xhr.restore()
  })

  it('should return an array', (done) => {
    getAdFilters().then((results) => {
      try {
        assert.equal(Array.isArray(results), true)
        done()
      } catch (err) {
        done(err)
      }
    })

    this.requests[0].respond(200, { 'Content-Type': 'application/json' }, dataJson)
  })
})

