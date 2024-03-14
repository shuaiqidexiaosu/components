<template>
  <div>
    <el-row :gutter="12">
      <a href="/tools">
        <el-col :span="6">
          <Card />
        </el-col></a>
      <a href="/setting">
        <el-col :span="6">
          <Card />
        </el-col></a>
      <a href="/">
        <el-col :span="6">
          <Card />
        </el-col></a>
      <a href="/">
        <el-col :span="6">
          <Card />
        </el-col></a>
    </el-row>
  </div>
</template>

<script>
import Card from './components/Card.vue';
export default {
  components: {
    Card
  }
}
</script>

<style lang="less" scoped>
</style>