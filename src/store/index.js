//--->引入vue、vuex模块
import Vue from "vue";
import vuex from 'vuex';
Vue.use(vuex);

//-->创建
var store=new vuex.Store({
    state:{
        list:[],
    }
    
})

//--->导出
export default store;