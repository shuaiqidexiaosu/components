<template>
  <el-container  style="height: 100vh;min-width:1567px">
    <div style="height: 100vh" id="Navigation">
      <el-aside
        width="200px"
        style="background-color: rgb(84, 92, 100); height: 100vh"
      >
        <Navigation />
      </el-aside>
    </div>
    <el-container >
      <el-header class="header" id="Header">
        <Header />
      </el-header>
      <div style="margin: 5px"><Tag /></div>
      <el-divider></el-divider>
      <el-main id="content" >
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue'
import Navigation from './Navigation.vue'
import driverObj from './steps'
import Tag from '@/components/Tag.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  mounted() {
    // 只展示一次
    if (sessionStorage.getItem('isShow') === null) {
      driverObj.drive()
      sessionStorage.setItem('isShow', 'true')
    }
  },
  components: {
    Header,
    Navigation,
    Tag,
  },
}
</script>

<style lang="less" scoped>
@divider-margin: 28px;
.header {
  font-size: 20px;
  background-color: #e4e7ed;
}
.el-divider--horizontal {
  // margin: 20px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
