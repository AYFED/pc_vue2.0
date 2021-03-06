import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Notice from './components/notice';
import Message from './components/message';
import Modal from './components/modal';
import LoadingBar from './components/loading-bar';

Vue.prototype.$Notice = Notice;
Vue.prototype.$Message = Message;
Vue.prototype.$Modal = Modal;
Vue.prototype.$Loading = LoadingBar;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
