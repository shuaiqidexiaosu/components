<template>
  <div>
    <el-breadcrumb separator="/">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
      <el-breadcrumb-item
        v-for="item in navs"
        :key="item.path"
        v-show="item.meta.title !== '主页'"
        :to="{ path: item.path }"
        >{{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  computed: {
    navs() {
      // 获取所有的路由
      let routes = this.$route.matched
      console.log(routes[routes.length - 1])
      routes[0].path = '/'
      return routes
    },
  },
}
</script>

<style lang="less" scoped></style>
