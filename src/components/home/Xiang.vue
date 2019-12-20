<template>
    <div class="zjb_xiang">
        <!-- 详情页面布局开始 -->
       <div class="zjb_xiang_con">
            <div class="zjb_xiang_header">
            <!-- 头部布局开始 -->
           <span> <img @click="zjb_goHome"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAPCAYAAADd/14OAAAA/ElEQVQoU33RsUvWYRTF8c8hQmgIE4e2IFDQIfCPcHGIlBpqcWtPcFHBFgWdHGxykURxUtfWZkfHtkZBCBzcrjzxe+P9ha/P9sD33nPuOfHIq6pJnOBZRnFVNYdzvML+g2BVfcIBnuJLkm89sKqeYAcruMaHJD+b6j+wqiZwinlcYinJ74G1v2BVven8vMYRPie5G/afqnqPQ4xhNcneQwc28AYvsJ1kfVQKDVzAMZ5jE1tJ6v+BgcdpXGAGZ1hOctvzOPhUVdvYDnmLKywm+dW7eghuCl+xgT/4mORHL8dhmap6h++tY6wl2X2s69nO91SLbyTYFTHebX55D93jTsSH0JDDAAAAAElFTkSuQmCC" alt=""></span>
            <p>讲师详情</p>
            <!-- 头部布局结束 -->
         </div>
         <div class="zjb_xiang_head_bottom">
            <!-- 标签布局开始 -->
            <ul>
                <li v-for="(v,i) in this.$store.state.list" :key="i" v-if="i==id-1">
                    <img :src="v.img" alt="教师图片">
                    <div class="zjb_xiang_right">
                        <div>
                            <p>{{v.name}} <span>{{v.ic}}</span> </p>
                            <p>{{v.sex}} <span>{{v.wordAge}}年教龄</span></p>
                        </div>
                        <p @click="zjb_guan" v-show="!flg">关注</p>
                        <p @click="zjb_guan" v-show="flg">已关注</p>
                    </div>
                </li>
            </ul>
            <!-- 标签布局结束 -->
         </div>
            <div class="zjb_xiang_con_tab">
                <!-- 选项卡布局开始 -->
                <van-tabs>
                  <van-tab title="讲师介绍" class="zjb_xiang_jie">
                      <ul>
                          <li v-for="(v,i) in this.$store.state.list" :key="i" v-if="i==id">
                              <p>教学年龄<span>{{v.wordAge}}年</span></p>
                              <p>授课价格<span>{{v.price}}学习币</span></p>
                             <div> <p>老师简洁</p><span class="zjb_xiang_jie_span">{{v.jie}}</span></div>
                          </li>
                      </ul>
                  </van-tab>
                  <van-tab title="主讲课程"> <p class="zjb_xiang_jie_con_two"></p> </van-tab>
                  <van-tab title="学员评价" class="zjb_xiang_jie_con_three">
                     <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="">
                      <p>暂无评论</p>
                  </van-tab>
                </van-tabs>
                <!-- 选项卡布局结束 -->
            </div>
       </div>



        <div class="zjb_xiang_footer">
            <!-- 尾部布局开始 -->
            <p @click="zjb_tiao">立即报名</p>
            <!-- 尾部布局结束 -->
        </div>
        <!-- 详情页面布局结束 -->
    </div>
</template>

<script>
export default {
    name:"xiang",
    data(){
        return{
            id:'',
            flg:false,
            title:"关注 ",
             
        }
    },
    mounted(){//--->接受首页点击，传递过来的id
        this.id=this.$route.query.id;
    },
    methods:{
        zjb_goHome(){//--->点击箭头，返回首页
            this.$router.go(-1);
        },
        zjb_guan(){//--->点击关注
             this.flg=!this.flg;//--->取反
            if(this.flg){
                 this.$toast.success('已关注');
            }else{
                 this.$toast.success('已取消');
            }
        },
        zjb_tiao(){//--->点击立即报名，跳转页面
            this.$router.push({name:'bao',query:{id:this.id}})
        }
    }
}
</script>

<style scoped lang="scss">
.zjb_xiang{
    height: 100%;
    font-size: .16rem;
    line-height: .2rem;
    width: 6.4rem;
    background: rgb(240, 242, 245);;
    display: flex;
    flex-direction: column;
}
.zjb_xiang_con{
    flex: 1;
    overflow: auto;
     position: relative;
}
.zjb_xiang_header{
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
.zjb_xiang_head_bottom{
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
.zjb_xiang_con_tab{
    margin-top: 1rem;
}
>>>.van-tab--active{
    color: #EA7A2F;
    font-size: .25rem;
}
>>>.van-tab{
    font-size: .25rem;
}
>>>.van-ellipsis{
     height: .76rem;
     line-height: .76rem;
}
>>>.van-tabs .van-tabs--line{
     height: .76rem;
     line-height: .76rem;
}
>>>.van-tabs--line .van-tabs__wrap{
     height: .76rem;
     line-height: .76rem;
}
>>>.van-tabs__line{
    width: .43rem !important;
}
>>>.van-tabs__content{
    background: #fff;
}
.zjb_xiang_footer{
    width: 100%;
    height: 1rem;
    background: #eb6100;
    color: #fff;
    font-size: .4rem;
    font-weight: 400;
    text-align: center;
    line-height: 1rem;
}
.zjb_xiang_jie{
    width: 100%;
    height: auto;
    ul{
        padding-top: .2rem;
        li{
            width: 5.8rem;
            height: 4rem;
            // border: 1px solid #000;
            margin: 0 auto;
            &>p{
                margin-bottom: .4rem;
                font-size: .22rem;
                color: #b7b7b7;
               &>span{
                   margin-left: .4rem;
                   
               }
              
              
            }
            &>div{
                display: flex;
                &>P{
                    font-size: .22rem;
                    color: #b7b7b7;
                }
                 &>.zjb_xiang_jie_span{
                   display: block;
                   width: 4rem;
                   height: auto;
                //    border: 1px solid #000;
                   margin-left: .4rem;
                   font-size: .22rem;
                   color: #b7b7b7;
                   line-height: .4rem;
               }
            }
        }
    }
}
.zjb_xiang_jie_con_two{
    height: .4rem;
}
.zjb_xiang_jie_con_three{
    height: 3.15rem;
    width: 100%;
    text-align: center;
    &>img{
        width: 2.56rem;
        height: 2.56rem;
    }
    &>P{
        color: #b7b7b7;
        font-size: .3rem;
        margin-top: .2rem;
    }
}
</style>