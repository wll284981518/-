import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
//--->引入store仓库
import store from './store';
//vant外部样式
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
//vant网络样式
import "../src/assets/resetui.css"
//font awesome 字体样式
import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false;
//约课记录框架
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
import { Button } from 'vant';
Vue.use(Button);
//首页轮播图组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
//首页详情页的图标
import { Icon } from 'vant';
Vue.use(Icon);
//点击关注，提示已关注
import { Toast } from 'vant';
Vue.use(Toast);
// 引入课程的框架
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
import { Dialog } from 'vant'
Vue.use(Dialog);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
