<template>
  <div class="reward">
    <el-card style="margin-bottom: 15px">
      <el-form :inline="true">
        <el-form-item label="学号">
          <el-input
            placeholder="请输入学号进行搜索"
            style="width: 240px"
            v-model="searchForm.id"
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
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table border :data="list">
        <el-table-column label="学号（ID）" prop="id"></el-table-column>
        <el-table-column label="学生姓名" prop="name"></el-table-column>
        <el-table-column label="奖学金类型" prop="reward">
          <template #default="scope">
            <div>
              {{
                scope.row.reward
                  ? scholarOption.filter(
                      (option) => option.value == scope.row.reward
                    )?.[0]?.label
                  : '-'
              }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="奖学金金额 (元)" prop="sum"></el-table-column>
        <el-table-column
          sortable
          label="综测分数"
          prop="score"
        ></el-table-column>
        <el-table-column
          sortable
          label="综测排名"
          prop="rank"
        ></el-table-column>
        <el-table-column
          sortable
          label="体育成绩"
          prop="sport"
        ></el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="text" @click="openDialog(scope.row)"
              >奖学金评定</el-button
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

  <el-dialog
    v-model="dialogVisible"
    title="奖学金评定"
    width="500"
    draggable
    overflow
  >
    <el-form
      :inline="true"
      :model="formData"
      class="demo-form-inline"
      style="padding-left: 32px"
    >
      <el-form-item label="奖学金类型">
        <el-select
          v-model="formData.reward"
          placeholder="请选择奖学金类型"
          clearable
          @change="onTypeChange"
        >
          <el-option
            v-for="item in scholarOption"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="奖学金金额">
        <el-input
          v-model="formData.sum"
          placeholder="请输入奖学金金额"
          clearable
        >
          <template #append>元</template></el-input
        >
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="onsubmitReward"> 确定 </el-button>
        <el-button @click="dialogOverflowVisible = false">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import Pagination from '@/components/pagination'
import axios from 'axios'

export default {
  //部件
  components: { Pagination },
  data() {
    return {
      dialogVisible: false,
      searchForm: {
        type: 0,
        name: '',
      },
      formData: {
        reward: undefined,
        sum: '',
        id: '',
      },
      scholarOption: [
        { label: '国家奖学金', value: 'country', sum: 8000 },
        { label: '省级奖学金', value: 'province', sum: 5000 },
        { label: '校级奖学金', value: 'school', sum: 2000 },
      ],
      pagiParams: {
        pageNumber: 1,
        pageSize: 10,
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
    openDialog(row) {
      let { reward, sum, id } = row
      this.dialogVisible = true
      this.formData = { reward, sum, id }
    },
    onsubmitReward() {
      this.dialogVisible = false
      this.list.forEach((item) => {
        if (item.id == this.formData.id) {
          item.reward = this.formData.reward
          item.sum = this.formData.sum
        }
      })
      this.formData = {}
      this.$message.success('奖学金评定成功')
    },
    onTypeChange(item) {
      this.formData.reward = item
      this.formData.sum = this.scholarOption.filter(
        (option) => option.value == item
      )[0].sum
    },
    search() {
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
      axios.get('/js/data.json').then(
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
    goDetail({ id }) {
      // console.log(detail, 'detail');
      this.$router.push({ path: '/reviewDetail', query: { id } })
    },
    reset() {
      this.searchForm = JSON.parse(this._searchForm)
    },
    goEdit() {
      this.$message.warning('此功能暂未开发')
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
.reward {
  .el-input__wrapper,
  .el-select__wrapper {
    width: 200px;
  }
}
</style>
