<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './views/login/Login.vue'
export default {
  components: {
    Login,
  },
  mounted() {
    
  },
}
</script>

<style lang="less" scoped>
@test: blue;
div {
  h1 {
    color: @test;
  }
}
</style>
