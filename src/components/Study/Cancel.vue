<template>
<!--  已取消-->
    <div class="cancel">
      <ul>
        <li>
          <div class="already-li">
            <div class="already-top">
              <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
              <h1>
                <p>2019.05.05 10:30~11:30</p>
                <p>李想老师（25分钟）<span>已取消</span></p>
                <p>学员开课前5分钟课可进入教室</p>
              </h1>
            </div>
            <ol>
              <li style="border-radius: 0 0 0 0.2rem"  @click="show=true">
                <i class="fa fa-comments" aria-hidden="true" style="color: #ffab32"></i>
                <p>取消原因</p>
              </li>
              <li>
                <i class="fa fa-refresh" aria-hidden="true" style="color: #7faeee"></i>
                <p>重新预约</p>
              </li>
              <li style="border-radius: 0 0  0.2rem 0" @click="hide=true">
                <i class="fa fa-user" aria-hidden="true" style="color: #bfbfbf"></i>
                <p>查看信息</p>
              </li>
            </ol>
          </div>
        </li>
        <li>
          <div class="already-li">
            <div class="already-top">
              <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
              <h1>
                <p>2019.05.05 10:30~11:30</p>
                <p>李想老师（25分钟）<span>已取消</span></p>
                <p>学员开课前5分钟课可进入教室</p>
              </h1>
            </div>
            <ol>
              <li style="border-radius: 0 0 0 0.2rem" @click="show=true">
                <i class="fa fa-comments" aria-hidden="true" style="color: #ffab32"></i>
                <p>取消原因</p>
              </li>
              <li>
                <i class="fa fa-refresh" aria-hidden="true" style="color: #7faeee"></i>
                <p>重新预约</p>
              </li>
              <li style="border-radius: 0 0  0.2rem 0" @click="hide=true">
                <i class="fa fa-user" aria-hidden="true" style="color: #bfbfbf"></i>
                <p>查看信息</p>
              </li>
            </ol>
          </div>
        </li>
      </ul>
      <!-- 弹出框 -->
      <van-dialog v-model="show" style="width:5.8rem; height:5.6rem" id="cancel">
        <h1>提示</h1>
        <h2>老师：<span>李想老师</span>  </h2>
        <h3>
          <p>标签：</p>
          <ul>
            <li @click="bg1 = !bg1" :class="{active:bg1}">
              <span >效果好</span>
            </li>
            <li @click="bg2 = !bg2" :class="{active:bg2}">
              <span >效果好</span>
            </li>
             <li @click="bg3 = !bg3" :class="{active:bg3}">
              <span >效果好</span>
            </li>
             <li @click="bg4 = !bg4" :class="{active:bg4}">
              <span >效果好</span>
            </li>
             <li @click="bg5 = !bg5" :class="{active:bg5}">
              <span >效果好</span>
            </li>
             <li @click="bg6 = !bg6" :class="{active:bg6}">
              <span >效果好</span>
            </li>
              <li @click="bg7 = !bg7" :class="{active:bg7}">
              <span >效果好</span>
            </li>
          </ul>
        </h3>
        <h4>
          <p>内容：</p>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </h4>
        <ol>
          <li @click="show = false">取消</li>
          <li style="border-left:2px solid #e6e6e6; color:#f84400" @click="show = false">确认</li>
        </ol>
      </van-dialog>
      <van-dialog v-model="hide">
                   <h1>已取消</h1>
                   <h2>取消老师： <span>李想老师</span></h2>
                   <h2>取消课时： <span>2019.05.05 周一18:30</span></h2>
                   <h3>预约支付的学习币将退还至您的账户中</h3>
                   <h4>
                     <p id="qing-pA" @click="hide=false">好的</p>
                     <p id="qing-pB" @click="hide=false">确认</p>
                   </h4>
      </van-dialog>
    </div>
</template>

<script>
    export default {
        name: "Cancel",
        data() {
                return {
                  show: false,
                  hide:false,
                  bg1:false,
                  bg2:false,
                  bg3:false,
                  bg4:false,
                  bg5:false,
                  bg6:false,
                  bg7:false,
                };
            }
    }
</script>

<style lang="scss">
  .cancel{
    width: 100%;
    margin-top: 0.24rem;
    ul{
      width: 6rem;
      margin: 0 auto;
      li{
        padding-top: 0.3rem;
        background: #fff;
        border-radius: 0.2rem;
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
              width: 33.3%;
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
    // 弹出框
     #cancel{
       h2{
         width: 5.2rem;
         font-weight: normal;
         font-size: 0.22rem;
         color: #6d6d6d;
         margin: 0 auto 0.48rem;
         span{
           display: inline-block;
           font-size: 0.22rem;
           color: #000;
         }
       }
       h3{
         text-align: left;
         font-weight: normal;
         margin: 0 auto;
         display: flex;
         p{
           font-size: 0.22rem;
           color: #6d6d6d;
            margin-left: 0.3rem;
         }
         ul{
           width: 4.8rem;
           display: flex;
           flex-wrap: wrap;
           li{
               height: 0.35rem;
               color: #eb6001;
               padding: 0 0.1rem 0;
               border: 2px solid #eb6001;
               border-radius: 0.05rem;
               margin-right: 0.1rem;
               margin-bottom:0.1rem; 
               display: flex;
               justify-content: space-between;
               align-items: center;
               font-size: 0.18rem;
               &.active{
                     background: #eb6001;
                     color: #fff;
               }
           }
         }
       }
       h4{
         width: 4.84rem;
         border-top: 0;
         margin-top: 0.3rem;
         margin-left: 0.3rem;
         display: flex;
         justify-content: space-between;
         p{
           font-size: 0.2rem;
           color: #2f2f2f;
         }
         textarea{
           width: 4.45rem;
           height: 1.06rem;
           border: 2px solid #e6e6e6;
           border-radius: 0.05rem;
         }
       }
       ol{
         border-top:2px solid #e6e6e6; 
         width: 100%;
         height: 0.9rem;
         display: flex;
         margin-top: 0.7rem;
         li{
             width: 50%;
             font-size: 0.26rem;
             text-align: center;
             line-height: 0.9rem;
         }
       }
     }
  }

</style>
