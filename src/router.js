

//导入vue
import Vue from 'vue'

// 导入公共样式
import './assets/statics/site/css/style.css'

// 导入首页组件
import index from './components/index.vue'
// 导入详情组件
import detail from './components/detail.vue'

// 导入会员中心
import userContainer from './components/userContainer.vue'

import userIndex from './components/userIndex.vue'
import userOrder from './components/userOrder.vue'
import userDetail from './components/userDetail.vue'


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
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',component:index
  },
  {
    path:'/detail/:id',component:detail
  },
  // 会员中心组件
  {
    path:'/user',component:userContainer,
    children:[
      {
        path:'Index',
        component:userIndex
      },
      {
        path:'Order',
        component:userOrder
      },
      {
        path:'Detail',
        component:userDetail
      },
    ]
  }
]

//实例化路由对象
const router = new VueRouter({
    routes
})


// 暴露出去
export default router