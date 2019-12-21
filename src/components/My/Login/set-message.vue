<template>
    <div class="set-message">
        <div class="fy_content">
            <!-- 信息填写头部 -->
            <div class="fy_header">
                <!-- 点击返回 -->
                <svg @click='fy_back()' xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" width="200" height="200" t="1576741849621" p-id="1176" version="1.1"><path d="M 248.986 562.401 l 433.21 440.056 a 72.28 72.28 0 0 0 102.145 0.805348 a 57.1797 57.1797 0 0 0 0.604011 -80.5348 l -454.35 -461.532 a 57.1797 57.1797 0 0 0 -80.8033 -0.939573 A 72.28 72.28 0 0 0 248.986 562.401 Z" p-id="1177" /><path d="M 340.527 552.402 l 440.056 -433.143 A 72.28 72.28 0 0 0 781.388 17.0465 a 57.1797 57.1797 0 0 0 -80.5348 -0.604011 L 238.986 470.726 a 57.1126 57.1126 0 0 0 -0.604011 80.8704 a 72.28 72.28 0 0 0 102.145 0.805348 Z" p-id="1178" /></svg>
                <h3>信息填写</h3>
            </div>
            <!-- 信息填写主体 -->
            <ul class="fy_box">
                <li>
                    <span>昵称</span>
                    <span>18532293703<svg xmlns="http://www.w3.org/2000/svg" class="icon next" viewBox="0 0 1024 1024" width="20" height="20" t="1576752047828" p-id="2008" version="1.1"><path fill="#87929a" d="M 350.208 88.064 c -19.456 0 -35.84 16.384 -35.84 35.84 c 0 11.264 6.144 21.504 14.336 28.672 L 716.8 540.672 L 329.728 928.768 c -9.216 6.144 -14.336 16.384 -14.336 28.672 c 0 19.456 16.384 35.84 35.84 35.84 c 11.264 0 21.504 -6.144 28.672 -14.336 l 392.192 -392.192 c 13.312 -13.312 19.456 -29.696 19.456 -47.104 s -6.144 -33.792 -19.456 -47.104 L 379.904 101.376 c -7.168 -8.192 -17.408 -13.312 -29.696 -13.312 Z" p-id="2009" /></svg></span>
                </li>
                 <li>
                    <span>性别</span>
                    <span>保密<svg xmlns="http://www.w3.org/2000/svg" class="icon next" viewBox="0 0 1024 1024" width="20" height="20" t="1576752047828" p-id="2008" version="1.1"><path fill="#87929a" d="M 350.208 88.064 c -19.456 0 -35.84 16.384 -35.84 35.84 c 0 11.264 6.144 21.504 14.336 28.672 L 716.8 540.672 L 329.728 928.768 c -9.216 6.144 -14.336 16.384 -14.336 28.672 c 0 19.456 16.384 35.84 35.84 35.84 c 11.264 0 21.504 -6.144 28.672 -14.336 l 392.192 -392.192 c 13.312 -13.312 19.456 -29.696 19.456 -47.104 s -6.144 -33.792 -19.456 -47.104 L 379.904 101.376 c -7.168 -8.192 -17.408 -13.312 -29.696 -13.312 Z" p-id="2009" /></svg></span>
                </li>
                 <li>
                    <span>出生日期</span>
                    <span>请选择<svg xmlns="http://www.w3.org/2000/svg" class="icon next" viewBox="0 0 1024 1024" width="20" height="20" t="1576752047828" p-id="2008" version="1.1"><path fill="#87929a" d="M 350.208 88.064 c -19.456 0 -35.84 16.384 -35.84 35.84 c 0 11.264 6.144 21.504 14.336 28.672 L 716.8 540.672 L 329.728 928.768 c -9.216 6.144 -14.336 16.384 -14.336 28.672 c 0 19.456 16.384 35.84 35.84 35.84 c 11.264 0 21.504 -6.144 28.672 -14.336 l 392.192 -392.192 c 13.312 -13.312 19.456 -29.696 19.456 -47.104 s -6.144 -33.792 -19.456 -47.104 L 379.904 101.376 c -7.168 -8.192 -17.408 -13.312 -29.696 -13.312 Z" p-id="2009" /></svg></span>
                </li>
                 <li is-link @click="showPopup">
                     <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }"></van-popup>
                     
                    <span>所在城市</span>
                    <span>请选择<svg xmlns="http://www.w3.org/2000/svg" class="icon next" viewBox="0 0 1024 1024" width="20" height="20" t="1576752047828" p-id="2008" version="1.1"><path fill="#87929a" d="M 350.208 88.064 c -19.456 0 -35.84 16.384 -35.84 35.84 c 0 11.264 6.144 21.504 14.336 28.672 L 716.8 540.672 L 329.728 928.768 c -9.216 6.144 -14.336 16.384 -14.336 28.672 c 0 19.456 16.384 35.84 35.84 35.84 c 11.264 0 21.504 -6.144 28.672 -14.336 l 392.192 -392.192 c 13.312 -13.312 19.456 -29.696 19.456 -47.104 s -6.144 -33.792 -19.456 -47.104 L 379.904 101.376 c -7.168 -8.192 -17.408 -13.312 -29.696 -13.312 Z" p-id="2009" /></svg></span>
                </li>
                 <li>
                    <span>学科</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" class="icon next" viewBox="0 0 1024 1024" width="20" height="20" t="1576752047828" p-id="2008" version="1.1"><path fill="#87929a" d="M 350.208 88.064 c -19.456 0 -35.84 16.384 -35.84 35.84 c 0 11.264 6.144 21.504 14.336 28.672 L 716.8 540.672 L 329.728 928.768 c -9.216 6.144 -14.336 16.384 -14.336 28.672 c 0 19.456 16.384 35.84 35.84 35.84 c 11.264 0 21.504 -6.144 28.672 -14.336 l 392.192 -392.192 c 13.312 -13.312 19.456 -29.696 19.456 -47.104 s -6.144 -33.792 -19.456 -47.104 L 379.904 101.376 c -7.168 -8.192 -17.408 -13.312 -29.696 -13.312 Z" p-id="2009" /></svg></span>
                </li>
                <li>
                    <span>年纪</span>
                    <span>请选择<svg xmlns="http://www.w3.org/2000/svg" class="icon next" viewBox="0 0 1024 1024" width="20" height="20" t="1576752047828" p-id="2008" version="1.1"><path fill="#87929a" d="M 350.208 88.064 c -19.456 0 -35.84 16.384 -35.84 35.84 c 0 11.264 6.144 21.504 14.336 28.672 L 716.8 540.672 L 329.728 928.768 c -9.216 6.144 -14.336 16.384 -14.336 28.672 c 0 19.456 16.384 35.84 35.84 35.84 c 11.264 0 21.504 -6.144 28.672 -14.336 l 392.192 -392.192 c 13.312 -13.312 19.456 -29.696 19.456 -47.104 s -6.144 -33.792 -19.456 -47.104 L 379.904 101.376 c -7.168 -8.192 -17.408 -13.312 -29.696 -13.312 Z" p-id="2009" /></svg></span>
                </li>
            </ul>
            <!-- 提交按钮 -->
            <div class="fy_login">
                <!-- 点击跳转到My路由 -->
                <van-button type="warning" eb6100 size='large' class="fy_button" @click='fy_toMy()'>提交信息</van-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "set-message",
        data(){
            return{
                show: false
            }
        },
        methods:{
            // 返回到设置密码路由
            fy_back(){
                this.$router.push("/set-pass")
            },
            // 跳转到my路由
            fy_toMy(){
                var dl = true
                localStorage.setItem('login',JSON.stringify(dl))
                this.$router.push("/my")
            },
             showPopup() {
                this.show = !this.show;
                }
            }
        }
</script>

<style lang='scss' scoped>
html,body,.set-message{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #eee;
}
.fy_content{
    width: 100%;
    .fy_header{
        width: 100%;
        height:0.75rem ;
        display: flex;
        padding:0 0.1rem;
        justify-content: space-between;
        background: #fff;
        h3{
            width:60%;
            font-size: 0.3rem;
            line-height: 0.75rem;
            font-weight: 500;
            text-align: left;
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
        background: #fff;
        margin-top: 0.2rem;
        li{
            width: 80%;
            display: flex;
            justify-content: space-between;
            padding: 0 0.5rem;
            height: 0.9rem;
            span{
                font-size: 0.25rem;
                height: 0.9rem;
                line-height: 0.9rem;
                position: relative;
                margin-right:0.2rem;
                svg{
                    position:absolute;
                    right: -0.5rem;
                    top: 0.35rem;
                }

            }
        }

    }
           .fy_login{
        width: 6.4rem;
        height: 1.2rem;
        text-align: center;
        .fy_button{
            width: 65%;
            font-size: 0.25rem;
            margin-left: 0;
        }
    }
}
</style>
