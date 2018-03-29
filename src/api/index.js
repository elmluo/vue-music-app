import * as Recommend from './recommend'
export default {
  install(Vue, opt) {
    Vue.prototype.$api = {
      ...Recommend
    }
  }
}
