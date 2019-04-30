import Vue from 'vue'
import App from './App.vue'


// 导入公共样式
import './assets/statics/site/css/style.css'

// 导入组件
import index from './components/index.vue'


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
