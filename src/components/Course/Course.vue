
<template>

        <div class="wll_Course">
            <div class="wll_top">
                <div class="wll_tsk">
                    <h2>特色课</h2>
                    <img src="../../../static/course-img/wll_ glass.jpg" alt="" @click="add()">
                </div>
                <div class="wll_kj">
                    <!-- 下拉菜单 -->
                    <van-dropdown-menu>
                        <!-- 分类 -->
                        <van-dropdown-item title="分类">
                            <div class="wll_dl">
                                <h2>年级</h2>
                                <ul>
                                    <li v-for="(item,key) in item.grade" :key="key"> 
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                            <div class="wll_dl">
                                <h2>学科</h2>
                                <ul>
                                    <li v-for="(item,key) in item.subject" :key="key"> 
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                            <div class="wll_button">
                                <van-button type="default">重置</van-button>
                                <van-button type="warning">确定</van-button>
                            </div>
                        </van-dropdown-item>
                        <van-dropdown-item title="排序" v-model="wll_value2" :options="wll_option2" />
                        <van-dropdown-item title="筛选" >
                            <div class="wll_dy">
                                 <ul>
                                    <li v-for="(item,key) in item.flish" :key="key"> 
                                        {{item}}
                                    </li>
                                </ul>
                            </div>
                        </van-dropdown-item>
                    </van-dropdown-menu>
                </div>
            </div>
            <div class="wll_conter">
               <ul class="wll_ul">
                   <li v-for="(item,key) in wll_course" :key="key" class="wll_li"> 
                       <router-link :to="'/details?id='+item.id" tag="div" class="wll_div">
                            <div>
                                <h2>{{item.name}}</h2>
                            </div>
                            <div >
                                <img v-show="(item.time==' '?false:true)" class="wll_img1" :src="'../../../static/course-img/'+item.imgage" alt="">
                                <span v-show="(item.time==' '?false:true)">{{item.time}}</span>
                                <span>{{item.lesson}}</span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <img class="wll_img1" :src="'../../../static/course-img/'+item.img" alt="">
                                        <span>{{item.teachername}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p>{{item.count}}</p>
                                <p>
                                    <img class="wll_img1" :src="'../../../static/course-img/'+item.imga" alt="">
                                    <span :style="{'color':(item.price=='免费'?'green':'red')}">{{item.price}}</span>
                                </p>
                            </div>
                     </router-link>
                   </li>
               </ul>
            </div>
        </div>
</template>

<script>
    //引入axios请求器
    import axios  from "axios";
    export default {
        name: "Course",
        data() {
            return {
                wll_value2: 0,
                wll_option2: [
                    { text: '综合排序', value: '0' },
                    { text: '最新', value: '1' },
                    { text: '最热', value: '2' },
                    { text: '价格从低到高', value: '3' },
                    { text: '价格从高到低', value: '4' },
                ],
        
                collect:JSON.parse(localStorage.getItem("collect")) || [],
                wll_course:[],
                flag:true,
                item:[]
            }
        },
        mounted() {
            axios.get("../../../static/Course.json/date.json").then((msg)=>{
                console.log(msg);
                this.wll_course=msg.data.data;
            })
            axios.get("../../../static/Course.json/list.json").then((msg)=>{
                console.log(msg);
                this.item=msg.data.data;
            })
        },
        methods:{
            add(){
                this.$router.push({path:"/serch"})
            }
        }
    }
</script>

<style lang="scss">
    body,html,.wll_Course{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction:column;
        .wll_top{
            width: 100%;
            height: 1.44rem;
            .wll_tsk{
                width: 100%;
                height: 0.74rem;
                display: flex;
                align-items: center;
                h2{
                    margin-left: 2.72rem;
                    color: #4d4d4d;
                    font-size: 0.26rem;
                    font-weight: normal;
                }
                img{
                    width: 0.36rem;
                    height: 0.36rem;
                    margin-left: 2.22rem;
                }
            }
            .wll_kj{
                width: 100%;
                height: 0.72rem;
                .van-dropdown-menu{
                    width: 100%;
                    height: 0.72rem;
                    .van-dropdown-item{
                        .wll_dl{
                            width: 100%;
                            h2{
                                width: 5.8rem;
                                margin: 0 auto;
                                padding-top: 0.28rem;
                                color: #4e4e4e;
                                font-weight: normal;
                            }
                            ul{
                                width: 5.8rem;
                                // height: 1.8rem;
                                margin: 0.3rem auto;
                                display: block;
                                border-bottom: 1px solid #eeeeee;
                                display: flex;
                                flex-wrap: wrap;
                                li{
                                    width: 1.18rem;
                                    height: 0.56rem;
                                    text-align: center;
                                    line-height: 0.56rem;
                                    background: #f5f5f5;
                                    margin-right: 0.26rem;
                                    margin-bottom: 0.18rem;
                                }
                                li:hover{
                                    color: #eb5b00;
                                    background: #ebeefe;
                                }
                            }
                        }
                        .wll_button{
                            display: flex;
                            width: 100%;
                            height: 1rem;
                            justify-content: space-around;
                            align-items: center;
                            .van-button {
                                width: 1.5rem;
                                margin-left: 0rem; 
                                margin-top: 0rem; 
                            }
                        }
                        .wll_dy{
                            width: 100%;
                            ul{
                                width: 5.8rem;
                                margin: 0.3rem auto;
                                display: block;
                                display: flex;
                                flex-wrap: wrap;
                                padding-bottom: 0.3rem;
                                li{
                                    width: 1.18rem;
                                    height: 0.56rem;
                                    margin-bottom: 0.16rem;
                                    text-align: center;
                                    line-height: 0.56rem;
                                    background: #f5f5f5;
                                    margin-right: 0.26rem;
                                }
                                 li:hover{
                                    color: #eb5b00;
                                    background: #ebeefe;
                                }
                            }
                        }
                    }
                }
                .van-ellipsis{
                    height: 0.72rem;
                    line-height: 0.72rem;
                    font-size: 0.22rem;
                }
            }
        }
        .wll_conter{
            width: 100%;
            flex: 1;
            overflow: auto;
            background: #f1f2f5;
            ul{
                width: 5.86rem;
                margin: 0 auto;
                .wll_li{
                    width: 5.86rem;
                    height: 2.88rem;
                    margin: 0 auto;
                    margin-top: 28px;
                    background: #ffffff;
                    border-radius: 10px;
                    .wll_div{
                        width: 5.86rem;
                        height: 2.88rem;
                        div{
                            width: 5.45rem;
                            margin: 0 auto;
                        }
                        div:nth-of-type(1){
                            margin-top: 0.56rem;
                            h2{
                                padding-top: 0.26rem;
                                color: #737373;
                                font-size: 0.26rem;
                                font-weight: normal;
                            }
                        
                        }
                        div:nth-of-type(2){
                            padding-top: 0.18rem;
                            display: flex;
                            align-items: center;
                            img{
                                width: 0.18rem;
                                height: 0.18rem;
                                margin-right: 0.1rem;
                            }
                            span{
                                color: #666666;
                                font-size: 0.18rem;
                                line-height: 0.18rem;
                            }
                            span:nth-of-type(1){
                                width: 3rem;
                                height: 0.18rem;
                                border-right: 1px solid #d0d0d0;
                                display: block;
                                margin-right: 0.16rem;
                            }
                           
                        }
                        div:nth-of-type(3){
                            width: 5.45rem;
                            height: 1.22rem;
                            border-bottom: 1px solid #f5f5f5;
                            ul{
                                width: 5.45rem;
                                height: 1.22rem;
                                display: flex;
                                align-items: center;
                                li{
                                    width: 33.33%;
                                    height: 0.36rem;
                                    line-height: 0.36rem;
                                    line-height: 56px;
                                    display: flex;
                                    align-items: center;
                                    img{
                                        width: 0.36rem;
                                        height: 0.36rem;
                                        border-radius: 50%;
                                    }
                                    span{
                                        color: #b0b0b0;
                                        line-height: 0.36rem;
                                        margin-left: 20px; 
                                        font-size: 0.18rem;
                                    }
                                }
                            }
                        }
                        div:nth-of-type(4){
                            height: 0.74rem;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            p:nth-of-type(1){
                                height: 94px;
                                line-height: 94px;
                                color: #8c8c8c;
                                font-size: 0.16rem;
                            }
                            p:nth-of-type(2){
                                display: flex;
                                img{
                                    width: 0.26rem;
                                    height: 0.26rem;
                                    margin-right: 0.08rem;
                                }
                                
                                span{
                                    color: #ee1919;
                                    font-size: 0.18rem;
                                    line-height: 0.26rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // 框架样式
    .van-dropdown-item__option--active, .van-dropdown-item__option--active .van-dropdown-item__icon {
        color: red;
    }
    .van-dropdown-menu__title--active {
        color: red;
    }
   .van-cell__title {
        display: flex;
        justify-content: space-around;
        span{
            width: 30%;
            text-align: center;
            display: inline-block;
        }
    }
    .van-cell__value{
        -webkit-flex: 0;
    }
</style>
