<template>
  <div>
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      :closable="tag.name !== '主页'"
      class="tag"
      :effect="tag.name === '主页' ? 'dark' : 'light'"
      @click="pushRoute(tag.url_name)"
      @close="tag_close(tag.name)"
    >
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'tag',
  data() {
    return {
      // 标签名:设置
      tags: this.$store.state.tags,
      tag_name: '',
      //路径名: home
      url_name: '',
    }
  },
  watch: {
    $route() {
      let routes = this.$route.matched
      // 标签名,首页
      this.tag_name = routes[routes.length - 1].meta.title
      console.log(this.tag_name)
      //路由名,比如: home
      this.url_name = routes[routes.length - 1].name
      console.log(this.url_name)
      for (let tag in this.tags) {
        if (tag.name === this.tag_name) {
          return
        } else {
          this.$store.commit('addTags', this.tag_name, this.url_name)
        }
      }
      this.$router.push({ name: this.url_name })
      console.log(this.tags)
    },
  },
  // computed: {
  //   tags() {
  //     // 获取所有的路由
  //     let routes = this.$route.matched
  //     // 标签名,首页
  //     this.tag_name = routes[routes.length - 1].meta.title
  //     //路由名,比如: home
  //     this.url_name = routes[routes.length - 1].name
  //     console.log(routes)
  //     routes[0].path = '/'
  //     return routes
  //   },
  // },
  methods: {
    pushRoute(url_name) {
      // 跳转路由 tag_name 可以是 'setting'
      this.$router.push({ name: url_name })
    },
    tag_close(name) {
      this.$store.commit('removeTag', name)
    },
  },
}
</script>

<style lang="less" scoped>
.tag {
  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
