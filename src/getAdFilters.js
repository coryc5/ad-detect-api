/* global XMLHttpRequest */

// retrieve known ad filters from easylist cache
function getAdFilters () {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'http://localhost:5000/adfilters')
    xhr.onload = () => {
      if (xhr.status < 300) resolve(JSON.parse(xhr.response))
      else {
        const err = new Error(`Error: Received Status Code ${xhr.status}`)

        reject(err)
      }
    }

    xhr.send()
  })
}

export default getAdFilters
