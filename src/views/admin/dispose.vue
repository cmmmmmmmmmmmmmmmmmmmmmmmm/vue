<template>
  <div class="dispose">
    <div class="mini-title">
      <div></div>
      申诉处理
    </div>
    <el-card v-for="item in list" :key="item" class="base-info-item">
      <div class="base-info-item">
        <span> 申诉对象：</span>{{item.name }}
      </div>
      <div class="base-info-item">
        <span> 申诉时间：</span>{{item.creatTime }}
      </div>
      <div class="base-info-item">
        <span> 申诉原因：</span>{{item.reason }}
      </div>

      <template #footer> 
       <div class="footer">
        <el-button type="primary" @click="onDispose(item)"> 去处理 </el-button>
       </div>
        </template>
    </el-card>
  
   
    <Pagination
        :pagiParams="pagiParams"
        @change="getListBySizePage"
        style="text-align: right; margin-top: 10px"
      ></Pagination>
  </div>
</template>
<script>
import Pagination from '@/components/pagination'
import axios from 'axios'
export default {
  components: { Pagination },
  data: () =>{
    return {
      pagiParams: {
        pageNumber: 1,
        pageSize: 5,
        total: 0,
      },
      list: [],
    }
  },
  //静态
  props: {},
  //对象内部的属性监听，也叫深度监听
  watch: {},
  //属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用；
  computed: {},
  //方法表示一个具体的操作，主要书写业务逻辑；
  methods: {
    onDispose({ id }) {
      this.$router.push({ path: '/disposeDetail', query: { id } })
    },
    getListBySizePage(pageNumber, pageSize) {
      this.pagiParams.pageNumber = pageNumber
      this.pagiParams.pageSize = pageSize
      this.getList()
    },
    getList() {
      let data = {}
      

      data.pageNumber = this.pagiParams.pageNumber
      data.pageSize = this.pagiParams.pageSize

      //这里暂时用axios模仿联网请求，到时候把import取消掉
      axios.get('/js/appeal.json').then(
        (res) => {
          let start = (data.pageNumber - 1) * data.pageSize
          let end = data.pageNumber * data.pageSize
          console.log(this.pagiParams)
          console.log(start, end)
          this.list = res.data.data.list.slice(start, end)
          this.pagiParams.total = res.data.data.totalCount
        },
        (res) => {
          console.log('error')
        }
      )
    },
  },
  //请求数据
  created() {
    this. getList()
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.dispose {
  .base-info-item {
      margin-bottom: 16px;
      font-size: 16px;
      line-height: normal;
      span {
        color: #666;
        margin-right: 4px;
      }
    }
  .mini-title {
    font-size: 18px;
    margin: 12px 0;
    font-weight: bolder;
    display: flex;
    align-items: center;
    width: 100%;
    div {
      width: 4px;
      height: 18px;
      background-color: var(--el-color-primary);
      border-radius: 1px;
      margin-right: 6px;
    }
  }
  .footer{
    display: flex;
    justify-content: flex-end;
  }
  background-color: #fff;
  border-radius: 8px;
  padding:20px 32px 32px;
  margin-bottom: 24px;

}
</style>
