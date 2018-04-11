import jsonp from 'common/js/jsonp'
import * as Config from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, Config.commonParams, {
    platForm: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, Config.options)
}

export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, Config.commonParams, {
    platform: 'yqq',
    hostUin: '0',
    needNewCode: '0',
    categoryId: '10000000',
    sortId: '5',
    sin: '0',
    ein: '29',
    rnd: Math.random()
  })
  return axios.get(url, {params: data}).then((res) => {
    return Promise.resolve(res.data)
  })
}
