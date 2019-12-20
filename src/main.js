import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
import 'vant/lib/index.css';
import 'element-ui/lib/theme-chalk/index.css';
import { Checkbox, CheckboxGroup } from 'vant';
import { Icon } from 'vant';
import { DatetimePicker } from 'vant';
import { ActionSheet } from 'vant';
import { Popup } from 'vant';
import {Calendar} from 'element-ui';
Vue.use(Calendar)
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(DatetimePicker);
Vue.use(Icon);
Vue.use(Checkbox).use(CheckboxGroup)
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
