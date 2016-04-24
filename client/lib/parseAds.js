import parseImageAds from './parseImageAds'
import parseVideoAds from './parseVideoAds'

function parseAds (images, videos, adObj, filters) {
  adObj = parseImageAds(images, adObj, filters)
  adObj = parseVideoAds(videos, adObj, filters)

  return adObj
}

export default parseAds
