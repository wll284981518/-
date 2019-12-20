import Vue from 'vue'
import App from './App'
import router from './router'
import Rem from "../static/js/rem"
import 'element-ui/lib/theme-chalk/index.css';
import { Checkbox, CheckboxGroup } from 'vant';
import { DatetimePicker } from 'vant';
import { ActionSheet } from 'vant';
import { Popup } from 'vant';
import {Calendar} from 'element-ui';
Vue.use(Calendar)
Vue.use(Popup);
Vue.use(ActionSheet);
Vue.use(DatetimePicker);
Vue.use(Checkbox).use(CheckboxGroup)
//--->引入store仓库
import store from './store';
import { DropdownMenu, DropdownItem } from 'vant';
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
//vant组件按钮
//vant外部样式
import 'vant/lib/index.css';
import Vant from 'vant';
<<<<<<< HEAD
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
=======
>>>>>>> cc30be0c0d34b30f6b6796ecb5f385026bd6b960
Vue.use(Vant);
//vant网络样式
import "../src/assets/resetui.css"
//font awesome 字体样式
import 'font-awesome/css/font-awesome.min.css'
// import 'font-awesome/css/font-awesome.min.css'
Vue.config.productionTip = false;
//约课记录框架
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
// 2019/12/20 ---付东飞Study组件-待上课请假vant框架
import { Dialog } from 'vant';
Vue.use(Dialog);
// 数字键盘
import {NumberKeyboard} from 'vant';
Vue.use(NumberKeyboard)
// 全局路由守卫
router.beforeEach((to, from, next) =>{
  const type = to.meta.type
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    if (window.localStorage.getItem('login')) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()  // 确保一定要有next()被调用
  }
})

//--->引入vant框架的tab组件
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);
Vue.config.productionTip = false;

// import {Calenda} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Calenda);
/* eslint-disable no-new */
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  store,
  router,
  store,
  render: h => h(App)
})
