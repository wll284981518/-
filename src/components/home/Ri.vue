<template>
  <div class="zjb_riLi">
    <!-- 日历头 -->
    <div class="zjb_riLi_head">
            <!-- 头部布局开始 -->
           <span> <img @click="zjb_home" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC" alt=""></span>
            <p>学习日历</p>
            <!-- 头部布局结束 -->
    </div>
    <p class="zjb_pp">{{nowYear}}年{{nowMonth}}月 <span @click="zjb_jian">&lt;</span> <span @click="zjb_jia"> &gt; </span></p>
   <div>
        <el-calendar v-model="value" >
        </el-calendar>
   </div>
    <p class="zjb_riLi_end">{{ nowMonth }}月{{nowDate}}日 <span>当天0节课</span></p>
   <!-- 页面结束布局 -->
  </div>
</template>

<style lang="scss">
.active{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    background: orange;
}
.zjb_riLi{
    width: 100%;
    height: 100%;
    font-size: .16rem;
    line-height: .2rem;
}
.zjb_riLi_head{
     height: .8rem;
    background: linear-gradient(180deg,#63b7fe,#4e7de3);
    display: flex;
    margin-bottom: .8rem;
   &>span{
       display: inline-block;
       width: .6rem;
       height: .75rem;
    //    border: 1px solid #000;
       text-align: center;
       line-height: .9rem;
        &>img{
        height: .27rem;
        width: .15rem;
        // border: 1px solid #000;
        font-size: .4rem;
         }
    }
     &>P{
       height: .75rem;
       width: 5.37rem;
    //    border: 1px solid #000;
       font-size: .3rem;
       text-align: center;
       line-height: .75rem;
       color: #fff;
   }
}
.zjb_pp{
    margin: .4rem;
    font-size: .25rem;
    height: .4rem;
    line-height: .4rem;
   &>span:nth-child(1){
       margin-left: 3rem;
   }
   &>span{
       margin-left: .2rem;
   }
}
/* 实现每行7个自动换行 */
.calenderTitle, .calenderInside{

  width: 6rem;
  height: auto;
  padding: .2rem;
//   border:1px solid #000;
  ul{ 
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
       width: 6rem;
        li{ 
            text-align: center;
            width: .8rem;
            height: .6rem;
            // border:1px solid #000;
        }
  }
}
.calenderItem{
  width: 6.4rem;
  height: auto;
  font-size: .2rem;
//   border:1px solid #000;
}
.zjb_riLi_end{
    font-size: .25rem;
    margin-left:.2rem;
    color: orange;
    &>span{
        font-size: .2rem;
        color: #000;
        margin-left: .4rem;
    }
}
</style>

<script>
export default {
  data () {
    return {
         value: new Date(),
      // 获取当前时间戳(后期采用服务器时间)
      // 当前年份
      nowYear: null,
      // 当前月份
      nowMonth: null,
      // 当前日期
      nowDate: null,
      color:'orange'
    }
  },
  methods: {
      zjb_home(){//--->点击箭头，返回上一页
          this.$router.go(-1);
      },
      zjb_jian(){//--->点击左边的箭头--
          this.nowMonth--;
          if(this.nowMonth<1){
              this.nowYear-=1;
              this.nowMonth=12;
          }
      },
      zjb_jia(){//--->点击右边的箭头++
           this.nowMonth++;
          if(this.nowMonth>12){
              this.nowYear+=1;
              this.nowMonth=1;
          }
      },
     
 
    },
     // 拆分年月日星期
     mounted() {
      // 将时间戳转换为日期对象
      const theTime =new Date();
      this.nowYear = theTime.getFullYear();
      this.nowMonth = theTime.getMonth() + 1
      this.nowDate = theTime.getDate();
      this.nowDay = theTime.getDay() // 星期日为0,其余星期对应数值
    }
}
</script>