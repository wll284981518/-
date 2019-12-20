<template>
  <!-- 视频播放 -->
  <div class="playblack">
    <div class="playblack-top">
      <i class="fa fa-angle-left" @click="cz()"></i>
      <p>视频播放</p>
    </div>
    <div class="playblack-content">
      
    </div>
  </div>
</template>

<script>
export default {
    name:"Playblack",
     methods: {
    cz() {
      this.$router.go(-1);
    },
    }
};
</script>

<style lang="scss">
body,
html,
.playblack {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .playblack-top {
    height: 0.84rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #222222;
    i {
      display: inline-block;
      font-size: 0.5rem;
      color: #333333;
      margin-left: 0.3rem;
    }
    p {
      font-size: 0.26rem;
      margin-right: 2.36rem;
    }
  }
  .playblack-content {
    width: 100%;
    flex: 1;
    overflow: auto;
  }
}
</style>