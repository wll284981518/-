<template>
    <div class="set-pass">
        <div class="fy_content">
            <!-- 设置密码头部 -->
            <div class="fy_header">
                <h3>设置密码</h3>
                <!-- 点击跳转到信息填写路由 -->
                <span  @click='fy_toSetmessage()'>跳过</span>
            </div>
            <!-- 设置密码主体 -->
            <div class="fy_box">
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请输入登录密码" v-model='fy_zc_pass'>
                </div>
                <div class="fy_num">
                    <input type="text" maxlength="11" placeholder="请再次输入密码">
                </div>
                <!-- 确定按钮 -->
                <div class="fy_login">
                    <!-- 点击跳转到信息填写路由 -->
                    <van-button round type="warning" eb6100 size='large' class="fy_button" @click='fy_toSetmessage()'>确定</van-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "set-pass",
        data(){
            return{
                fy_zc_pass:"",
                id:0
              
            }
        },
        mounted(){
            console.log(this.$route.query.zc_sjh)
        },
        methods:{
            // 跳转到信息填写路由
            fy_toSetmessage(){
                console.log(this.$route.query.zc_sjh)
                var arr = JSON.parse(localStorage.getItem('dl'))||[];
                this.id+=1;
                var obj = {'id':this.id,'zc_sjh':this.$route.query.zc_sjh,'zc_pass':this.fy_zc_pass}
                console.log(obj)
                arr.unshift(obj)
                localStorage.setItem('dl',JSON.stringify(arr))
                this.$router.push('/set-message')
            }
        }
    }
</script>

<style lang='scss' scoped>
html,body,.set-pass{
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
            text-align: right;
        }
        span{
            display: block;
            font-size: 0.25rem;
            height: 100%;
            width: 0.8rem;
            line-height: 0.75rem;
        }
        
    }
    .fy_box{
        width: 100%;
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
