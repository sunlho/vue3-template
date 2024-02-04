import axios from "axios"

export default async function (url: string): Promise<string> {
  return axios.get(url).then((res) => {
    const reg = /"allOf":\[\{"\$ref":"(.*?)"}\]/g
    const str = JSON.stringify(res.data)
    const result = str.replace(reg, '"$ref": "$1"')
    return result
  })
}
