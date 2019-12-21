<template>
    <div class="login">
        <div class="fy-content">
            <div class="fy_content">
                <!-- logo -->
                <div class="fy_top">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
                </div>
                <!-- 输入手机号 -->
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入手机号" v-model='fy_dl_sjh'>
                </div>
                <div class="fy_num">
                    <!-- 输入密码 -->
                    <input type="text" placeholder="请输入密码" v-model='fy_dl_pass'>
                    <!-- fy_dl_pass绑定手机号的值 -->
                </div>
                <div class="fy_others">
                    <!-- 跳转找回密码路由 -->
                    <span @click='fy_toForget()'>找回密码</span>
                    <!-- 跳转注册/验证码登录路由 -->
                    <span @click='fy_toSms()'>注册/验证码登录</span>
                </div>
            </div>
            <!-- 登录按钮 -->
            <div class="fy_login">
                <van-button round type="warning" eb6100 size='large' class="fy_button" @click='fy_dl()'>登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    // 引入axios请求
    import axios from "axios";
    export default {
        name: "login",
        data(){
            return{
                fy_dl_sjh:"",
                fy_dl_pass:"",
                list:JSON.parse(localStorage.getItem('dl'))||[]
            }
        },
        methods:{
            // 跳转到找回密码路由
            fy_toForget(){
                this.$router.push("/forget")
            },
            // 跳转到注册/验证码登录路由
            fy_toSms(){
                this.$router.push("/sms-login")
            },
            fy_dl(){
                if( this.fy_dl_sjh==''|| this.fy_dl_pass==''){
                    alert('用户名或密码不能为空')
                }else{
                    for(let i=0;i<this.list.length;i++){
                        if(this.fy_dl_sjh===this.list[i].zc_sjh && this.fy_dl_pass===this.list[i].zc_pass){
                            var dl = true
                            localStorage.setItem('login',JSON.stringify(dl))
                            this.$router.push('/my')
                            return false
                        }
                    }
                    alert('用户名或密码不正确')
                    this.fy_dl_sjh=this.fy_dl_pass='';
                    return false
                }
            }
        }
    }
</script>

<style lang='scss' scoped>
html,body,.login{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    .fy-content{
        width: 100%;
        overflow: auto;
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
