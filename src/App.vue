<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body,html,#app{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
