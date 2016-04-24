/* globals describe, beforeEach, afterEach, it, chai, sinon */

import getAdFilters from '../src/getAdFilters'
import parseAds from '../src/parseAds'
import parseImageAds from '../src/parseImageAds'
import parseVideoAds from '../src/parseVideoAds'
import getUserInfo from '../src/getUserInfo'
import addUserInfo from '../src/addUserInfo'
import postAdObj from '../src/postAdObj'

const assert = chai.assert


describe('getAdFilters', () => {
  const data = ['video', 'amp']
  const dataJson = JSON.stringify(data)

  beforeEach(() => {
    window.xhr = sinon.useFakeXMLHttpRequest()

    window.requests = []
    window.xhr.onCreate = (xhr) => {
      window.requests.push(xhr)
    }
  })

  afterEach(() => window.xhr.restore())

  it('should return an array', (done) => {
    getAdFilters().then((results) => {
      try {
        assert.equal(Array.isArray(results), true)
        done()
      } catch (err) {
        done(err)
      }
    })

    window.requests[0].respond(200, { 'Content-Type': 'application/json' }, dataJson)
  })

  it('should throw error at 404 response', (done) => {
    getAdFilters().then((results) => {
      assert.equal(results.constructor, Error)
      done()
    }, (err) => {
      assert.equal(err.constructor, Error)
      done()
    })

    window.requests[0].respond(404)
  })
})

describe('parseAds', () => {
  const results = parseAds([], [], {}, [])

  it('should return an object', () => assert.equal(results.constructor, Object))

  it('object should have same number of properties upon exit as entry', () => {
    assert.equal(Object.keys(results).length, 0)
  })
})

describe('parseImageAds', () => {
  const results = parseImageAds([{ src: 'a.jpg' }, { src: 'netflix-ad-home.jpg' }],
    { images: [] }, ['-ad-home.'])

  it('should return an object', () => assert.equal(results.constructor, Object))

  it('object should have same number of properties upon exit as entry', () => {
    assert.equal(Object.keys(results).length, 1)
  })

  it('should ignore images not containing filters', () => {
    assert.equal(results.images.every((image) => image.src.includes('-ad-home.')), true)
  })
})

describe('parseVideoAds', () => {
  const results = parseVideoAds([{ src: 'a.mp4' }, { src: 'netflix-ad-home.mp4' }],
    { videos: [] }, ['-ad-home.'])

  it('should return an object', () => assert.equal(results.constructor, Object))

  it('object should have same number of properties upon exit as entry', () => {
    assert.equal(Object.keys(results).length, 1)
  })

  it('should ignore videos not containing filters', () => {
    assert.equal(results.videos.every((video) => video.src.includes('-ad-home.')), true)
  })
})

describe('getUserInfo', () => {
  const data = {video: 'amp'}
  const dataJson = JSON.stringify(data)

  beforeEach(() => {
    window.xhr = sinon.useFakeXMLHttpRequest()

    window.requests = []
    window.xhr.onCreate = (xhr) => {
      window.requests.push(xhr)
    }
  })

  afterEach(() => window.xhr.restore())

  it('should return an object', (done) => {
    getUserInfo().then((results) => {
      try {
        assert.equal(results.constructor, Object)
        done()
      } catch (err) {
        done(err)
      }
    })

    window.requests[0].respond(200, { 'Content-Type': 'application/json' }, dataJson)
  })

  it('should throw error at 404 response', (done) => {
    getUserInfo().then((results) => {
      assert.equal(results.constructor, Error)
      done()
    }, (err) => {
      assert.equal(err.constructor, Error)
      done()
    })

    window.requests[0].respond(404)
  })
})

describe('addUserInfo', () => {
  const obj = {
    query: true,
    city: true,
    regionName: true,
    country: true,
    zip: true
  }
  const results = addUserInfo({adObj: {}, userInfo: obj})

  it('should return an object', () => {
    assert.equal(results.constructor, Object)
  })

  it('object exit with 6 more properties', () => assert.equal(Object.keys(results).length, 6))
  it('date property should be a date', () => assert.equal(results.date.constructor, Date))
})

describe('postAdObj', () => {
  const data = {video: 'amp'}
  const dataJson = JSON.stringify(data)

  beforeEach(() => {
    window.xhr = sinon.useFakeXMLHttpRequest()

    window.requests = []
    window.xhr.onCreate = (xhr) => {
      window.requests.push(xhr)
    }
  })

  afterEach(() => window.xhr.restore())

  it('should receive a status code response', (done) => {
    postAdObj(data).then((results) => {
      try {
        assert.equal(results.constructor, Number)
        done()
      } catch (err) {
        done(err)
      }
    })

    window.requests[0].respond(200, { 'Content-Type': 'application/json' }, dataJson)
  })
})
