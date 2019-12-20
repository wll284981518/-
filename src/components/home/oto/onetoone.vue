<template>
  <div class="zxy-box">
    <!-- 一对一头部 -->
    <div class="zxy-head">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC"
        alt
        @click="zxyback"
      />
      <p>一对一辅导</p>
      <img
        src="data:image/png;base64,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"
        alt
        @click="zxyserch()"
      />
      <!-- 头部结束 -->
    </div>
    <!-- 身体部分 -->
    <div class="zxy-body">
      <!-- 固定头部下面的选项 -->
      <div class="zxy-div">
        <ul>
          <li @click="time()" :style="{color:falg?'orange':'#8c8c8c'}">选择上课时间</li>
          <li @click="didian()" :style="{color:falg1?'orange':'#8c8c8c'}">选择上课地点</li>
        </ul>
      </div>
      <!-- 讲师列表数据/ -->
      <div class="zxy-list" v-show="!falg" v-if="!falg1">
        <ul>
          <li>
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
              alt
            />
            <div>
              <p>TNT--李</p>
              <p>男 10年教龄</p>
            </div>
            <p>预约</p>
          </li>
           <li>
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191q20gY29bo1566617207.jpg"
              alt
            />
            <div>
              <p>齐钰</p>
              <p>女 8年教龄</p>
            </div>
            <p>预约</p>
          </li>
           <li>
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019i5PsxDwbxK1571361181.jpg"
              alt
            />
            <div>
              <p>森一老师</p>
              <p>男 8年教龄</p>
            </div>
            <p>预约</p>
          </li>
           <li>
            <img
              src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
              alt
            />
            <div>
              <p>宋老师</p>
              <p>男 20年教龄</p>
            </div>
            <p>预约</p>
          </li>

          <li>
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019OqEaz2TeUE1567344388.jpg"
              alt
            />
            <div>
              <p>T1陆老师</p>
              <p>男 8年教龄</p>
            </div>
            <p>预约</p>
          </li>
          <li>
            <img
              src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019p7cwc0dX971567344580.jpg"
              alt
            />
            <div>
              <p>T2周老师</p>
              <p>男 8年教龄</p>
            </div>
            <p>预约</p>
          </li>
        </ul>
      </div>
      <!-- 上课地点内容 -->
      <div class="zxy-didian" v-show="falg1">
        <div class="zxy-didian-1">
          <p>老师类型</p>
          <ul>
            <li>M1</li>
            <li>M2</li>
            <li>M3</li>
            <li>M4</li>
            <li>M5</li>
            <li>M6</li>
            <li>M7</li>
            <li>M8</li>
            <li>M9</li>
            <li>M10</li>
            <li>M11</li>
            <li>M12</li>
            <li>M13</li>
            <li>M14</li>
            <li>M15</li>
            <li>M16</li>
            <li>M17</li>
            <li>M18</li>
            <li>M19</li>
            <li>M20</li>
          </ul>
        </div>
        <div class="zxy-didian-2">
          <p>只看</p>
          <div>
            <van-checkbox v-model="checked2" shape="square">已关注</van-checkbox>
            <van-checkbox v-model="checked1" shape="square">上过课的</van-checkbox>
          </div>
        </div>
        <div class="zxy-didian-1">
          <p>性别</p>
          <ul>
            <li>男</li>
            <li>女</li>
          </ul>
        </div>
        <div class="zxy-didian-1">
          <p>年级</p>
          <ul>
            <li>小学一年级</li>
            <li>小学二年级</li>
            <li>小学三年级</li>
            <li>小学四年级</li>
            <li>小学五年级</li>
            <li>小学六年级</li>
            <li>初一</li>
            <li>初二</li>
            <li>初三</li>
            <li>高一</li>
            <li>高二</li>
            <li>高三</li>
            <li>高四</li>
          </ul>
        </div>
        <div class="zxy-didian-1">
          <p>学科</p>
          <ul>
            <li>语文</li>
            <li>数学</li>
            <li>英语</li>
            <li>物理</li>
            <li>化学</li>
            <li>地理</li>
            <li>生物</li>
            <li>历史</li>
            <li>信息技术</li>
          </ul>
        </div>
        <div class="zxy-foot">
          <ul>
            <!-- 底部导航按钮 -->
            <li @click="app()">重置</li>
            <li>确定</li>
          </ul>
        </div>
      </div>
      <!-- 选择上课时间的内容 -->
      <div class="zxy-time-box" v-if="falg">
        <div class="zxy-time">
          <!-- <div class="zxy-time-1">
            <p>日期</p>
            <ul>
              <li>周一</li>
              <li>周二</li>
              <li>周三</li>
              <li>周四</li>
              <li>周五</li>
              <li>周六</li>
              <li>周日</li>
            </ul>
            <ul>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
            </ul>
          </div> -->
          <el-calendar v-model="value">
          </el-calendar>
          <!-- 时间 -->
          <div class="zxy-time-2">
            <p>投票</p>
            <div>
              <div>
                <input type="text" placeholder="开始时间" @click="up" v-model="time1"/>
                <van-icon name="clock-o" size="0.22rem" />
              </div>
              <p>--</p>
              <div>
                <input type="text" placeholder="结束时间" @click="up1" v-model="time2"/>
                <van-icon name="clock-o" size="0.22rem" />
              </div>
            </div>
          </div>
           <!-- <van-cell is-link @click="showPopup">展示弹出层</van-cell> -->

           <van-popup v-model="show" position="bottom"><van-datetime-picker
           v-model="currentTime"
           type="time"
           :filter="filter"
           @confirm="confirm"
           @cancel="cancel"
           /></van-popup>
           <van-popup v-model="show1" position="bottom">
              <van-datetime-picker
           v-model="currentTime1"
           type="time"
           :filter="filter"
           v-show="show1"
           @confirm="confirm"
           @cancel="cancel"
           />
           </van-popup>
          
          
          <!-- 时间 -->
          <!-- <van-datetime-picker v-model="currentTime1" type="time" :min-hour="10" :max-hour="20" v-show="dd1"/>
          <van-datetime-picker v-model="currentTime2" type="time" :min-hour="10" :max-hour="20" v-show="dd2"/> -->
          <div class="zxy-foot">
            <ul>
              <!-- 底部导航按钮 -->
              <li @click="app()">重置</li>
              <li>确定</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Oto",
  data() {
    return {
      falg: false,
      falg1: false,
      checked1: false,
      checked2: false,
      show:false,
      show1:false,
      currentTime:"00:00",
      currentTime1:"00:00",
      time1:"",
      time2:"",
       value: new Date()
    };
  },
  methods: {
    time() {
      this.falg = !this.falg;
      this.falg1 = false;
    },
    didian() {
      this.falg1 = !this.falg1;
      this.falg = false;
    },
    zxyback() {
      this.$router.go(-1);
    },
    zxyserch(){
      this.$router.push({ path: "/serch" });
    },
    app() {
      this.falg1 = false;
      this.falg = false;
    },
    up(){
      this.show=true;
    },
    up1(){
      this.show1=true;
    },
     filter(type, options) {
      if (type === 'minute') {
        return options.filter(option => option % 5 === 0)
      }
      return options;
    },
    confirm(val){
      console.log(val)
      this.time1=this.currentTime;
      this.time2=this.currentTime1
      this.show=false;
      this.show1=false
    },
    cancel(){
      this.show=false;
      this.show1=false
    }
  }
};
</script>

