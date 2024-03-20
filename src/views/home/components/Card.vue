<template>
  <div>
    <el-card shadow="hover" class="card animate__animated animate__bounce">
      <h3>{{msg}}</h3>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    msg:''
  }

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
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
}

.el-card.is-hover-shadow:hover {
  box-shadow: 0 7px 5px 0 rgba(0, 0, 0, 0.5);
}
</style>