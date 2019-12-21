<template>
	<div class="Collection">
		<div class="dh">
			<img @click="fhxin" class="fan" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="" />
			<span>我的收藏</span>
		</div>
		<div class="zb" style="margin-top: 1.5rem;" v-if="wll_show">
			<img src="https://wap.365msmk.com/img/empty.0d284c2e.png" alt="" />
			<p>暂无收藏</p>
		</div>
        <div class="wll_collect">
			<div class="wll_head">
				<h3>我的收藏</h3>
			</div>
			<div>
				 <ul class="wll_ul">
					<li v-for="(item,key) in collect" :key="key">
						<img class="wll_img" :src="'../../../static/img/'+item.collect" alt="">
						<div>
							<p>{{item.name}}</p>
							<p>{{item.wll_text}}</p>
							<p>
								<span>￥{{item.price}}</span>
								<span>{{item.wll_person}}人累计付款</span>
							</p> 
							<p>{{item.wll_shop}}</p>
						</div>
					</li>
				</ul> 
			</div>
			<div class="wll_del">
				<button @click="wll_del()">清空收藏</button>
			</div>
        </div>
	</div>
</template>

<script>
	 export default {
		name: "Collection",
		data() {
			return {
				collect:JSON.parse(localStorage.getItem("collect"))||[],
				wll_show:true
			}
		},
        methods:{
        	fhxin (){
        		this.$router.push("/my")
        	}
		},
		mounted() {
			if(this.collect==""){
				this.wll_show = true;
			}else{
				this.wll_show = false;
			}
		},
    }
</script>

<style scoped lang="scss">
	.Attention{
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
.zb{
	align-items: center;
	text-align: center;
}
.zb p{
	font-size:0.25rem ;
	color: #8c8c8c;
	margin-top: 0.5rem;
}
</style>