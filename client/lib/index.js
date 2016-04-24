import getAdFilters from './getAdFilters'
import parseAds from './parseAds'
import getUserInfo from './getUserInfo'
import addUserInfo from './addUserInfo'
import postAdObj from './postAdObj'

const adObj = {
  images: [],
  videos: []
}

const images = [].slice.call(window.parent.document.getElementsByTagName('img'))
const videos = [].slice.call(window.parent.document.getElementsByTagName('video'))

getAdFilters()
  .then(parseAds.bind(null, images, videos, adObj))
  .then(getUserInfo)
  .then(addUserInfo)
  .then(postAdObj)
