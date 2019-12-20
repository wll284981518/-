<template>
  <div>
      <div class="zxy-serch-head">
          <img @click="quxiao"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" alt="">
          <input type="text" placeholder="请输入内容">
          <p @click="quxiao">取消</p>
      </div>
      <div class="zxy-serch-body">
          <div class="zxy-serch-body-div1">
              <p>历史搜索</p>
              <van-icon name="delete" size="0.3rem"/>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Serch",
    methods:{
        quxiao(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss">
    .zxy-serch-head{
        width: 100%;
        height: 0.8rem;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &>img{
            width: 0.2rem;
            height: 0.32rem;
        }
        &>input{
            width:4.1rem ;
            padding-left:0.5rem;
            border-radius:1rem;
            height: 0.53rem;
            border: none;
            background: #e4e7ed;
        }
        &>input::-webkit-input-placeholder{
            font-size: 0.26rem;
        }
        &>p{
            font-size:0.3rem;
            color:#d2d2d1;
        }
    }
    .zxy-serch-body{
        width: 100%;
        &>.zxy-serch-body-div1{
            padding: 0 0.26rem;
            display: flex;
            margin-top:0.4rem;
            justify-content: space-between;
            &>p{
                font-size: 0.23rem;
                font-weight: 700;
                color: #333;
            }
        }
    }
</style>