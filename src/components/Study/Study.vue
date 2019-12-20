<template>
    <div>
      约课
    <div class="fdf-study">
<!--      约课注释-->
      <div class="fdf-stu-header">
        <div class="fdf-stu-top">
          <h1>约课记录</h1>
        </div>
<!--        任务-->
        <div class="fdf-stu-task">
          <van-tabs v-model="active" line-width="16px" title-active-color="#eb6100" @click="tag">
            <van-tab title="待上课"></van-tab>
            <van-tab title="已上课"></van-tab>
            <van-tab title="已取消"></van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="fdf-stu-content">
<!--             组件-->
<!--        未登录-->
        <Nologin v-show="nologin"></Nologin>
<!--        待上课-->
        <Wait v-show="wait"></Wait>
<!--        已上课-->
        <Already v-show="already"></Already>
<!--        已取消-->
        <Cancel v-show="cancel"></Cancel>
      </div>
    </div>
    </div>
</template>

<script >

  import Nologin from "./Nologin";
  import Already from "./Already";
  import Cancel from "./Cancel";
  import Wait from "./Wait";
    export default {
        name: "Study",
        components: {Cancel, Wait, Already, Nologin},
        data() {
            return {
                active: 'a',
            //    未登录状态
                nologin:true,
            //    待上课状态
                wait:false,
            //    已上课状态
                already:false,
            //    已取消状态
                cancel:false
            };
        },
        methods:{
            tag(name,title){
               console.log(title)
                if(title == "待上课"){
                    this.nologin = false;
                    this.wait = true;
                    this.already = false;
                    this.cancel = false
                } else if(title == "已上课"){
                    this.wait = false;
                    this.nologin = false;
                    this.already = true;
                    this.cancel = false
                }else if(title == "已取消"){
                    this.nologin = false;
                    this.wait = false;
                    this.already = false;
                    this.cancel = true;
                }
            }
        }
    }
</script>

<style lang="scss">
      body,html,.fdf-study {
        background: #f0f2f5;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /*头部*/
        .fdf-stu-header {
          width: 100%;

          .fdf-stu-top {
            width: 100%;
            height: 0.75rem;
            background: #ffffff;

            h1 {
              font-size: 0.3rem;
              text-align: center;
              font-weight: normal;
              line-height: 0.75rem;
              color: #595959;
            }
          }

          /*任务*/
          .fdf-stu-task {
            width: 100%;
            height: 0.76rem;
            background: #fff;

            .van-tab {
              position: relative;
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              flex: 1;
              box-sizing: border-box;
              min-width: 0;
              padding: 0 5px;
              font-size: 24px;
              line-height: 0.76rem;
              text-align: center;
              cursor: pointer;
            }
          }
        }
          /*身体*/
          .fdf-stu-content {
            width: 100%;
            flex: 1;
            overflow: auto;
          }
      }
</style>
