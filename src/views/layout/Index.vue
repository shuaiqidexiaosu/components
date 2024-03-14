<template>
  <el-container>
    <el-aside width="200px" class="navigation">
      <Navigation />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue'
import Navigation from './Navigation.vue'
export default {
  components: {
    Header, Navigation
  }
}
</script>

<style lang="less" scoped>
.navigation {
  //   position: fixed;
  height: 100vh;
  background-color: rgb(84, 92, 100);
  // position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.header {
  background-color: #E6A23C;

}
.main{
  background: #909399;
}

</style>