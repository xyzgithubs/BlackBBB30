import Vue from 'vue'
import App from './App.vue'


// // 统一设置axios
// import axios from 'axios'
// // 所有Vue实例可以通过$axios来使用axios 有一段时间很流行 $http
// Vue.prototype.$axios = axios
// // 设置基地址 基础地址
// axios.defaults.baseURL = 'http://111.230.232.110:8899'


// 设置全局过滤器
// 导入moment.js
import moment from 'moment'
Vue.filter('globalFormatTime', function(value, fmtTemplate) {
  // 结合moment.js
  // 时间格式化模板 写死了
  if (fmtTemplate) {
    // 如果传了参数 用传递的模板
    return moment(value).format(fmtTemplate)
  } else {
    return moment(value).format('YYYY-MM-DD')
  }
})


// 导入公共样式
import './assets/statics/site/css/style.css'

// 导入首页组件
import index from './components/index.vue'
// 导入详情组件
import detail from './components/detail.vue'

//导入router 
import VueRouter from 'vue-router'

//导入饿了么ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


// vue.use
Vue.use(VueRouter)

//写规则
const routes = [
  {
    path:'/index',component:index
  },
  {
    path:'/detail/:id',component:detail
  }
]

//实例化路由对象
const router = new VueRouter({
    routes
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  // 挂载到顶级
  router
}).$mount('#app')
