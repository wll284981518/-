<template>
<!-- 课后作业 -->
  <div class="tack">
      <div class="tack-top">
           <i class="fa fa-angle-left" @click="cz()"></i>
           <p>上传课后作业</p>
      </div>
      <div class="tack-content">

      </div>
     <div class="tack-bottom" @click="jump()">
        <p>提交</p>
     </div>
      <van-dialog v-model="show" style="width:2.5rem;height:2.2rem;"> 
        <h1>提交成功</h1>
         <h4 id="dialog">
             <p id="qing-pB" @click="enter()">确认</p>
         </h4>
    </van-dialog>
  </div>
</template>

<script>
export default {
      name:"Tack",
       data() {
    return {
      show: false
    };
  },
  methods: {
    cz() {
      this.$router.go(-1);
    },
    jump(){
        this.show = true;
    },
    tag(){
        this.show = false
    },
    enter(){
        this.show = false
    }
  }
}
</script>

<style lang="scss">
   body,html,.tack{
       width: 100%;
       height: 100%;
       display: flex;
       flex-direction: column;
       .tack-top{
            height: 0.84rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #222222;
            i {
            display: inline-block;
            font-size: 0.5rem;
            color: #333333;
            margin-left: 0.3rem;
            }
            p {
            font-size: 0.26rem;
            margin-right: 2.36rem;
            }
       }
       .tack-content{
           width: 100%;
           flex:1;
           overflow: auto;
       }
       .tack-bottom{
            width: 100%;
            height: 0.84rem;
            background: #fa5600;
            p {
            font-size: 0.28rem;
            color: #fff;
            text-align: center;
            line-height: 0.84rem;
            }
       }
       #dialog{
        font-weight: normal;
        width: 2.5rem;
        display: flex;
        border-top: 1px solid #b1b1b1;
        #qing-pB {
            margin-top: 0;
            width: 2.5rem;
            font-size: 0.26rem;
            text-align: center;
            line-height: 1.05rem;
            color: #ee7521;
            border-left: 1px solid #b1b1b1;
            }
    }
   }
</style>