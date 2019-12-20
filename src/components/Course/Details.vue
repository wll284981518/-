<template>
    <div class="wll_details">
        <!-- 详情页面 -->
        <div class="wll_destop">
            <p>
                <router-link class="wll_fhindex" tag="span" to="/course">&lt;</router-link> 
                <span>课程详情</span>
                <img src="../../../static/course-img/share.png" alt="">
            </p>
        </div>
        <div v-for="(item,key) in wll_details" :key="key" class="wll_div" v-show="id==item.id">
            <div class="wll_detdiv">
                <p>
                    <span>{{item.name}}</span>
                    <img src="../../../static/course-img/sc.png" alt="">
                </p>
                <p>免费</p>
                <p>
                    <span>{{item.lesson}}</span>
                    <span>{{item.count}}</span>
                </p>
                <p>
                    <span>开课时间:</span>
                    <span>{{item.open}}</span>
                </p>
            </div>
            <div>
                <h2>教学团队</h2>
                <ul>
                    <li>
                        <img class="wll_img1" :src="'../../../static/course-img/'+item.img" alt="">
                        <p>{{item.teachername}}</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2>课程介绍</h2>
                <p>{{item.introduce}}</p>
            </div>
            <div>
                <h2>课程大纲</h2>
                <ul>
                    <li>
                        <div class="wll_coldiv">
                             <p>
                                <span>{{item.visit}}</span>
                                <span>{{item.outline}}</span>
                            </p>
                            <p>
                                {{item.outline2}}
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <img src="../../../static/course-img/pic2.png" alt="">
            </div>
        </div>
        <div class="wll_desfood">
            <h2>立即报名</h2>
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
                collect:JSON.parse(localStorage.getItem("collect")) || []
            }
        },
        mounted() {
            this.id=this.$route.query.id;
            // this.id= item.id
            // console.log(id);
            axios.get("../../../static/date.json").then((res)=>{
                console.log(res);
                this.wll_details = res.data.data;
            })
        },
        methods: {
            // // 点击取消跳转到index页面
            // wll_collect(item){
            //     alert("收藏成功");
            //     var obj = JSON.parse(localStorage.getItem("collect"))||[];
            //     obj.push(item);
            //     localStorage.setItem("collect",JSON.stringify(obj))
            // },
            // wll_qu(){
            //     this.$router.push({
            //         name:"serach",
            //     })
            // },
            // wll_add(){
            //     this.$router.push("/serach")
            // }
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
            .wll_destop{
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
            .wll_div{
                width: 100%;
                flex: 1;
                overflow: auto;
                .wll_detdiv{
                    width: 100%;
                    height: 2.43rem;
                    background: #ffffff;
                    p:nth-of-type(1){
                        width: 5.86rem;
                        height: 0.54rem;
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
                        height: 0.4rem;
                        font-size: 0.26rem;
                        margin: 0 auto;
                        // padding-top: 0.16rem;
                        color: #ee732e;
                        display: flex;
                        justify-content: space-between;
                    }
                    p:nth-of-type(3){
                        width: 5.86rem;
                        height: 0.4rem;
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
                        margin: 0 auto;
                        font-size: 0.24rem;
                        color: #8a857f;
                    
                    }
                }
                div:nth-of-type(2){
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
                                width: 0.36rem;
                                height: 0.36rem;
                                margin: 0 auto;
                                display: block;
                                border-radius: 50%;
                            }
                            p{
                               color: #b0b0b0;
                                line-height: 0.36rem;
                                margin-left: 20px; 
                                text-align: center;
                            }
                        }
                    }
                }
                div:nth-of-type(3){
                    width: 100%;
                    height: 1.08rem;
                    margin-top: 0.26rem;
                    background: #ffffff;
                    h2{
                        width: 5.86rem;
                        margin: 0 auto;
                        padding-top: 0.26rem;
                    }
                    p{
                        width: 5.86rem;
                        margin: 0 auto;
                        padding-top: 0.26rem;
                    }
                }
                div:nth-of-type(4){
                    width: 100%;
                    margin-top: 0.30rem;
                    background: #ffffff;
                    padding: 0.26rem;
                    h2{
                        width: 5.80rem;
                        
                    }
                    ul{
                        width: 5.80rem;
                    }
                }
                div:nth-of-type(5){
                    width: 100%;
                    height: 3.46rem;
                    background: #ffffff;
                    img{
                        width: 2.56rem;
                        height: 2.76rem;
                        margin: 0 auto;
                        display: block;
                    }
                }
            }
            .wll_desfood{
                width: 100%;
                height: 86px;
                margin-top: 20px;
                h2{
                    width: 100%;
                    height: 86px;
                    margin-top: 20px;
                    background: #ee732e;
                    color: #ffffff;
                    text-align: center;
                    line-height: 86px;
                }
            }
        }
    }
</style>