<template>
    <div class="wll_details">
        <!-- 详情页面 -->
        <div class="wll_destop">
            <p>
                <router-link class="wll_fhindex" tag="span" to="/course">&lt;</router-link> 
                <span>课程详情</span>
                <img @click="wll_fen" src="../../../static/course-img/share.png" alt="">
            </p>
        </div>
         <div class="wll_head">
            <p>
                <router-link class="wll_fhindex" tag="span" to="/course">&lt;</router-link> 
                <span>课程介绍  <span @click="wll_ke">课程介绍</span>  <span>课程评价</span> </span>
                <img @click="wll_fen" src="../../../static/course-img/share.png" alt="">
            </p>
        </div>
        <div v-for="(item,key) in wll_details"  id="wll_all" :key="key" class="wll_div" v-show="id==item.id">
            <div class="wll_detdiv1">
                <p>
                    <span>{{item.name}}</span>
                    <img :src="'id==item.id'?'../../../static/course-img/sc.png':'../../../static/course-img/sc-active.png'" @click="wll_collect(item)" v-for="(item,key) in wll_details" :key="key" v-show="id==item.id" alt="">
                </p>
                <p>{{item.price}}</p>
                <p>
                    <span>{{item.lesson}}</span>
                    <span>{{item.count}}</span>
                </p>
                <p>
                    <span>{{item.open}}</span>
                </p>
            </div>
            <div class="wll_detdiv2">
                <h2>教学团队</h2>
                <ul>
                    <li>
                        <img class="wll_img1" :src="'../../../static/course-img/'+item.img" alt="">
                        <p>{{item.teachername}}</p>
                    </li>
                </ul>
            </div>
            <div class="wll_detdiv3">
                <h2>课程介绍</h2>
                <p>{{item.introduce}}</p>
            </div>
            <div class="wll_detdiv4">
                <h2>课程大纲</h2>
                <ul>
                    <li>
                        <div class="wll_coldiv">
                            <p>
                                <span class="wll_span"></span>
                                <span>{{item.visit}}</span>
                                <span>{{item.outline}}</span>
                            </p>
                            <p>
                                {{item.outline2}}
                            </p>
                        </div>
                        <div>
                             <p>
                                <span>{{item.outline3}}</span>
                            </p>
                            <p>
                                {{item.outline4}}
                            </p>
                        </div>
                        <div>
                             <p> 
                                <span>{{item.outline5}}</span>
                            </p>
                            <p>
                                {{item.outline6}}
                            </p>
                        </div>
                        <div>
                             <p>
                                <span>{{item.outline7}}</span>
                            </p>
                            <p>
                                {{item.outline8}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="wll_detdiv5">
                <h2>课程评论</h2>
                <img src="../../../static/course-img/pic2.png" alt="">
            </div>
        </div>
        <div class="wll_desfood" @click="wll_apply()">
            <router-link v-for="(item,key) in wll_details" :key="key" v-show="id==item.id" :to="'/apply?id='+item.id" tag="h2">立即报名</router-link>        
        </div>
    </div>
</template>
<script>
    //引入axios请求器
    import axios  from "axios";
    export default{
        name:"Details",
        data() {
            return {
                wll_details:[],
                id:"",
                collect:JSON.parse(localStorage.getItem("collect")) || [],
                show:false,
            }
        },
        mounted() {
            this.id=this.$route.query.id;
            // this.id= item.id
            // console.log(id);
            axios.get("../../../static/Course.json/date.json").then((res)=>{
                console.log(res);
                this.wll_details = res.data.data;
            })
            window.addEventListener('scroll',this.aa,true);
            
        },
        
        methods: {
            // 点击取消跳转到index页面
            wll_collect(item){
                alert("收藏成功");
                var obj = JSON.parse(localStorage.getItem("collect"))||[];
                obj.push(item);
                localStorage.setItem("collect",JSON.stringify(obj))
            },
            wll_apply(){
                alert("报名成功");
                // var obj = JSON.parse(localStorage.getItem("collect"))||[];
                // obj.push(item);
                // localStorage.setItem("collect",JSON.stringify(obj))
                // this.$router.push('/apply')
            },
            //分享页面
            wll_fen(){
                this.$dialog.alert({
                          message: '我是分享页面'
                    });
            },
            // 定义 滚动触发的方法
            aa(){
                var con=document.getElementById("wll_all");
                // console.log('====================================');
                // console.log(con);
                // console.log('====================================');
                var head1=document.querySelector(".wll_head");
                var head=document.querySelector(".wll_destop");
                if(con.scrollTop>head.offsetHeight){
                    head.style.display="none";
                    head1.style.display="block"
                }else{
                    head.style.display="block"
                    head1.style.display="none"
                }
            },
            wll_ke(){
                // alert(111)
                 var head=document.querySelector(".wll_detdiv1");
                  head.style.display="none";
            }
        },
    }
</script>
<style lang="scss" scoped>
    body,html,.wll_details{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction:column;
        .wll_details{
            width: 100%;
            background: #f1f2f5;
            .wll_head{
                display: none;
            }
            .wll_destop,.wll_head{
                width: 100%;
                height: 0.74rem;
                background: #ffffff;
                border-bottom: 1px solid #f1f2f5;
                p{
                    width: 5.86rem;
                    height: 0.74rem;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    span{
                        font-size: 0.26rem;
                    }
                    img{
                        width: 0.3rem;
                        height: 0.3rem;
                    }
                }
            }
            >>>.van-button{
                margin-left:1.8rem;
            }
            .wll_div{
                width: 100%;
                flex: 1;
                overflow: auto;
                .wll_detdiv1{
                    width: 100%;
                    height: 2.43rem;
                    background: #ffffff;
                    p:nth-of-type(1){
                        width: 5.86rem;
                        margin: 0 auto;
                        padding-top: 0.36rem;
                        display: flex;
                        justify-content: space-between;
                        span{
                             font-size: 0.26rem;
                        }
                        img{
                            width: 0.34rem;
                            height: 0.34rem;
                        }
                    }
                    p:nth-of-type(2){
                        width: 5.86rem;
                        font-size: 0.26rem;
                        margin: 0 auto;
                        padding-top: 0.20rem;
                        color: #ee732e;
                        display: flex;
                        justify-content: space-between;
                    }
                    p:nth-of-type(3){
                        width: 5.86rem;
                        padding-top: 0.26rem;
                        font-size: 0.24rem;
                        color: #8a857f;
                        margin: 0 auto;
                        span:nth-of-type(1){
                            display: inline-block;
                            width: 1rem;
                            height: 0.2rem;
                            border-right: 2px solid #98989a;
                        }
                    }
                    p:nth-of-type(4){
                        width: 5.86rem;
                        padding-top: 0.2rem;
                        margin: 0 auto;
                        font-size: 0.24rem;
                        color: #8a857f;
                    
                    }
                }
                .wll_detdiv2{
                    width: 100%;
                    height: 2.42rem;
                    background: #ffffff;
                    margin-top: 0.26rem;
                    h2{
                        width: 5.86rem;
                        display: flex;
                        margin: 0 auto;
                        padding-top: 0.2rem;
                        font-size: 0.26rem;
                        font-weight: normal;
                        color: #21160a;
                    }
                    ul{
                        width: 5.86rem;
                        height: 1.88rem;
                        margin: 0 auto;
                        display: flex;
                        align-items: center;
                        li{
                            width: 1.1rem;
                            height: 0.98rem;
                            line-height: 0.36rem;
                           
                            img{
                                width: 0.58rem;
                                height: 0.58rem;
                                margin: 0 auto;
                                display: block;
                                border-radius: 50%;
                            }
                            p{
                                color: #b0b0b0;
                                line-height: 0.36rem;
                                margin-left: 20px; 
                                text-align: center;
                                font-size: 0.18rem;
                            }
                        }
                    }
                }
                .wll_detdiv3{
                    width: 100%;
                    height: 1.08rem;
                    background: #ffffff;
                    margin-top: 0.3rem;
                    h2{
                        width: 5.86rem;
                        margin: 0 auto;
                        font-size: 0.26rem;
                        padding-top: 0.26rem;
                        font-weight: normal;
                        color: #21160a;
                    }
                    p{
                        width: 5.86rem;
                        margin: 0 auto;
                        padding-top: 0.26rem;
                        font-size: 0.18rem;
                    }
                }
                .wll_detdiv4{
                    width: 5.84rem;
                    margin-top: 0.30rem;
                    background: #ffffff;
                    padding: 0.26rem;
                    h2{
                        width: 5.80rem;
                        font-weight: normal;
                        font-size: 0.26rem;
                        color: #21160a;
                    }
                    ul{
                        width: 5.76rem;
                        margin: 0 auto;
                        padding-top: 0.2rem;
                        li{
                            div{
                                p:nth-of-type(1){
                                    display: flex;
                                    align-items: center;
                                    .wll_span{
                                        width: 0.1rem;
                                        height: 0.08rem;
                                        display: block;
                                        
                                        border: 1px solid #ea7a2f;
                                        background: #ea7a2f;
                                        border-radius: 50%;
                                        margin-right: 0.16rem;
                                    }
                                    span:nth-of-type(2){
                                        width: 0.54rem;
                                        height: 0.32rem;
                                        display: block;
                                        line-height: 0.32rem;
                                        font-size: 0.18rem;
                                        text-align: center;
                                        border: 1px solid #ea7a2f;
                                        background: #ea7a2f;
                                        color: #ffffff;
                                        margin-right: 0.16rem;
                                    }
                                    span:nth-of-type(3){
                                        color: #595c5e;
                                        font-size: 0.18rem
                                    }
                                }
                                p:nth-of-type(2){
                                    width: 5rem;
                                    margin: 0 auto;
                                    color: #8a8c8d;
                                    font-size: 0.18rem;
                                    padding: 0.14rem 0 0.14rem 0;
                                }
                            }
                        }
                    }
                }
                .wll_detdiv5{
                    width: 100%;
                    height: 3.66rem;
                    font-size: 0.26rem;
                    margin: 0.34rem 0 0.34rem 0 ;
                    background: #ffffff;
                    h2{
                        width: 5.80rem;
                        margin: 0 auto;
                        padding-top: 0.26rem;
                        font-weight: normal;
                        color: #21160a;
                    }
                    img{
                        width: 2.56rem;
                        height: 2.76rem;
                        margin: 0.16rem auto;
                        display: block;
                    }
                }
            }
            .wll_desfood{
                width: 100%;
                height: 86px;
                h2{
                    width: 100%;
                    height: 86px;
                    font-size: 0.26rem;
                    line-height: 86px;
                    background: #ee732e;
                    color: #ffffff;
                    text-align: center;
                   
                }
            }
        }
    }
</style>