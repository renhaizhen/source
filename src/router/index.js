import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
      path:'/index',
      component:resolve => require(['../components/page/m_ap.vue'],resolve)
    },{
      path:'/aleval',
      component:resolve => require(['../components/page/m_aleval.vue'],resolve)
    },{
      path:'/ib',
      component:resolve => require(['../components/page/m_ib.vue'],resolve)
    },{
      path:'/tinified',
      component:resolve => require(['../components/page/m_tinified.vue'],resolve)
    }
  ]
})
