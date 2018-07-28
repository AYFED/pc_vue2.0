import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  esModule: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      component: (resolve) => require(['./views/Home'], resolve),
    },
    {
      path: '/vdesign',
      component: (resolve) => require(['./views/Vdesign'], resolve),
    },
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
    {
      path: '/input-number',
      component: (resolve) => require(['./views/InputNumber'], resolve),
    },
    {
      path: '/rate',
      component: (resolve) => require(['./views/Rate'], resolve),
    },
    {
      path: '/upload',
      component: (resolve) => require(['./views/Upload'], resolve),
    },
    {
      path: '/color-picker',
      component: (resolve) => require(['./views/ColorPicker'], resolve),
    },
    {
      path: '/form',
      component: (resolve) => require(['./views/Form'], resolve),
    },
    {
      path: '/alert',
      component: (resolve) => require(['./views/Alert'], resolve),
    },
    {
      path: '/card',
      component: (resolve) => require(['./views/Card'], resolve),
    },
    {
      path: '/message',
      component: (resolve) => require(['./views/Message'], resolve),
    },
    {
      path: '/notification',
      component: (resolve) => require(['./views/Notification'], resolve),
    },
    {
      path: '/modal',
      component: (resolve) => require(['./views/Modal'], resolve),
    },
    {
      path: '/progress',
      component: (resolve) => require(['./views/Progress'], resolve),
    },
    {
      path: '/avatar',
      component: (resolve) => require(['./views/Avatar'], resolve),
    },
    {
      path: '/badge',
      component: (resolve) => require(['./views/Badge'], resolve),
    },
    {
      path: '/collapse',
      component: (resolve) => require(['./views/Collapse'], resolve),
    },
    {
      path: '/timeline',
      component: (resolve) => require(['./views/Timeline'], resolve),
    },
    {
      path: '/tag',
      component: (resolve) => require(['./views/Tag'], resolve),
    },
    {
      path: '/tooltip',
      component: (resolve) => require(['./views/Tooltip'], resolve),
    },
    {
      path: '/poptip',
      component: (resolve) => require(['./views/Poptip'], resolve),
    },
    {
      path: '/carousel',
      component: (resolve) => require(['./views/Carousel'], resolve),
    },
    {
      path: '/tree',
      component: (resolve) => require(['./views/Tree'], resolve),
    },
    {
      path: '/menu',
      component: (resolve) => require(['./views/Menu'], resolve),
    },
    {
      path: '/tabs',
      component: (resolve) => require(['./views/Tabs'], resolve),
    },
    {
      path: '/dropdown',
      component: (resolve) => require(['./views/Dropdown'], resolve),
    },
    {
      path: '/page',
      component: (resolve) => require(['./views/Page'], resolve),
    },
    {
      path: '/breadcrumb',
      component: (resolve) => require(['./views/Breadcrumb'], resolve),
    },
    {
      path: '/steps',
      component: (resolve) => require(['./views/Steps'], resolve),
    },
    {
      path: '/loading-bar',
      component: (resolve) => require(['./views/LoadingBar'], resolve),
    },
    {
      path: '/circle',
      component: (resolve) => require(['./views/Circle'], resolve),
    },
    {
      path: '/affix',
      component: (resolve) => require(['./views/Affix'], resolve),
    },
    {
      path: '/back-top',
      component: (resolve) => require(['./views/BackTop'], resolve),
    },
    {
      path: '/spin',
      component: (resolve) => require(['./views/Spin'], resolve),
    },
    {
      path: '/scroll',
      component: (resolve) => require(['./views/Scroll'], resolve),
    },

  ],
})
