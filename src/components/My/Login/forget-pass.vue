<template>
    <div class="forget-pass">
        <div class="fy_content">
            <!-- 找回密码头部 -->
            <div class="fy_header">
                <!-- 点击返回 -->
                <svg @click='fy_back()' xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="200" height="200" t="1576741849621" p-id="1176" version="1.1"><path d="M 248.986 562.401 l 433.21 440.056 a 72.28 72.28 0 0 0 102.145 0.805348 a 57.1797 57.1797 0 0 0 0.604011 -80.5348 l -454.35 -461.532 a 57.1797 57.1797 0 0 0 -80.8033 -0.939573 A 72.28 72.28 0 0 0 248.986 562.401 Z" p-id="1177" /><path d="M 340.527 552.402 l 440.056 -433.143 A 72.28 72.28 0 0 0 781.388 17.0465 a 57.1797 57.1797 0 0 0 -80.5348 -0.604011 L 238.986 470.726 a 57.1126 57.1126 0 0 0 -0.604011 80.8704 a 72.28 72.28 0 0 0 102.145 0.805348 Z" p-id="1178" /></svg>
                <h3>找回密码</h3>
            </div>
            <!-- 找回密码主体 -->
            <div class="fy_box">
                <div class="fy_nums">
                    <input type="text" maxlength="11" placeholder="请输入手机号">
                    <span>获取验证码</span>
                </div>
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入验证码">
                </div>
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入密码">
                </div>
                <!-- 点击确定按钮 -->
                <div class="fy_login">
                    <van-button round type="warning" eb6100 size='large' class="fy_button">确定</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "forget-pass",
        methods:{
            // 点击返回到登录路由
            fy_back(){
                this.$router.push("/login")
            }
        }
    }
</script>

<style lang='scss' scoped>
html,body,.forget-pass{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.fy_content{
    width: 100%;
    .fy_header{
        width: 100%;
        height:0.75rem ;
        display: flex;
        padding:0 0.1rem;
        justify-content: space-between;
        h3{
            width:60%;
            font-size: 0.3rem;
            line-height: 0.75rem;
            font-weight: 500;
        }
        svg{
            display: block;
            font-size: 0.20rem;
            width: 0.25rem;
            height: 100%;
        }
        
    }
    .fy_box{
        width: 100%;
        .fy_nums{
            font-size: 0.3rem;
            width: 5rem;
            padding: 0 0.5rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
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
           span{
               font-size: 0.20rem;
               color: orange;
            
               
           }
       }
       .fy_num{
            font-size: 0.3rem;
            width: 5rem;
            padding: 0 1.1rem;
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
