
<template>
  <div class="out_color">
    <div class="title">综测与奖学金材料<br/>审核系统</div>

    <el-aside width="200px">
      <el-menu
        style="border: none"
        background-color="#545c64"
        text-color="#fff"
        :router="true"
        :default-active="currentPath"
        :unique-opened="false"
      >
        <el-menu-item v-for="item in menuList" :key="item.key" :index="item.path">
          <template #title>
            <i :class="item.icon"></i>
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
.out_color {
  background-color: #545c64;
  width: 200px;
  height: 100vh;

  .title {
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin: 23px 16px;
  }
}
</style>
