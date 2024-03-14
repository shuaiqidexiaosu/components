<template>
  <div>

    <el-card shadow="hover" class="card">
      鼠标悬浮时显示
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
a {
  text-decoration: none;
}
.card {
  margin: 10px;
  padding: 0;
  border-radius: 10px;
  height: 100px;
  border: 0;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.el-card.is-hover-shadow:hover {
  box-shadow: 0 21px 12px 0 rgba(0, 0, 0, 0.5);
}
</style>