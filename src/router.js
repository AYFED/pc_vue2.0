import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  esModule: false,
  mode: 'history',
  routes: [
    {
      path: '/grid',
      component: (resolve) => require(['./views/Grid'], resolve),
    },
    {
      path: '/layout',
      component: (resolve) => require(['./views/Layout'], resolve),
    },
    {
      path: '/button',
      component: (resolve) => require(['./views/Button'], resolve),
    },
    {
      path: '/icon',
      component: (resolve) => require(['./views/Icon'], resolve),
    },
  ],
})
