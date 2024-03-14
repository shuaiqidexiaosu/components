<template>
  <!-- <el-container>
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
  </el-container> -->
  <el-container style="height:100vh">
    <div style="height:100vh">
      <el-aside width="200px" style="background-color: rgb(84, 92, 100);height:100vh">
        <Navigation />
      </el-aside>
    </div>
    <el-container>
      <el-header class="header">
        <Header />
      </el-header>
      <el-main>
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
.header {
  text-align: right;
  font-size: 30px;
  background-color: #e6a23c;
}

</style>