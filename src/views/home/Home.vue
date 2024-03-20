<template>
  <div>
    <el-row :gutter="12">
      <router-link to="/">
        <el-col :span="6">
          <Card msg="学校信息" />
        </el-col>
      </router-link>
      <router-link to="/">
        <el-col :span="6">
          <Card msg="学校信息" />
        </el-col>
      </router-link>
      <router-link to="/mine">
        <el-col :span="6">
          <Card msg="学校信息" />
        </el-col>
      </router-link>
      <a href="https://v2.cn.vuejs.org/" target="blank">
        <el-col :span="6">
          <Card msg="学校信息" />
        </el-col>
      </a>
      <h1>
        {{ this.$store.state.count }}
      </h1>
    </el-row>
  </div>
</template>

<script>
import Card from './components/Card.vue'
export default {
  data() {
    return {
      info: null,
    }
  },
  methods: {},
  components: {
    Card,
  },
}
</script>

<style lang="less" scoped></style>
