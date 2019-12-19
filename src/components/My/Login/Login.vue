<template>
    <div class="login">
        <div class="fy-content">
            <div class="fy_content">
                <div class="fy_top">
                    <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png" alt="">
                </div>
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入手机号">
                </div>
                <div class="fy_num">
                    <input type="password" placeholder="请输入密码">
                </div>
                <div class="fy_others">
                    <span @click='fy_toForget()'>找回密码</span>
                    <span @click='fy_toSms()'>注册/验证码登录</span>
                </div>
            </div>
            <div class="fy_login">
                <van-button round type="warning" eb6100 size='large' class="fy_button">登录</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            fy_toForget(){
                this.$router.push("/forget")
            },
            fy_toSms(){
                this.$router.push("/sms-login")
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
            
        }
    }

    }
}

   
</style>
