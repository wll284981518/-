<template>
<!--  待上课-->
    <div class="wait">
      <ul>
        <li>
           <p>进入课堂</p>
          <div class="already-li">
            <div class="already-top">
              <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
              <h1>
                <p>2019.05.05 10:30~11:30</p>
                <p>李想老师（25分钟）</p>
                <p>学员开课前5分钟课可进入教室</p>
              </h1>
            </div>
            <ol>
              <li style="border-radius: 0 0 0 0.15rem">
                <i class="fa fa-cloud-upload" aria-hidden="true" style="color: #f67b78"></i>
                <router-link tag="p" to="/upload">上传资料</router-link>
              </li>
              <li style="border-radius: 0 0  0.15rem 0; border-left:1px solid #f1f1f1" @click="jump()">
                <i class="fa fa-wheelchair-alt" aria-hidden="true" style="color: #ae95f3"></i>
                <p>我要请假</p>
              </li>
            </ol>
          </div>
        </li>
        <li>
           <p>进入课堂</p>
          <div class="already-li">
            <div class="already-top">
              <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
              <h1>
                <p>2019.05.05 10:30~11:30</p>
                <p>李想老师（25分钟）</p>
                <p>学员开课前5分钟课可进入教室</p>
              </h1>
            </div>
            <ol>
              <li style="border-radius: 0 0 0 0.15rem">
                <i class="fa fa-cloud-upload" aria-hidden="true" style="color: #f67b78"></i>
                <router-link tag="p" to="/upload">上传资料</router-link>
              </li>
              <li style="border-radius: 0 0  0.15rem 0; border-left:1px solid #f1f1f1" @click="jump()">
                <i class="fa fa-wheelchair-alt" aria-hidden="true" style="color: #ae95f3"></i>
                <p>我要请假</p>
              </li>
            </ol>
          </div>
        </li>
      </ul>
      <!-- 请假框 -->
      <van-dialog v-model="show" class="jump">
                   <h1>请假</h1>
                   <h2>预约老师： <span>李想老师</span></h2>
                   <h2>预约老师： <span>2019.05.05 周一18:30</span></h2>
                   <h3>预约支付的学习币将退还至您的账户中</h3>
                   <h4>
                     <p id="qing-pA" @click="tag()">再想想</p>
                     <p id="qing-pB" @click="enter()">确认</p>
                   </h4>
      </van-dialog>
    </div>
</template>

<script>
    export default {
        name: "Wait",
        mounted(){
      
        },
       data() {
           return {
             show: false
              };
          },
          methods:{
            // 请假弹出框
               jump(){
                 this.show = true
               },
              // 请假取消
              tag(){
                this.show = false
              },
              //  请假确认
               enter(){
                 this.show = false
               }
          }
    }
</script>

<style lang="scss">
  .wait{
    width: 100%;
    margin-top: 0.24rem;
    ul{
      width: 6rem;
      margin: 0 auto;
      li{
        width: 100%;
        // padding-top: 0.3rem;
        background: #fff;
        border-radius: 0.15rem;
        position: relative;
        &>p:nth-child(1){
          position: relative;
          top: 0;
          right: -4.95rem;
          width: 1.05rem;
          height: 0.34rem;
          font-size: 0.16rem;
          text-align: center;
          line-height: 0.34rem;
          color: #fff;
          background: #eb6100;
          border-radius: 0 0.15rem 0 0.15rem;
        }
        .already-li{
          margin-bottom: 0.24rem;
          width: 100%;
          .already-top{
            width: 100%;
            height: 1.16rem;
            display: flex;
            img{
              width: 0.74rem;
              height: 0.74rem;
              margin-left: 0.23rem;
              margin-right: 0.18rem;
            }
            h1{
              font-weight: normal;
              p:nth-child(1){
                font-size: 0.2rem;
                font-weight: 900;
                margin-bottom: 0.2rem;
              }
              p:nth-child(2){
                color: #999999;
                font-size: 0.2rem;
                display: flex;
                margin-bottom: 0.1rem;
                span{
                  display: block;
                  color: #eb6100;
                }
              }
              p:nth-child(3){
                color: #999999;
                font-size: 0.2rem;
              }
            }
          }
          ol{
            width: 100%;
            display: flex;
            border-top:1px solid #f1f1f1;
            li{
              width: 50%;
              height: 0.86rem;
              border-radius: 0;
              margin-bottom: 0;
              i{
                display: block;
                font-size: 0.34rem;
                text-align: center;
              }
              p{
                color: #999999;
                font-size: 0.2rem;
                text-align: center;
                margin-top: 0.12rem;
              }
            }
          }
        }
      }
    }
  }

</style>
