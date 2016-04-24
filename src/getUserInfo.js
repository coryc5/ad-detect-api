/* global XMLHttpRequest */

// retrieve user's geolocation data
function getUserInfo (adObj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://ip-api.com/json')
    xhr.onload = () => {
      if (xhr.status < 300) {
        resolve({
          adObj,
          userInfo: JSON.parse(xhr.response)
        })
      } else {
        const err = new Error(`Error: ${xhr.status} status code received`)

        reject(err)
      }
    }

    xhr.send()
  })
}

export default getUserInfo
