const OSS_URL = "https://test.com"

const images = {}

Object.keys(images).forEach((key) => {
  ;(images as Record<string, string>)[key] = OSS_URL + "/images/" + (images as Record<string, string>)[key]
})
export default images
