<template>
	<div class="information">
		<!--头部导航-->
		<div class="dh">
			<img @click="fhxin"class="fan" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="" />
			<span>个人信息</span>
		</div>
		<!--修改信息-->
		<ul class="in-xinx">
			<!--头像-->
			<li class="in-tx" @click="showPopup">
				<span>头像</span>
				<span><img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="" /><van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="show" position="bottom" :style="{ height: '30%'}" >内容</van-popup>
			
				
				
			<!--昵称-->
			<li class="in-tx">
				<span>昵称</span>
				<span>1234567895<van-icon name="arrow" class="van-jt"/></span>
			</li>
			
			
			<!--手机号-->
			<li class="in-tx">
				<span>手机号</span>
				<span style="margin-right: 0.46rem;">1234567895</span>
			</li>
			
			
			<!--性别-->
			<li class="in-tx">
				<span>性别</span>
				<span>男<van-icon class="van-jt" name="arrow" /></span>
			</li>
			
			
			
			<!--出生日期-->
			<li class="in-tx" @click="showshijian = true">
				<span>出生日期</span>
				<span>{{this.titletime}}<van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="showshijian" position="bottom" :style="{ height: '30%'}" >
			<van-datetime-picker v-model="currentDate" type="date"  :min-date="minDate" @cancel="showshijian  = false"  @confirm="handleend"/>
			</van-popup>
			
			
			
			<!--所在城市-->
			<li class="in-tx" @click="showdiqu = true">
				<span>所在城市</span>
				<span>{{this.xianshi}} <van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="showdiqu" position="bottom" :style="{ height: '30%'}" >
				<van-area :area-list="areaList" :columns-num="3" @cancel="showdiqu  = false"  @confirm="queren" />
			</van-popup>
			
				
				
			<!--学科-->
			<li class="in-tx" @click="showxueke = true">
				<span>学科</span>
				<span>{{this.ke}}<van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="showxueke" position="bottom" :style="{ height: '30%'}" >
				<van-picker  show-toolbar :columns="kemu" @cancel="showxueke = false"  @confirm="onConkemu" />				
			</van-popup>
			
			
			
			<!--年级-->
			<li class="in-tx"  @click="showPicker = true">
				<span>年级</span>
				<span>{{this.value}}<van-icon class="van-jt" name="arrow" /></span>
			</li>
			<van-popup v-model="showPicker" position="bottom" :style="{ height: '30%' }" >
				<van-picker  show-toolbar :columns="columns" @cancel="showPicker = false"  @confirm="onConfirm" />
			</van-popup>
		</ul>
	</div>
</template>

<script>
	 export default {
        name: "information",
        data(){
        	return{
        		show:false,
        		value:'',
        		qy:"",
        		ke:'',
        		xianshi:'',
        		titletime:'',
        		showPicker: false,
        		showshijian:false,
        		showxueke:false,
        		showdiqu:false,
        		areaList:{
 					province_list: {
   							110000: '北京市',
   							120000: '天津市'
  									},
  					city_list: {
  							110100: '北京市',
   							110200: '县',
    						120100: '天津市',
    						120200: '县'
  									},
  					county_list: {
   							110101: '东城区',
   							110102: '西城区',
    						110105: '朝阳区',
    						110106: '丰台区',
    						120101: '和平区',
    						120102: '河东区',
    						120103: '河西区',
    						120104: '南开区',
    						120105: '河北区'
  							}
  					},
        		columns:['高一', '高二', '高三', '初一', '初二'],
        		kemu:['数学','语文','英语','物理','化学','政治','地理'],
        		minDate: new Date(1999, 1, 1),
        		currentDate: new Date()
        		
        	}
        },
        methods:{
        	fhxin (){
        		this.$router.push("/my")
        	},
        	showPopup(){
        		this.show=true
        	},
//      	年级列表
        	onConfirm(value) {
     		 this.value = value;
     		this.showPicker = false;
     		
   			 },
// 			 学科列表
        	onConkemu(ke){
        		this.showxueke = false;
     		    this.ke = ke;	
        	},
//      	时间列表
        	handleend(){
        		this.showshijian = false;
        		this.titletime=this.timeFormat(this.currentDate)
        	},
        	 timeFormat(time) { // 时间格式化 2019-09-08
       			 let year = time.getFullYear();
        		let month = time.getMonth() + 1;
        		let day = time.getDate();
        		return year + '-' + month + '-' + day 
    },
        	 //地区列表
        	 queren(qy){
        	 	this.showdiqu = false;
        	 
        	 	console.log(qy)
        	 	this.xianshi =qy[0].name+ ","+qy[1].name+","+qy[2].name
        	 }
        }
    }
</script>

<style scoped>
	.information{
		background: #f0f2f5;
		min-height: 100%;
	}
.dh{
	width: 100%;
	height: 1rem;
	background: #fff;
	line-height: 1rem;
	display: flex;
	/*text-align: center;*/
	align-items: center;
	position: relative;
}
.dh .fan{
	width: 0.2rem;
	height: 0.35rem;
	display: block;
	margin-left: 0.3rem;
}
.dh span{
	display: block;
	font-size: 0.3rem;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
}
/*修改信息样式*/
.in-xinx{
	margin: 0.2rem 0;
	padding: 0.13rem 0.1rem;
	background: #fff;
}
.in-xinx .in-tx{
	height: 1rem;
	line-height: 1rem;
	display: flex;
    justify-content: space-between;
    position: relative;
}
.in-xinx .in-tx span{
	font-size: 0.25rem;
    color: #595959;
}
.in-xinx .in-tx img{
	border-radius: 50%;
    vertical-align: middle;
    width: 0.7rem;
    height: 0.7rem; 
} 
.in-xinx .van-jt{
	margin-left: 0.2rem;
}
</style>