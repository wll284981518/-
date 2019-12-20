<template>
  <!--        未登录样式-->
  <div class="fdf-content">
    <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt="">
    <p>请登录后查看相关内容</p>
    <van-button type="default" color="#eb6100" @click="push()">登录/注册</van-button>
  </div>
</template>

<script>
    export default {
        name: "Nologin",
        methods:{
            push(){
                this.$router.push("/my")
            }
        }
    }
</script>

<style lang="scss">
  .fdf-content{
    width: 100%;
    height: 5.3rem;
    img{
      width: 3.04rem;
      height: 2.2rem;
      display: block;
      margin: 1.7rem auto 0.2rem;
    }
    p{
      text-align: center;
      color: #b7b7b7;
      font-size: 0.24rem;
      font-family: PingFangSC-Regular;
      font-weight: 500;
    }
    .van-button--normal{
      font-size: 0.22rem;
      text-align: center;
    }
  }
</style>
