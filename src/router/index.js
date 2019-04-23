import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routerMap = [
  // base_charge
  {
    path: '/BaseCharge',
    component: () => import('@/components/base-charge/BaseCharge')
  },
  {
    path: '/HelloWorld',
    component: () => import('@/components/hello-world/HelloWorld')
  }
]

export default new Router({
  mode: 'history',
  base: '/',
  routes: routerMap
})
