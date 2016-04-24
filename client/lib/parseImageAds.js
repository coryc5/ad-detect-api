// iterate through images, detect ads and store them
function parseImageAds (images, adObj, filters) {
  images.forEach((image) => {
    for (let filter of filters) {
      if (image.src.includes(filter)) {
        const ad = {
          src: image.src,
          width: image.width,
          height: image.height
        }

        adObj.images.push(ad)
        break
      }
    }
  })

  return adObj
}

export default parseImageAds
