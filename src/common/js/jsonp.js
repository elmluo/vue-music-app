import originJsonp from 'jsonp'

function param(data) {
  let query = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // query += '&' + k + '=' + encodeURIComponent(value)
    query += `&${k}=${encodeURIComponent(value)}`
  }
  return query ? query.substring(1) : ''
}

/**
 * jsonp 方法封装
 * @param url
 * @param data
 * @param option
 * @returns {Promise}
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
