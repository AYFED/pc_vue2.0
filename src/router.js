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
    {
      path: '/input',
      component: (resolve) => require(['./views/Input'], resolve),
    },
    {
      path: '/select',
      component: (resolve) => require(['./views/Select'], resolve),
    },
    {
      path: '/radio',
      component: (resolve) => require(['./views/Radio'], resolve),
    },
    {
      path: '/checkbox',
      component: (resolve) => require(['./views/Checkbox'], resolve),
    },
    {
      path: '/switch',
      component: (resolve) => require(['./views/Switch'], resolve),
    },
    {
      path: '/table',
      component: (resolve) => require(['./views/Table'], resolve),
    },
    {
      path: '/auto-complete',
      component: (resolve) => require(['./views/AutoComplete'], resolve),
    },
    {
      path: '/slider',
      component: (resolve) => require(['./views/Slider'], resolve),
    },
    {
      path: '/date-picker',
      component: (resolve) => require(['./views/DatePicker'], resolve),
    },
    {
      path: '/time-picker',
      component: (resolve) => require(['./views/TimePicker'], resolve),
    },
    {
      path: '/cascader',
      component: (resolve) => require(['./views/Cascader'], resolve),
    },
    {
      path: '/transfer',
      component: (resolve) => require(['./views/Transfer'], resolve),
    },
  ],
})
