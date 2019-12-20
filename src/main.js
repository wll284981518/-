import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
//--->引入store仓库
import store from './store';
// ����vant
// ����vant scss��ʽ
import 'vant/lib/index.css';
import Vant from 'vant';
Vue.use(Vant);
// ����vant�γ�ר�ÿ��
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
//vant组件按钮
import { Button } from 'vant';
Vue.use(Button)
//首页轮播图组件
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
//首页详情页的图标
import { Icon } from 'vant';
Vue.use(Icon);
//点击关注，提示已关注
import { Toast } from 'vant';
Vue.use(Toast);
//--->引入vant框架的tab组件
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.config.productionTip = false;
import Calenda from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Calenda);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
