<template>
<!--  已上课-->
    <div class="already">
      <ul>
        <li>
            <div class="already-li">
              <div class="already-top">
                <img src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg" alt="">
                <h1>
                  <p>2019.05.05 10:30~11:30</p>
                  <p>李想老师（25分钟）<span>已完成</span></p>
                  <p>学员开课前5分钟课可进入教室</p>
                </h1>
              </div>
              <ol>
                <li style="border-radius: 0 0 0 0.2rem">
                  <i class="fa fa-comments" aria-hidden="true" style="color: #ffab32"></i>
                  <p>学生评论</p>
                </li>
                <li>
                  <i class="fa fa-video-camera" aria-hidden="true" style="color: #7faeee"></i>
                  <p>查看回放</p>
                </li>
                <li style="border-radius: 0 0  0.2rem 0">
                  <i class="fa fa-user" aria-hidden="true" style="color: #bfbfbf"></i>
                  <p>点评学生</p>
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
                <p>李想老师（25分钟）<span>已完成</span></p>
                <p>学员开课前5分钟课可进入教室</p>
              </h1>
            </div>
            <ol>
              <li style="border-radius: 0 0 0 0.2rem">
                <i class="fa fa-comments" aria-hidden="true" style="color: #ffab32"></i>
                <p>学生评论</p>
              </li>
              <li>
                <i class="fa fa-video-camera" aria-hidden="true" style="color: #7faeee"></i>
                <p>查看回放</p>
              </li>
              <li style="border-radius: 0 0  0.2rem 0">
                <i class="fa fa-user" aria-hidden="true" style="color: #f39f65"></i>
                <p>点评学生</p>
              </li>
            </ol>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Already"
    }
</script>

<style lang="scss">
   .already{
     width: 100%;
     margin-top: 0.24rem;
     ul{
       width: 6rem;
       margin: 0 auto;
       li{
         width: 100%;
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
   }
</style>
