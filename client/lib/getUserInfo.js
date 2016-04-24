/* global XMLHttpRequest */

// retrieve user's geolocalation data
function getUserInfo (adObj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://ip-api.com/json')
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve({
          adObj,
          userInfo: JSON.parse(xhr.response)
        })
      } else {
        reject()
      }
    }

    xhr.send()
  })
}

export default getUserInfo
