<template>
  <div class="login">
    <div class="main">
      <div class="left">
        <img src="../../assets/login-bg.png" alt="" />
      </div>
      <div class="right">
        <div class="r-form">
          <div class="hello">
            <img src="../../assets/login-left-line.png" alt="" />
            <span class="text">欢迎使用</span>
            <img src="../../assets/login-right-line.png" alt="" />
          </div>
          <div class="r-title">综测与奖学金材料审核系统</div>
          <el-tabs
            v-model="userType"
            v-show="loginType!=='register'"
            class="demo-tabs"
            @tab-click="changeUserType"
          >
            <el-tab-pane label="学员登录" name="student"></el-tab-pane>
            <el-tab-pane label="管理员登录" name="admin"></el-tab-pane>
          </el-tabs>
          <el-form :model="formData" :rules="rules" ref="ruleForm">
            <el-form-item label="账号" prop="username">
              <el-input
                placeholder="请输入登录账号"
                v-model.trim="formData.username"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" style="font-size: 20px">
              <el-input
                placeholder="请输入登录密码"
                type="password"
                v-model.trim="formData.password"
              ></el-input>
            </el-form-item>
            <div class="btn-wrap">
              <el-button size="large" class="btn" @click="login">
              {{ loginType==='register'?'注册':'登录' }}</el-button>
              <div
                class="text-box"
                @click="goRegister"
                v-show="userType === 'student'"
              >
                {{registerText
                }}
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      userType: 'student',
      formData: {
        username: '',
        password: '',
      },
      rules: {
        //这种rules方案，是可以用来检验例如：手机号是否符合手机号规则，身份证等.官网上还有更简单的
        username: {
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error('请输入登录账号'))
            }
            callback()
          },
          trigger: 'blur',
        },
        password: {
          validator: (rule, value, callback) => {
            if (!value) {
              return callback(new Error('请输入登录密码'))
            }
            callback()
          },
          trigger: 'blur',
        },
      },
      loginType:this.$route.query.type ,
      registerText:'还没有账号？去注册'
    }
  },
  watch: {
    $route(){
        this.loginType = this.$route.query.type
        this.getRegisterText()
      },
  },
  methods: {
    getRegisterText() {
      let text= this.loginType === 'register'
                    ? '已经有账号，去登录'
                    : '还没有账号？去注册'
      this.registerText = text
    },
    changeUserType(tab) {
      console.log('tab', tab.props.name)
      this.userType = tab
    },
    login() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.submit()
        } else {
          return false
        }
      })
    },
    async submit() {
      //存储用户信息
      let userInfo = {
        username: this.formData.username,
        userType: this.userType,
      }
      localStorage.setItem('USER_INFO', JSON.stringify(userInfo))
      this.$store.commit('SET_USER', {
        username: this.formData.username,
        userType: this.userType,
      })
      //跳转页面
      this.$router.push('/patientMessage')
    },
    goRegister() {
      console.log('register1', this.$route.query.type, this.loginType);
      if (this.loginType !== 'register') {
        this.$router.push({ path: '/login', query: { type: 'register' } })
      } else {
        this.$router.push({ path: '/login' })
      }
    },
  },
  mounted() {},
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 90vh;
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      flex: 48;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      img {
        width: 39vw;
        height: 37vw;
      }
    }
    .right {
      flex: 51;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      .r-form {
        min-height: 500px;
        min-width: 300px;
        width: 35vw;
        height: 67vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 5vw;
        padding-right: 5vw;
        background: linear-gradient(90deg, #619afe 0%, #186cff 100%);
        box-shadow: 0px 0px 40px 0px rgba(15, 19, 40, 0.1);
        border-radius: 20px;
        .hello {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 10px;
          .text {
            color: #fff;
            font-size: 22px;
            margin: 0 12px;
          }
          img {
            width: 50px;
          }
        }
        .r-title {
          font-size: 28px;
          color: #fff;
          margin-bottom: 5vh;
        }
        .btn-wrap {
          width: 100%;
          margin-top: 4.1vh;
          .btn {
            width: 100%;
            border-radius: 35px;
            color: #2e7afe;
            font-size: 20px;
          }
          .text-box {
            color: #fff;
            font-size: 16px;
            margin-top: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.login {
  .el-tabs {
    margin-bottom: 12px;
  }
  .el-tabs__active-bar {
    height: 3px;
    background-color: #fff;
  }
  .el-tabs__nav-wrap::after {
    height: 3px;
    background: linear-gradient(90deg, #619afe 0%, #186cff 100%);
  }
  .el-tabs__nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    // margin-bottom: 8px;
  }
  .el-tabs__item {
    font-size: 20px;
    color: #ddd;
    width: 50%;
  }
  .el-tabs__item:hover {
    color: #fff;
  }
  .el-tabs__item.is-active {
    color: #fff;
    font-size: 22px;
    font-weight: bolder;
  }
  .el-form-item__label {
    font-size: 20px;
  }
  .el-input.is-active .el-input__inner,
  .el-input__inner:focus {
    border-color: #fff;
  }
  ::-webkit-input-placeholder {
    color: #888 !important;
    opacity: 0.7;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #888 !important;
    opacity: 0.7;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #888 !important;
    opacity: 0.7;
  }
  :-ms-input-placeholder {
    color: #888 !important;
    opacity: 0.7;
  }
  .el-textarea__inner,
  .el-input__inner {
    background: transparent !important;
    caret-color: #888;
  }
  input:-internal-autofill-previewed,
  input:-internal-autofill-selected {
    -webkit-text-fill-color: #888 !important;
    transition: background-color 5000s ease-in-out 0s !important;
  }
  .el-form-item__label {
    font-size: 20px;
    color: #fff;
  }
  .el-input__inner {
    height: 5.5vh;
    min-height: 50px;
  }
}
</style>
