<template>
  <!-- <div class="header">
    <div style="margin-top: 8px">
      
    </div>
  </div> -->
  <div class="row ">
    <div class="col-4" style="padding: 20px">
       <Breadcrumb/>
    </div>
   
    <div class="col-8">
      <div class="row justify-content-end">
        
        <div class="col-2" style="padding: 17px; font-size: 15px">
          {{ format_date }}
        </div>
        <div class="col-2" style="padding: 17px">
          <i class="el-icon-user-solid"></i>

          <el-dropdown
            @command="handleCommand"
            show-timeout="100"
            :hide-on-click="false"
          >
            <span class="el-dropdown-link">
              <span>{{ this.$store.state.username }}</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown_menu">
              <el-dropdown-item command="logout"> 退出 </el-dropdown-item>
              <el-dropdown-item>
                <router-link to="/setting" class="link">设置</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      username: sessionStorage.getItem('username'),
      date: new Date(),
      format_date: '',
    }
  },
  mounted() {
    // 时间实时显示
    let _this = this // 声明一个变量指向Vue实例this，保证作用域一致
    this.timer = setInterval(() => {
      _this.date = new Date() // 修改数据date
      _this.format_date = moment(_this.date).format('MM-DD HH:mm:ss')
    }, 500)
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer) // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    // test() {
    //   let day = this.date.getDate()
    //   let month = this.date.getMonth()
    //   let minute = this.date.getMinutes()
    //   let second = this.date.getSeconds()
    //   let hour = this.date.getHours()
    //   this.format_date = `${day}-${month}  ${hour}:${minute}:${second}`
    //   console.log('timer')
    // },
    handleCommand(command) {
      if (command === 'logout') {
        this.logout()
      }
    },
    logout() {
      console.log('test')
      this.$confirm('主人,您确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          sessionStorage.setItem('isAuth', 'false')
          window.location.reload()
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出',
          })
        })
    },
  },
}
</script>

<style lang="less" scoped>
span {
  margin-left: 5px;
  font-size: 18px;
}
.link {
  text-decoration: none;
  color: #606266;
}
.link:hover {
  color: #66b1ff;
}
.dropdown_menu {
  font-size: 100px;
}
</style>
