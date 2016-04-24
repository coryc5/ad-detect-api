// add geolocation data to ad object
function addUserInfo ({adObj, userInfo}) {
  adObj.ip = userInfo.query
  adObj.city = userInfo.city
  adObj.state = userInfo.regionName
  adObj.country = userInfo.country
  adObj.zipCode = userInfo.zip
  adObj.date = new Date()

  return adObj
}

export default addUserInfo