<style lang="scss">
.zxy-box {
  background: #f0f2f5;
}
.el-calendar__header{
  display: none;
}
.el-calendar__body{
  &>table{
    &>thead{
      font-size: 0.26rem;
    }
    & tr:nth-of-type(1),tr:nth-of-type(2),tr:nth-of-type(3),tr:nth-of-type(6){
      display: none;
    }
    & tr>td{
      border: none;
      text-align: center;
      font-size: 0.28rem;
      font-weight: 500;
      height: 0.8rem;
      line-height: 0.35nrem;
      padding-top: 0.4rem;
    }
    .el-calendar-day{
      border-radius: 50%;
      width:0.5rem;
      height: 0.5rem;
      margin:0 auto;
    }
    .el-calendar-table,.el-calendar-day:hover{
         background-color: #eb6100;
    }
    .is-selected{
      background: #fff;
    }
  }
}
.van-picker{
  position: fixed;
  z-index: 2100;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4rem;
}
.van-hairline--top-bottom{
  &>.van-picker__cancel{
    font-size: 0.26rem;
  }
  &>.van-picker__confirm{
    font-size: 0.26rem;
  }
}
.van-picker__columns{
  font-size: 0.26rem;
  &>.van-picker-column{
    font-size: 0.26rem;
  }
}
.zxy-head {
  position: fixed;
  top: 0;
  left: 0;
  height: 0.75rem;
  width: 5.86rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.26rem;
  background: #fff;
  & > img:nth-of-type(1) {
    width: 0.17rem;
    height: 0.27rem;
  }
  & > p {
    font-size: 0.32rem;
    color: #595959;
  }
  & > img:nth-of-type(2) {
    width: 0.32rem;
    height: 0.34rem;
  }
}
.zxy-body {
  margin-top: 0.76rem;
  & > .zxy-div {
    width: 100%;
    height: 0.71rem;
    background: #fff;
    & > ul {
      width: 100%;
      display: flex;
      & > li {
        width: 50%;
        height: 0.71rem;
        text-align: center;
        font-size: 0.25rem;
        line-height: 0.71rem;
        color: #8c8c8c;
      }
    }
  }
  & > .zxy-list {
    padding: 0 0.18rem;
    & > ul {
      & > li {
        margin-top: 0.2rem;
        width: 6.04rem;
        height: 1.38rem;
        background: #fff;
        border-radius: 0.1rem;
        display: flex;
        align-items: center;
        & > img {
          width: 0.68rem;
          height: 0.68rem;
          margin-left: 0.24rem;
          margin-right: 0.24rem;
          border-radius: 50%;
        }
        & > div {
          width:3.5rem;
          & > p:nth-of-type(1) {
            font-size: 0.19rem;
            color: #ea7a2f;
          }
          & > p:nth-of-type(2) {
            font-size: 0.2rem;
            color: #b7b7b7;
            margin-top: 0.1rem;
          }
        }
        & > p {
          font-size: 0.24rem;
          padding: 0.1rem 0.26rem;
          border-radius: 0.4rem;
          background: #ebeefe;
          color: #eb6100;
        }
      }
    }
  }
}

