// iterate through vidoes, detect ads and store them
function parseVideoAds (videos, adObj, filters) {
  videos.forEach((video) => {
    for (let filter of filters) {
      if (video.src.includes(filter)) {
        const ad = {
          src: video.src,
          width: video.videoWidth,
          height: video.videoHeight
        }

        adObj.videos.push(ad)
        break
      }
    }
  })

  return adObj
}

export default parseVideoAds
