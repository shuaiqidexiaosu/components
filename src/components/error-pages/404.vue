<template>
  <el-container>
    <div class="my_div animate__animated animate__shakeX">
      <h1 class="text-danger">404! 糟糕,页面好像没有呀</h1>
      <h4>页面将在2秒后跳转到首页</h4>
    </div>
  </el-container>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push('/')
    }, 2000)
  },
}
</script>

<style lang="less" scoped>
.my_div {
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  top: 40%;
  left: 40%;
}
</style>
