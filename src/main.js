import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
Vue.config.productionTip = false;
import 'vant/lib/index.css';
import Vant from 'vant';
import 'vant/lib/index.css';

import { Popup } from 'vant';
import { Picker } from 'vant';
//按钮
import { Button } from 'vant';

Vue.use(Button);
//时间
import { DatetimePicker } from 'vant';
Vue.use(DatetimePicker);
//地区
import { Area } from 'vant';
Vue.use(Area);
Vue.use(Picker);
Vue.use(Popup);
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
