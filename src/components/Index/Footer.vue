<template>
    <div  class="foot">
      <ul>
		<router-link to="/home" tag="li">
			<img :src="this.$route.path=='/home'?'../../../static/foot-img/home-active.png':'../../../static/foot-img/home.png'" alt="">
		  <p>首页</p>
		</router-link>
		<router-link to="/course" tag="li">
			<img :src="this.$route.path=='/course'?'../../../static/foot-img/course-active.png':'../../../static/foot-img/course.png'" alt="">
		  <p>课程</p>
		</router-link>
		<router-link to="/study" tag="li">
			<img :src="this.$route.path=='/study'?'../../../static/foot-img/study-active.png':'../../../static/foot-img/study.png'" alt="">
		  <p>约课记录</p>
		</router-link>
		<router-link to="/edit" tag="li">
			<img :src="this.$route.path=='/edit'?'../../../static/foot-img/edit-active.png':'../../../static/foot-img/edit.png'" alt="">
		  <p>练习</p>
		</router-link>
		<router-link to="/my" tag="li">
			<img :src="this.$route.path=='/my'?'../../../static/foot-img/my-active.png':'../../../static/foot-img/my.png'" alt="">
		  <p>我的</p>
		</router-link>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
   .foot{
     width: 100%;
     height: 0.7rem;
     border-top: 1px solid #e1e1e1;
     background: #fff;
     padding-top:0.15rem;
     ul{
       width: 100%;
       height: 0.85rem;
       display: flex;
       li{
         width: 25%;
           img{
             width: 0.30rem;
             height: 0.28rem;
             display: block;
             margin: 0 auto;
           }
         p{
           font-size: 0.18rem;
           text-align: center;
           margin-top: 0.1rem;
         }
       }
     }
   }
</style>
