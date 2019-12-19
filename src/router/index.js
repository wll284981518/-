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
import EditKdzl from"../components/Edit/Edit-kdzl/Edit-kdzl"
import TextGit from"../components/Edit/Edit-kdzl/TextGit"
//题库组件
import Ples from"../components/Edit/Edit-kdzl/Ples"
import Limit from"../components/Edit/Edit-kdzl/Limit"
import Biology from"../components/Edit/Edit-kdzl/Biology"
import Chemistry from"../components/Edit/Edit-kdzl/Chemistry"
import Mathematics from"../components/Edit/Edit-kdzl/Mathematics"
import Physics from"../components/Edit/Edit-kdzl/Physics"
import English from"../components/Edit/Edit-kdzl/English"
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

// 登录详情页
import Information from "../components/My/Information";
import Attention from "../components/My/Attention";
import Collection from "../components/My/Collection";




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
        //练习下的路由
        {
          path:"/edit",
          name:"Edit",
          component:Edit,
          
        },
        //考点专练路由
        {
        		path:"/kdzl",
          	name:"EditKdzl",
          	component:EditKdzl,
        },
        //题库选择路由
        {
        		path:"/textgit",
          	name:"TextGit",
          	component:TextGit,
          	children:[
          	{
          		path:"/textgit/ples",
          	name:"Ples",
          	component:Ples,
          	},
          	{
          		path:"/textgit/limit",
          	name:"Limit",
          	component:Limit,
          	},
          	{
          		path:"/textgit/biology",
          	name:"Biology",
          	component:Biology,
          	},
          	{
          		path:"/textgit/chemistry",
          	name:"Chemistry",
          	component:Chemistry,
          	},
          	{
          		path:"/textgit/mathematics",
          	name:"Mathematics",
          	component:Mathematics,
          	},
          	{
          		path:"/textgit/physics",
          	name:"Physics",
          	component:Physics,
          	},
          	{
          		path:"/textgit/english",
          	name:"English",
          	component:English,
          	}
          	]
         },
  
        {
          path:"/my",
          name:"My",
          component:My
        },
        {
          path:"/",
          redirect:"/home"
        }
      ]
    	},
    	{
					path:"/information",
					component:Information
				},
				{
					path:"/attention",
					component:Attention
				},
				{
					path:"/collection",
					component:Collection
				}
				
  ,
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
