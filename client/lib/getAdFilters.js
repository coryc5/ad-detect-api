/* global XMLHttpRequest */

// retrieve known ad filters from easylist cache
function getAdFilters () {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', '/ads')
    xhr.onload = () => {
      if (xhr.status === 200) resolve(JSON.parse(xhr.response))
      else {
        reject()
      }
    }

    xhr.send()
  })
}

export default getAdFilters
