
<template>
  <div class="out_color">
   <div class="logo_box">
    <img src="@/assets/logo.png" class="logo"/>
   </div>
    <div class="title">综测与奖学金材料<br/>审核系统</div>
    <el-aside width="200px">
      <el-menu
        style="border: none"
       
        :router="true"
        :default-active="currentPath"
        :unique-opened="false"
      >
     
        <el-menu-item v-for="item in menuList" :key="item.key" :index="item.path">
          <template #title>
            <el-icon>
                    <component :is="item.icon"/>
                  </el-icon>
            {{ item.name }}
          </template>

        </el-menu-item>

      </el-menu>
    </el-aside>
  </div>
</template>

<script>
import { ADMIN_MENU, STUDENT_MENU } from './const'
export default {
  data() {
    return {
      currentPath: '/patientMessage',
      menuList:[]
    }
  },
  //部件
  components: {},
  //静态
  props: {},
  //对象内部的属性监听，也叫深度监听
  watch: {
    '$route.path'(v) {
      if (v) {
        this.getCurrnetPath(v)
      }
    },
  },
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    getCurrnetPath(v) {
      if (v.startsWith('/patientMessageEditor')) {
        this.currentPath = '/patientMessage'
      } else {
        this.currentPath = v
      }
    },

    // 获取菜单数据
    getMenuList() {
      let userType=this.$store.state.userInfo.userType
      this.menuList=userType==='student'?STUDENT_MENU:ADMIN_MENU
    }
  },
  //请求数据
  created() {
    this.getMenuList()
  },
  mounted() {
    this.getCurrnetPath(this.$route.path)
  },
}
</script>

<style lang="scss" scoped>
.logo_box{
  display: flex;
  justify-content: center;
}
.logo{
  width: 100px;
  height: 100px;
}
.out_color {
  background-color: #fff;
  width: 200px;
  height: 100vh;
  :deep{
    .el-menu-item{
      padding: 0;
      padding-left: 0!important;
      margin: 8px 32px;
      justify-content: center;
    }
    .el-menu-item.is-active{
      background-color: #4871C0 !important;
      color: #f2f2f2 !important;
      margin:8px 32px;
      border-radius: 6px;
    }
  }

  .title {
    text-align: center;
    font-size: 20px;
    color: #171a17;
    margin: 8px 16px 16px;
  }
}
</style>
