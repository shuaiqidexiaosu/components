<template>
  <el-menu
    :default-active="myPath"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
  >
    <div>
      <router-link to="/" class="router">
        <h5><i class="el-icon-platform-eleme"></i>苏健尧的工具箱</h5>
      </router-link>
    </div>
    <el-menu-item index="/">
      <i class="el-icon-s-home"></i>
      <span slot="title">主页</span>
    </el-menu-item>
    <el-menu-item index="/tools">
      <i class="el-icon-menu"></i>
      <span slot="title">工具</span>
    </el-menu-item>
    <el-menu-item index="/setting">
      <i class="el-icon-s-tools"></i>
      <span slot="title">设置</span>
    </el-menu-item>
    <el-menu-item index="/mine">
      <i class="el-icon-user-solid"></i>
      <span slot="title">我的</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      myPath: this.$route.path, //导航菜单高亮的路径
    }
  },
}
</script>

<style lang="less" scoped>
.el-menu {
  border: 0;
}

h5 {
  text-align: center;
  margin-top: 10px;
}

.router {
  text-decoration: none;
  color: aliceblue;
}

.router:hover {
  color: #409eff;
}
</style>
