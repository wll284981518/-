import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
Vue.config.productionTip = false;
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
