<template>
	<div class="apply">
		<div>
            <div class="header">
				<router-link class="wll_fhindex" tag="span" to="/course">&lt;</router-link> 
				<span>确认订单</span>
			</div>
			<div  v-for="(item,key) in arr" :key="key" v-if="id==item.id" class="wll_di"> 
				<div class="wll_name">
					<p>
						<span>{{item.name}}</span>
						<span>{{item.price}}</span>
					</p>
					<p>{{item.time}}</p>
					<p>
						<span>授课讲师</span>
						<span>{{item.teachername}}</span>
					</p>				
				</div>
				<div class="wll_p">
					<p>
						<span>优惠卷</span>
						<span>无可用</span>
					</p>
				</div>
				<div class="wll_table">
					<table>
						<tr>
							<td>商品金额</td>
							<td>
								<img class="wll_img1" :src="'../../../static/course-img/'+item.imga" alt="">
								<span>{{item.price}}</span>
							</td>
						</tr>
						<tr>
							<td>优惠卷金额</td>
							<td>
								<img class="wll_img1" :src="'../../../static/course-img/'+item.imga" alt="">
								<span>0</span>
							</td>
						</tr>
						<tr>
							<td>合计</td>
							<td>
								<img class="wll_img1" :src="'../../../static/course-img/'+item.imga" alt="">
								<span class="wll_span">{{item.price}}</span>
							</td>
						</tr>
					</table>
				</div>
				<div class="wll_to">
					<p>
						<span>实付价格</span>
						<img class="wll_img1" :src="'../../../static/course-img/'+item.imga" alt="">
						<span>{{item.price}}</span>
					</p>
					<button @click='tijiao()'>提交订单</button>
				</div>
				<div v-show="!flag" class="wll_show">
					<p>√</p>
					<p>成功</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "Apply",
		data() {
			return {
				arr:[],
				id:"",
                flag:'true',
                timer:''
			}
		},
		 methods:{
                tijiao(){
                    console.log(11)
                    // Dialog.alert({ message: '提交成功'}).then(() => {});
                    this.flag=!this.flag;
                    this.timer = setTimeout(function(){
                        this.flag=!this.flag;
                    }, 2000)
				}
		 },
		    mounted(){ 
				this.id=this.$route.query.id;
				axios.get("../../../static/Course.json/date.json").then((res)=>{
					console.log(res);
					this.arr = res.data.data;
				})
			}
    }
</script>

<style lang="scss" scoped>
	.apply{
		width: 100%;
		height: 100%;
		background: #f0f2f5;
		.header{
			width: 100%;
			height: 0.8rem;
			background: #ffffff;
			display: flex;
			align-items: center;
			span:nth-of-type(1){
				padding-left: 0.18rem;
				font-size: 0.25rem;
			}
			span:nth-of-type(2){
				font-size: 0.22rem;
				padding-left: 2rem;
				color: #828282;
			}
		}
		.wll_di{
			margin-top: 0.22rem;
			.wll_name{
				width: 5.1rem;
				height: 100%;
				background: #ffffff;
				margin: 0 auto;
				padding: 0.4rem;
				border-radius:0.1rem; 
				font-size: 0.2rem; 
				p:nth-of-type(1){
					display: flex;
					justify-content: space-between;
					span:nth-of-type(2){
						color: #868988;
					}
				}
				p:nth-of-type(2){
					margin-top: 0.22rem;
					color: #c2c2c2;
				}
				p:nth-of-type(3){
					margin-top: 0.22rem;
					color: #c3c3c1;
				}
			}
			.wll_p{
				margin-top: 0.22rem;
				width: 100%;
				height: 0.82rem;
				background: #ffffff;
				font-size: 0.19rem;
				p{
					width: 5.94rem;
					height: 0.82rem;
					margin: 0 auto;
					display: flex;
					align-items: center;
					justify-content: space-between;
					span:nth-of-type(1){
						color: #2a2820;
						font-weight: bold;
					}
					span:nth-of-type(2){
						color: #a39d97;
					}
				}
			}
			.wll_table{
				margin-top: 0.22rem;
				width: 100%;
				height: 100%;
				background: #ffffff;
				font-size: 0.20rem;
				table{
					width: 6.4rem;
					// margin: 0 auto;
					padding: 0.26rem;
					tr{
						clear: both;
						height: 0.46rem;
						line-height: 0.46rem;
						td:nth-of-type(1){
							float: left;
							color: #a39d97;
						}
						td:nth-of-type(2){
							float: right;
							color: #999b9c;
							.wll_span{
								color: #de140c;
							}
						}
					}
					
					
				}
			}
			.wll_to{
				position: fixed;
				bottom: 0;
				background: #ffffff;
				width: 100%;
				height: 0.92rem;
				display: flex;
				align-items: center;
				p{
					font-size: 0.12rem;
					color:#8c8c8c;
					font-size: 0.16rem;
					padding-left: 0.3rem;
					img{
						width: 0.18rem;
						height: 0.18rem;
					}
					span:nth-of-type(2){
						font-size: 0.22rem;
						color: #de140c;
					}
				}
				button{
					width: 2.3rem;
					height: 0.92rem;
					font-size: 0.26rem;
					background: #eb6100;
					border: 0;
					color: white;
					position: absolute;
					right: 0;
					
					
				}
			}
			.wll_show{
				position: absolute;
				top: 3.45rem;
				left: 2.7rem;
				width: 1rem;
				height: 1rem;
				background: black;
				color: black;
				font-size: 0.15rem;
				opacity:0.4;
				p:nth-of-type(1){
					position: absolute;
					bottom: 0.4rem;
					left: 0.3rem;
					font-size: 0.3rem;
					color: #ffffff;
				}
				p:nth-of-type(2){  
					position: absolute;
					bottom: 0.1rem;
					left: 0.3rem;
					font-size: 0.18rem;
					color: #ffffff;
				}
			}
		}
	}
</style>