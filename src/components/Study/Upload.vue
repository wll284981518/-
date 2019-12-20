<template>
  <!-- 上传资料 -->
  <div class="upload">
    <div class="upload-top">
      <i class="fa fa-angle-left" @click="cz()"></i>
      <p>上传课前资料</p>
    </div>
    <div class="upload-content">
      <div class="upload-font">
        <h1>
          老师姓名：
          <span>李想老师</span>
        </h1>
        <h1>
          上课时间：
          <span>2019.05.05 10:30~11:30</span>
        </h1>
        <h1>
            资料备注：
            <br>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </h1>
        <h1>
            我的资料：
            <ul>
                <li>
                    <img src="../../../static/study-img/288915.jpg" alt="">
                </li>
                 <li>
                    <img src="../../../static/study-img/309203.jpg" alt="">
                </li>
                 <li>
                    <img src="../../../static/study-img/320663.jpg" alt="">
                </li>
            </ul>
        </h1>
      </div>
    </div>
    <div class="upload-bottom" @click="jump()">
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
  name: "Upload",
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
};
</script>

<style lang="scss">
body,
html,
.upload {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fff;
  .upload-top {
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
  .upload-content {
    width: 100%;
    flex: 1;
    overflow: auto;
    padding-top: 0.34rem;
    .upload-font {
      width: 100%;
      h1 {
        width: 5.86rem;
        font-weight: normal;
        color: #a1a1a1;
        font-size: 0.24rem;
        margin: 0 auto 0.34rem;
        span {
          display: inline-block;
          font-size: 0.24rem;
          color: #000;
        }
        textarea{
            margin-top: 0.32rem;
            width: 5.46rem;
            height: 1.1rem;
            padding: 0.2rem;
            border: 2px solid #ececec;
            border-radius:0.05rem;
            font-size: 0.24rem;
        }
        ul{
            margin-top: 0.38rem;
            width: 100%;
            display: flex;
            li{
              width: 33.3%;
              img{
                  width: 1.8rem;
                  height: 1.8rem;
              }
            }
        }
      }
    }
  }
  .upload-bottom {
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