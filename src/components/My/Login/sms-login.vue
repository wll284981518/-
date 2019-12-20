<template>
    <div class='sms-login'>
        <div class="fy-content">
            <div class="fy_content">
                <!-- 注册/验证码登录 logo -->
                <div class="fy_top">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
                </div>
                <!-- 注册/验证码登录 主体 -->
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入手机号" v-model='fy_zc_sjh'>
                </div>
                <div class="fy_num">
                    <input type="password" placeholder="请输入短信验证码">
                    <span class="fy_sms">获取验证码</span>
                </div>
                <div class="fy_others">
                    <span>*未注册的手机号将自动注册</span>
                    <!-- 点击跳转到登录页面 -->
                    <span @click='fy_toLogin()'>使用密码登录</span>
                </div>
            </div>
            <!-- 登录按钮 -->
            <div class="fy_login">
                <!-- 点击跳转到设置密码路由 -->
                <van-button round type="warning" eb6100 size='large' class="fy_button" @click='fy_toSetpass()'>登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sms-login",
        data(){
            return{
                fy_zc_sjh:""
            }
        },
        methods:{
            // 跳转到登录页面
            fy_toLogin(){
                this.$router.push("/login")
            },
            // 跳转到设置密码页面
            fy_toSetpass(){
                var arr = JSON.parse(localStorage.getItem('dl'))||[];
                if(this.fy_zc_sjh==''){
                    alert("手机号不能为空")
                }
              
                this.$router.push({path:'/set-pass',query:{zc_sjh:this.fy_zc_sjh}})
            }
        }
    }
</script>

<style lang='scss' scoped>
html,body,.sms-login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .fy-content{
        width: 100%;
        overflow:auto;
        flex:1;
         .fy_content{
       width: 100%;
       .fy_top{
           width: 100%;
           img{
               width: 60%;
                margin: 1rem auto;
                display: block;
           }
       }
       .fy_num{
           font-size: 0.3rem;
           width: 5rem;
           margin: 0 auto;
           position: relative;
           input{
               border:0;
               display: block;
               margin: 0 auto;
                box-sizing: border-box;
                padding: 0.3rem 0;
                height: 100%;
                font-size: 0.25rem;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                line-height: 0.3rem;
                float: left;
                outline: none;
           }
           .fy_sms{
               position: absolute;
               right: 0;
               top: 0.3rem;
               color: orange;
               font-size: 0.2rem;
           }
       }
       .fy_others{
           width: 5rem;
           display: flex;
           justify-content: space-between;
           margin: 0 auto;
    
           span{
                font-size: 0.2rem;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #999;
           }
       }
    }
    .fy_login{
        width: 6.4rem;
        height: 1.2rem;
        text-align: center;
        .fy_button{
            width: 80%;
            font-size: 0.25rem;
             margin-left: 0;
        }
    }
    }
}
</style>
