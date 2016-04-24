/* global XMLHttpRequest */

// send ad object to database
function postAdObj (adObj) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('POST', '/database')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = () => resolve(xhr.status)

    xhr.send(JSON.stringify(adObj))
  })
}

export default postAdObj
