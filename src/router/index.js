import Vue from 'vue'
import Router from 'vue-router'
//总组件
import Index from "../components/Index/Index";
//首页组件
import Home from "../components/home/Home";
//课程组件
import Course from "../components/Course/Course";
//练习组件
import Edit from "../components/Edit/Edit";
//约课组件
import Study from "../components/Study/Study";
//我的组件
import My from "../components/My/My";
// 登录组件
import Login from "../components/My/Login/Login";
// 找回密码组件
import Forget from "../components/My/Login/forget-pass";
// 验证登录组件
import Sms from "../components/My/Login/sms-login";
// 设置密码组件
import Setpass from "../components/My/Login/set-pass";
// 设置信息组件
import Setmessage from "../components/My/Login/set-message";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
        {
          path:"/home",
          name:"Home",
          component:Home,
        },
        {
          path:"/course",
          name:"Course",
          component:Course,
        },
        {
          path:"/study",
          name:"Study",
          component:Study,
        },
        {
          path:"/edit",
          name:"Edit",
          component:Edit,
        },
        {
          path:"/my",
          name:"My",
          component:My,
        },
        {
          path:"/",
          redirect:"/home"
        }
      ]
    },
    {
      path:"/login",
      name:'Login',
      component:Login
    },{
      path:"/forget",
      name:"forget",
      component:Forget
    },{
      path:"/sms-login",
      name:"sms-login",
      component:Sms
    },{
      path:"/set-pass",
      name:"set-pass",
      component:Setpass
    },{
      path:"/set-message",
      name:"set-message",
      component:Setmessage
    }
  ]
})
