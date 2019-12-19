<template>
    <div class="index">
      <div class="content">
        <router-view></router-view>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from "./Footer";
    export default {
        name: "Index",
        components: {Footer}
    }
</script>

<style lang="scss" >
  body,html,.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    font-size: 0.16rem;
    line-height: 0.2rem;
    .content{
      width: 100%;
      flex: 1;
      overflow: hidden;
    }
  }
</style>
