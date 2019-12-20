<template>
	<div class="Edittjlx">
		<div class="tjlx-header">
			<div class="header-left">
				<router-link to="/edit" tag="div" class="header-left">
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
				</router-link>
			</div>
			<p>错题记录</p>
			<div class="header-right">
				<img src="data:image/png;base64,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" />
			</div>
		</div>
		<div class="ctjl-title">
            <div class="tit-down">
                <van-dropdown-menu active-color="#ee0a24">
				<van-dropdown-item v-model="value1" :options="option1" />	
			    </van-dropdown-menu>
            </div>
			
            <div class="tit-allworn">
                <i><img src="data:image/png;base64,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" alt=""></i>
                <p>巩固全部错题</p>
            </div>
			<div class="tit-allworn">
                <i><img src="data:image/png;base64,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" alt=""></i>
				<P>移除错题</P>
		    </div>
           

		</div>
		<div class="tjlx-img">
			<img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
			<p>暂无错题记录</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Edit-ctjl",
		data() {
			return {
				value1: 0,
				option1: [{
						text: '类型不限',
						value: 0
					},
					{
						text: '全部',
						value: 0
					},
					{
						text: '套卷练习',
						value: 0
					},
					{
						text: '考点专练',
						value: 0
					},
					{
						text: '仿真模考',
						value: 0
					}
					
				]
				
			}
		}
	}
</script>

<style lscoped>
	.tjlx-header {
		width: 100%;
		height: 11.73333vw;
		position: fixed;
		z-index: 999;
		width: 100%;
		background: #fff;
		position: relative;
	}
	
	.tjlx-header>p {
		font-size: 4.8vw;
		color: #595959;
		position: absolute;
		left: 40%;
		top: 32%;
		text-overflow: ellipsis;
		max-width: 66.66667vw;
	}
	
	.header-left {
		float: left;
		width: 10.66667vw;
		height: 11.73333vw;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.header-left>img {
		height: 4.26667vw;
	}
	
	.header-right {
		height: 100%;
		float: right;
		padding: 0 2.66667vw;
	}
	
	.header-right>img {
		width: 5.06667vw;
		height: 5.33333vw;
		margin-top: 2.66667vw;
	}
	
	.van-dropdown-menu_title {
		height: 11.2vw;
		width: 100%;
	}
	
	.van-ellipsis {
		font-size: 3.73333vw;
		line-height: 25px;
		border: none;
	}
	
	.van-cell {
		height: 13.6vw;
		text-align: center;
		line-height: 13.6vw;
		font-size: 3.73333vw;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #595959;
		border-bottom: 1px solid #f5f5f5;
	}
	.van-cell__value{
		width:0;
		height:0;
	}
	.van-cell__title{
		margin-left: 215px;
	}
	.van-dropdown-menu__item{
		width: 100%;
		height: 100%;
		margin-top: 7px;
		
	}
	
	.tjlx-img {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 13vw;
	}
	
	.tjlx-img>img {
		width: 40vw;
		height: 40vw;
	}
	
	.tjlx-img>p {
		font-size: 4vw;
		color: #8c8c8c;
		margin-top: 5.33333vw;
	}
	.ctjl-title{
        width: 100%;
        height:11.2vw;
        display: flex;
        justify-content: space-around;
border-bottom: 1px solid #f5f5f5;
border-top: 1px solid #f5f5f5;
    }
    .tit-down{
        width: 33%;
    }
    .tit-allworn{
        width: 33%;
        display: flex;
        align-items: center;
		text-align: center;
		justify-content: center;

    }
    .tit-allworn>i>img{
        width: 3.73333vw;
        height: 3.73333vw;
    }
    .tit-allworn>p{
        font-size: 4vw;
    font-family: PingFang SC;
    font-weight: 400;
    color: #8c8c8c;
    }
</style>