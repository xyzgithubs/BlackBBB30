import Vue from 'vue'
import App from './App.vue'


// 统一设置axios
import axios from 'axios'
// 所有Vue实例可以通过$axios来使用axios 有一段时间很流行 $http
Vue.prototype.$axios = axios
// 设置基地址 基础地址
axios.defaults.baseURL = 'http://111.230.232.110:8899'


// 设置全局过滤器
// 导入moment.js
import moment from 'moment'
Vue.filter('formatTime', (value)=>{
  //处理时间并返回
  return moment(value).format('YYYY年MM月DD日')
}) 
//   // 结合moment.js
//   // 时间格式化模板 写死了
//   if (fmtTemplate) {
//     // 如果传了参数 用传递的模板
//     return moment(value).format(fmtTemplate)
//   } else {
//     return moment(value).format('YYYY-MM-DD')
//   }
// })

//导入抽取的路由

import router from './router.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 挂载到顶级
  router
}).$mount('#app')
