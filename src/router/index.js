import Vue from 'vue'
import Router from 'vue-router'
//总组件
import Index from "../components/Index/Index";
//首页组件
import Home from "../components/home/Home";
//首页详情页
import Xiang from "@/components/home/Xiang"
//引入立即报名的页面
import Bao from "@/components/home/Bao"
//--->首页学习日历
import Ri from "@/components/home/Ri"
//课程组件
import Course from "../components/Course/Course";
// 我是课程组件的详情页
import Apply from "../components/Course/apply"
// 我是课程组件的详情页的立即注册
import Details from "../components/Course/Details"
//练习组件
import Edit from "../components/Edit/Edit";
import EditKdzl from "../components/Edit/Edit-kdzl/Edit-kdzl"
import TextGit from "../components/Edit/Edit-kdzl/Edit-kdzl"
import Edittjlx from "../components/Edit/Edit-tjlx/Edit-tjlx"
import Editfzmk from "../components/Edit/Edit-fzmk/Edit-fzmk"
import Editctjl from "../components/Edit/Edit-ctjl/Edit-ctjl"
import Editcpjl from "../components/Edit/Edit-cpjl/Edit-cpjl"
import Editxtsc from "../components/Edit/Edit-xtsc/Edit-xtsc"

//题库组件
import Ples from "../components/Edit/Edit-kdzl/Ples"
import Limit from "../components/Edit/Edit-kdzl/Limit"
import Biology from "../components/Edit/Edit-kdzl/Biology"
import Chemistry from "../components/Edit/Edit-kdzl/Chemistry"
import Mathematics from "../components/Edit/Edit-kdzl/Mathematics"
import Physics from "../components/Edit/Edit-kdzl/Physics"
import English from "../components/Edit/Edit-kdzl/English"
//约课组件
import Study from "../components/Study/Study";
// 2019/12/20---付东飞约课上传资料组件
import Upload from "../components/Study/Upload.vue";
// 2019/12/20---付东飞约课课后作业组件
import Tack from "../components/Study/Tack.vue"
// 2019/12/20---付东飞约课视频回放组件
import Playblack from "../components/Study/Playblack.vue"
//我的组件
import My from "../components/My/My";
// 一对一路由文件
import Oto from "../components/home/oto/onetoone.vue"
// 一对一里面搜索文件
import Serch from "../components/home/oto/serch.vue"
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
//设置退出
import Setup from "../components/My/Setup";
Vue.use(Router);
export default new Router({
  routes: [{
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
          path: "/home",
          name: "Home",
          component: Home,
        },
        {
          path: "/course",
          name: "Course",
          component: Course,
        },
        // 约课路由
        {
          path: "/study",
          name: "Study",
          component: Study
        },
        //练习下的路由
        {
          path: "/edit",
          name: "Edit",
          component: Edit,
        },
        //考点专练路由
        {
          path: "/kdzl",
          name: "EditKdzl",
          component: EditKdzl,
        },
        //题库选择路由
        {
          path: "/textgit",
          name: "TextGit",
          component: TextGit,
          children: [{
              path: "/textgit/ples",
              name: "Ples",
              component: Ples,
            },
            {
              path: "/textgit/limit",
              name: "Limit",
              component: Limit,
            },
            {
              path: "/textgit/biology",
              name: "Biology",
              component: Biology,
            },
            {
              path: "/textgit/chemistry",
              name: "Chemistry",
              component: Chemistry,
            },
            {
              path: "/textgit/mathematics",
              name: "Mathematics",
              component: Mathematics,
            },
            {
              path: "/textgit/physics",
              name: "Physics",
              component: Physics,
            },
            {
              path: "/textgit/english",
              name: "English",
              component: English,
            }
          ]
        },

        {
          path: "/my",
          name: "My",
          component: My,
          meta: {
            type: 'login' //是否需要判断登录
          }
        },
        {
          path: "/xtsc",
          name: "Editxtsc",
          component: Editxtsc,
        },
        {
          path: "/tjlx",
          name: "Edittjlx",
          component: Edittjlx,
        },
        {
          path: "/ctjl",
          name: "Editctjl",
          component: Editctjl,
        },
        {
          path: "/cpjl",
          name: "Editcpjl",
          component: Editcpjl,
        },
        {
          path: "/fzmk",
          name: "Editfzmk",
          component: Editfzmk,
        },

        {
          path: "/my",
          name: "My",
          component: My
        },
        {
          path: "/tearch",
          name: "tearch",
          component: Xiang,
        },
        {
          path:"/apply",
          name:"apply",
          component: Apply
        },
        {
          path: "/bao",
          name: "bao",
          component: Bao
        },
        // 约课上传资料路由
        {
          path: "/upload",
          name: "Upload",
          component: Upload
        },
        // 课后作业
        {
          path: "/tack",
          name: "Tack",
          component: Tack
        },
        // 课后作业
        {
          path: "/playblack",
          name: "Playblack",
          component: Playblack
        },
        {
            path: "/",
          redirect: "/home"
        }
      ]
    },
    {
      path: "/oto",
      name: "oto",
      component: Oto
    },
    {
      path: "/serch",
      name: "serch",
      component: Serch
    },
    {
      path: "/information",
      component: Information
    },
    {
      path: "/attention",
      component: Attention
    },
    {
      path: "/collection",
      component: Collection
    },
    {
      path: "/login",
      name: 'Login',
      component: Login
    },
    {
      path: "/forget",
      name: "forget",
      component: Forget
    },
    {
      path: "/sms-login",
      name: "sms-login",
      component: Sms
    },
    {
      path: "/set-pass",
      name: "set-pass",
      component: Setpass
    },
    {
      path: "/set-message",
      name: "set-message",
      component: Setmessage
    },
    //-->首页详情页跳转
    {
      path: "/tearch",
      name: "tearch",
      component: Xiang,
    },
    //--->首页详情页立即报名跳转
    {
      path: "/bao",
      name: "bao",
      component: Bao
    },
    //-->首页学习日历跳转
    {
      path: "/ri",
      name: "ri",
      component: Ri
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
    },
    {
      path:"/setup",
      component:Setup
    },
    {
      path: "/details",
      name: "details",
      component: Details
    }
  ]
})
