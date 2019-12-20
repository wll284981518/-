<template>
	<div class="setup">
		<div class="dh">
			<img @click="fhxin"class="fan" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="" />
			<span>设置</span>
		</div>
		<ul class="sz">
			<li class="sz_a">
				<span>设置密码</span>
				<span><van-icon name="arrow" class="van-jt"/></span>
			</li>
			<van-button type="primary" size="large" color=" #eb6100" class="bt" @click="tc">退出登录</van-button>
		</ul>
		
	</div>
</template>

<script>
	 export default {
        name: "Setup",
        methods:{
        	fhxin (){
        		this.$router.push("/my")
        	},
        	tc (){
        		this.$router.push("/home")
        	}
        }
    }
</script>

<style scoped>
	.setup{
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
.sz{
	margin: 0.2rem 0;
	padding: 0.13rem 0.2rem;
	background: #fff;
}
.sz .sz_a{
	height: 1rem;
	line-height: 1rem;
	display: flex;
    justify-content: space-between;
    position: relative;
}
.sz .sz_a span{
	font-size: 0.25rem;
    color: #595959;
    vertical-align: middle;
}
.bt{
	margin:1rem 0;
	height:0.8rem;
	width: 92%;
	position: absolute;
	left:50%;
	transform: translateX(-50%);
	font-size: 0.3rem;
}

</style>