<template>
  <div class="login_page">
    <el-card class="box_card">
      <div slot="header" class="clearfix">
        <h1>苏健尧的工具箱</h1>
      </div>
      <div class="login-form">
        <el-form :model="login_form" :rules="loginRules" ref="loginFormRef">
          <el-form-item prop="username">
            <el-input
              type="text"
              v-model="login_form.username"
              placeholder="请输入用户名"
              @keydown.enter.native="handleLogin"
            >
              <template slot="prepend"
                ><i style="font-size: 20px" class="el-icon-user"></i
              ></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              v-model="login_form.password"
              show-password
              placeholder="请输入密码"
              @keydown.enter.native="handleLogin"
            >
              <!-- el组件要加native -->
              <template slot="prepend"
                ><i style="font-size: 20px" class="el-icon-key"></i
              ></template>
            </el-input>
          </el-form-item>

          <el-form-item style="margin-top: -10px; margin-bottom: -5px">
            <el-checkbox
              v-model="checked"
              style="color: #a0a0a0; margin-top: -10px"
              >点击填写登陆信息</el-checkbox
            >
          </el-form-item>

          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="handleLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      checked: false,
      login_form: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{ required: true, message: '请输入账户', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  mounted() {
    this.$notify({
      title: '提示',
      dangerouslyUseHTMLString: true,
      message: `
      账号:苏健尧<br>
      密码:123456`,
      type: 'success',
      duration:10000
    })
  },
  watch: {
    checked() {
      if (this.checked === true) {
        this.login_form.username = sessionStorage.getItem('username')
        this.login_form.password = sessionStorage.getItem('password')
      }
    },
  },
  methods: {
    handleLogin() {
      if (
        this.login_form.username === '苏健尧' &&
        this.login_form.password === '123456'
      ) {
        sessionStorage.setItem('isAuth', 'true')
        this.$router.push({ name: 'home' })
        console.log('router')
        this.$store.commit('setUsername', this.login_form.username)
        sessionStorage.setItem('username', this.login_form.username)
        sessionStorage.setItem('password', this.login_form.password)
        this.$notify({
          title: '祝贺主人',
          message: '登陆成功',
          type: 'success',
        })
      } else {
        this.$notify.error({
          title: '错误',
          message: '主人,账号或密码错误',
        })
      }
    },
  },
}
</script>

<style lang="less" scoped>
h1 {
  text-align: center;
}
.login_page {
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_title {
  font-size: 20px;
}

.box_card {
  width: 375px;
  border-radius: 20px;
  box-shadow: 6px 6px 6px 5px rgba(0, 0, 0, 0.16);
}
</style>
