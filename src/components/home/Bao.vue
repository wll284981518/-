<template>
  <div class="zjb_bao">
      <!-- 跳转立即报名页面布局开始 -->

         <div class="zjb_bao_con">
             <!-- 整体内容布局开始 -->
            <div class="zjb_bao_header">
            <!-- 头部布局开始 -->
           <span> <img @click="zjb_goXiang"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC" alt=""></span>
            <p>讲师详情</p>
            <!-- 头部布局结束 -->
         </div>
         <div class="zjb_bao_head_bottom">
            <!-- 标签布局开始 -->
            <ul>
                <li v-for="(v,i) in this.$store.state.list" :key="i" v-if="i==id-1">
                    <img :src="v.img" alt="教师图片">
                    <div class="zjb_xiang_right">
                        <div>
                            <p>{{v.name}} <span>{{v.ic}}</span> </p>
                            <p>{{v.sex}} <span>{{v.wordAge}}年教龄</span></p>
                        </div>
                        <p @click="zjb_guan" >查看详情</p>
                        
                    </div>
                </li>
            </ul>
            <!-- 标签布局结束 -->
          </div>
            <div class="zjb_bao_time">
            <!-- 时间布局开始 -->
             <h2>选择时间（北京时间）</h2>
             <ul>
                 <li>
                     <p>周{{dd-3}}</p>
                     <p>{{mouth}}/{{day-3}}</p>
                 </li>
                 <li>
                     <p>周{{dd-2}}</p>
                     <p>{{mouth}}/{{day-2}}</p>
                 </li>
                 <li>
                     <p>周{{dd-1}}</p>
                     <p>{{mouth}}/{{day-1}}</p>
                 </li>
                 <li>
                     <p>{{dd}}</p>
                     <p>{{mouth}}/{{day}}</p>
                 </li>
                  <li>
                     <p>周{{dd+1}}</p>
                     <p>{{mouth}}/{{day}}</p>
                 </li>
                  <li>
                     <p>周{{dd+2}}</p>
                     <p>{{mouth}}/{{day}}</p>
                 </li>
                  <li>
                     <p>周{{dd+3}}</p>
                     <p>{{mouth}}/{{day}}</p>
                 </li>
                
             </ul>
            <!-- 时间布局结束 -->
        </div>
        <!-- 整体内容布局结束 -->
        </div>

      
        

         <div class="zjb_bao_footer">
            <!-- 尾部布局开始 -->
            <p>立即报名</p>
            <!-- 尾部布局结束 -->
        </div>



      <!-- 跳转立即报名页面布局结束 -->
  </div>
</template>

<script>
export default {
    name:'Bao',
    data(){
        return{
            id:'',
            mouth:'',
            day:'',
            dd:''
        }
    },
    mounted(){//--<最早操作dom元素的生命周期的钩子
        this.id=this.$route.query.id;//--->详情页传递过来的id
        var timer=new Date();//-->获取当前时间
        var timm=timer.toLocaleString();
        var hao=timer.getTime();//--->当前时间的毫秒数
        var mount=timer.getMonth()+1;//--->获取当前的月份+1
        var day=timer.getDate();//--->获取当前的月份的日
        this.mouth=mount.toLocaleString();//--->转换为字符串
        this.day=day.toLocaleString();//--->转换为字符串
        this.dd=timer.getDay();//-->获取当天的周几
        // console.log('====================================');
        // console.log();
        // console.log('====================================');
    },
    methods:{
        zjb_goXiang(){
            this.$router.go(-1);
        },
        zjb_guan(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
.zjb_bao{
    height: 100%;
    font-size: .16rem;
    line-height: .2rem;
    width: 6.4rem;
    background: rgb(240, 242, 245);;
    display: flex;
    flex-direction: column;
}
.zjb_bao_con{
    flex: 1;
    overflow: auto;
     position: relative;
}
.zjb_bao_header{
    height: 1.7rem;
    background: linear-gradient(180deg,#63b7fe,#4e7de3);
    display: flex;
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
.zjb_bao_head_bottom{
    position: absolute;
    top: .7rem;
    left: .16rem;
    width: 6.06rem;
    height: 1.55rem;
    // border: 1px solid #000;
    // margin: 0 auto;
    background: #fff;
    border-radius: .08rem;
    ul{
        width: 5.55rem;
        height: 1.3rem;
        //  border: 1px solid #000;
         margin: 0 auto;
        li{
            height: 100%;
            display: flex;
            align-items: center;
            &>img{
                width: .68rem;
                height: .68rem;
                margin-right: .2rem;
            }
            &>.zjb_xiang_right{
                display: flex;
                
                &>div{
                     width: 3.6rem;
                     height: .56rem;
                    //   border: 1px solid #000;
                      padding: .1rem 0;
                    &>p:nth-child(1){
                        font-size: .25rem;
                        color: #595959;
                        &>span{
                            font-size: .18rem;
                            color:#EA7A2F;
                            margin-left: .1rem;
                        }
                    }
                     &>p:nth-child(2){
                        font-size: .2rem;
                        color: #b7b7b7;
                        margin-top: .2rem;
                        &>span{
                             font-size: .18rem;
                             color: #b7b7b7;
                              margin-left: .08rem;
                        }
                    }
                }
                &>p:nth-child(2){
                    font-size: .25rem;
                    margin-top: .14rem;
                    width: 1.05rem;
                    height: .48rem;
                    //  border: 1px solid #000;
                     text-align: center;
                     line-height: .48rem;
                     background: #ebeefe;
                     font-size: .22rem;
                     color: red;
                     border-radius: .4rem;
                }
                &>p:nth-child(3){
                    margin-top: .24rem;
                    font-size: .25rem;
                    margin-left: .16rem;
                    color: #b7b7b7;
                }
            }
        }
    }
}
.zjb_bao_footer{
    width: 100%;
    height: 1rem;
    background: #eb6100;
    color: #fff;
    font-size: .4rem;
    font-weight: 400;
    text-align: center;
    line-height: 1rem;
}
.zjb_bao_time{
    margin-top: .8rem;
}
</style>