.zxy-didian {
  width: 100%;
  background: #fff;
  & > .zxy-didian-1 {
    border-bottom: 1px solid #eee;
    padding: 0.2rem 0;
    width: 100%;
    background: #fff;
    & > p {
      font-size: 0.2rem;
      margin-left: 0.2rem;
    }
    & > ul {
      display: flex;
      flex-wrap: wrap;
      & > li {
        margin-left: 0.13rem;
        margin-right: 0.13rem;
        font-size: 0.22rem;
        width: 1.3rem;
        height: 0.58rem;
        background: #f5f5f5;
        text-align: center;
        line-height: 0.56rem;
        margin-top: 0.2rem;
        border-radius: 0.02rem;
      }
    }
  }
  & > .zxy-didian-2 {
    padding: 0.2rem;
    border-bottom: 1px solid #eee;
    & > p {
      font-size: 0.2rem;
      margin-bottom: 0.2rem;
    }
    & > div {
      display: flex;
      & .van-checkbox {
        margin-right: 0.3rem;
        font-size: 0.23rem;
        border-radius: 0.05rem;
        & > span {
          color: #8c8c8c;
          line-height: 0.25rem;
        }
      }
    }
  }
}
.zxy-time {
  // width: 100%;
  padding: 0.2rem 0.2rem;
  background: #f0f2f5;
  flex: 1;
  & > .zxy-time-1 {
    width: 6rem;
    background: #fff;
    & > p {
      font-size: 0.2rem;
      margin-left: 0.2rem;
      padding-top: 0.1rem;
      margin-bottom: 0.2rem;
      color: rgb(86, 86, 86);
    }
    & > ul:nth-of-type(1) {
      display: flex;
      justify-content: space-around;
      & > li {
        font-size: 0.2rem;
        color: rgb(86, 86, 86);
      }
    }
    & > ul:nth-of-type(2) {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      & > li {
        width: 14.28%;
        text-align: center;
        line-height: 1rem;
        font-size: 0.38rem;
      }
    }
  }
  & > .zxy-time-2 {
    margin-top: 0.18rem;
    background: #fff;
    & > p {
      padding: 0.2rem;
      font-size: 0.22rem;
      color: #595959;
    }
    & > div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding-bottom: 0.32rem;
      & > div {
        width: 2.5rem;
        height: 0.58rem;
        border: 1px solid #bfbfbf;
        border-radius: 0.05rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        & > input {
          width: 1.8rem;
          height: 0.4rem;
          border: none;
          border-radius: 0.05rem;
          background: rgb(235, 235, 228);
        }
        & > input::-webkit-input-placeholder {
          font-size: 0.22rem;
          color: #b7b7b7;
        }
      }
    }
  }
}
.zxy-foot {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 6.4rem;
  height: 0.75rem;
  background: #fff;
  border-top: 1px solid #eee;
  & > ul {
    display: flex;
    & > li {
      width: 50%;
      text-align: center;
      line-height: 0.75rem;
      font-size: 0.3rem;
    }
    & > li:nth-of-type(1) {
      color: #eb6100;
    }
    & > li:nth-of-type(2) {
      color: #fff;
      background: #eb6100;
    }
  }
}
</style>
