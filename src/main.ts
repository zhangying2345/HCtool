import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import tools from './tools/common';

Vue.config.productionTip = false;
Vue.use(ViewUI);
Vue.prototype.tools = tools;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
