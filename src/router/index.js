import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerMap = [
  { path: '/', component: () => import('@/components/login/Login'), hidden: true },

  // base_charge
  {
    path: '/BaseCharge',
    name: 'BaseCharge',
    component: () => import('@/components/base-charge/BaseCharge')
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import('@/components/hello-world/HelloWorld')
  }
]

export default new Router({
  mode: 'history',
  base: '/',
  routes: routerMap
})
