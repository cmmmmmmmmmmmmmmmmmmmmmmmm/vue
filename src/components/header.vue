<template>
  <div class="header">
    <el-header>
      <el-dropdown @command="handleCommand">
        <span class="username">
          <span class="user-type">
            {{
              this.$store.state.userInfo.userType === 'student'
                ? '学生'
                : '管理员'
            }}
            / &nbsp;
          </span>
          {{ this.$store.state.userInfo.username }}
          <i
            class="el-icon-caret-bottom usericon"
            style="margin-right: 15px"
          ></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-header>
  </div>
</template>

<script>
export default {
  //部件
  components: {},
  //静态
  props: {},
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    handleCommand(command) {
      if (command === 'loginOut') {
        // 下面这句是真实请求退出登录接口
        // var res =  this.$Http.loginOut()
        this.$message.success('退出成功')
        this.$router.push('/')
        localStorage.removeItem('COBRAIN_ADMIN_TK')
        localStorage.removeItem('userInfo')
        localStorage.removeItem('scholar')
      }
    },
  },
  //请求数据
  created() {},
  mounted() {},
}
</script>

<style scoped lang="scss">
.header {
  text-align: right;
  line-height: 60px;
  background: white;
  z-index: 99;
  :deep {
    .el-dropdown:focus-visible {
      outline: none !important;
    }
  }
  .user-type {
    color: #555;
    font-size: 14px;
  }
  .username {
    font-size: 18px;
    color: #333;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  * :focus-visible {
      outline: none !important;
    }
}
</style>
