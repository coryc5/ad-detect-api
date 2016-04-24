import parseImageAds from './parseImageAds'
import parseVideoAds from './parseVideoAds'

// use ad filters to detect ads and store them
function parseAds (images, videos, adObj, filters) {
  adObj = parseImageAds(images, adObj, filters)
  adObj = parseVideoAds(videos, adObj, filters)

  return adObj
}

export default parseAds
