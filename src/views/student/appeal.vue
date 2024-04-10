<template>
  <div class="main">
    <el-card style="margin-bottom: 15px">
      <el-form :inline="true" class="form">
        <el-form-item label="学号">
          <el-input
            placeholder="请输入学号进行搜索"
            style="width: 240px"
            v-model="searchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="班级">
          <el-input
            placeholder="请输入班级进行搜索"
            style="width: 240px"
            v-model="searchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="学生姓名">
          <el-input
            placeholder="请输入学生姓名进行搜索"
            style="width: 240px"
            v-model="searchForm.name"
          ></el-input>
        </el-form-item>

        <el-form-item class="fr">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">搜索</el-button>
         
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table border :data="list">
        <el-table-column label="基本信息">
          <el-table-column label="学号" prop="id" width="120" />
          <el-table-column label="班级" prop="class" width="100" />
          <el-table-column label="姓名" prop="name" />
        </el-table-column>
        <el-table-column prop="deyuScore" label="思想素质总分"  />
        <el-table-column prop="nengliScore" label="发展能力总分"  />
        <el-table-column prop="xueyeScore" label="学业测评"  />

        <el-table-column prop="zongheScore" label="综合测评总分"  />
        <el-table-column prop="zongheRank" label="综合测评排名"  />
        <el-table-column
          prop="xueyeRank"
          label="学业测评专业排名"
          
        />
        <el-table-column prop="sportScore" label="体测总分"  />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="text" @click="goDetail(scope.row)"
              >详情</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        :pagiParams="pagiParams"
        @change="getListBySizePage"
        style="text-align: right; margin-top: 10px"
      ></Pagination>
    </el-card>
  </div>

  
</template>

<script>
import Pagination from '@/components/pagination'
import { SYS_LIST, TYPE_OPTIONS } from './const'
import axios from 'axios'
export default {
  //部件
  components: { Pagination },
  data() {
    return {
      searchForm: {
        type: [],
        name: '',
      },
      
      pagiParams: {
        pageNumber: 1,
        pageSize: 10,
        total: SYS_LIST.totalCount,
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
    // goPatientEditor() {
    //   this.$router.push('/patientMessageEditor')
    // },
    search() {
      // this.pagiParams.pageNumber = 1
      // this.getList()
      this.$message.warning('此功能暂未开发')
    },
    getListBySizePage(pageNumber, pageSize) {
      this.pagiParams.pageNumber = pageNumber
      this.pagiParams.pageSize = pageSize
      this.getList()
    },
    getList() {
      let data = JSON.parse(JSON.stringify(this.searchForm))
      if (this.searchForm.type == 0) {
        delete data.type
      }

      data.pageNumber = this.pagiParams.pageNumber
      data.pageSize = this.pagiParams.pageSize

    
      //这里暂时用axios模仿联网请求，到时候把import取消掉
      axios.get('/js/appeal.json').then(
        (res) => {
          let start = (data.pageNumber - 1) * data.pageSize
          let end = data.pageNumber * data.pageSize
          this.list = res.data.data.list.slice(start, end)
          this.pagiParams.total = res.data.data.totalCount
        },
        (res) => {
          console.log('error')
        }
      )

    },
    goDetail({ id }) {
      // console.log(detail, 'detail');
      this.$router.push({ path: '/appealDetail', query: { id } })
    },
    reset() {
      this.searchForm = JSON.parse(this._searchForm)
    },
   
   
   
   
  },
  //请求数据
  created() {},
  mounted() {
    this._searchForm = JSON.stringify(this.searchForm)
    this.getList()
  },
}
</script>

<style lang="scss">
.form {
  .el-input__wrapper,
  .el-select__wrapper {
    width: 200px;
  }
}
.sys-dialog {
  .el-input__wrapper,
  .el-select__wrapper {
    width: 244px;
  }
  .el-upload-list--picture-card .el-upload-list__item,
  .el-upload--picture-card,
  .el-upload-dragger {
    width: 100px;
    height: 100px;
  }
}
</style>
