<template>
  <div class="main">
    <el-card style="margin-bottom: 15px">
      <el-form :inline="true" class="form">
        <el-form-item label="综测申报事项">
          <el-input
            placeholder="请输入综测申报事项进行搜索"
            style="width: 240px"
            v-model="searchForm.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="测评分类">
          <el-cascader
            v-model="searchForm.type"
            :options="typeOption"
            placeholder="请选择测评分类"
            clearable
          >
          </el-cascader>
        </el-form-item>

        <el-form-item class="fr">
          <el-button @click="reset">重置</el-button>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="warning" @click="openDialog"
            >添加综测申报事项</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table border :data="list">
        <el-table-column label="综测申报事项名称" prop="name"></el-table-column>
        <el-table-column label="分值" sortable prop="score"></el-table-column>
        <el-table-column label="测评分类" prop="type">
          <template #default="scope">
            <el-tag :type="scope.row.type === '德育' ? 'success' : 'primary'">{{
              scope.row.type
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="测评类型" prop="option"></el-table-column>
        <el-table-column label="附件" prop="attachment">
          <template #default="scope">
            <el-image
              style="width: 80px; height: 80px"
              :src="scope.row.attachment[0]?.url"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="scope.row.attachment.map((item) => item.url)"
              :initial-index="0"
              fit="cover"
              preview-teleported="true"
            />
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template #default="scope">
            <el-button type="text" @click="openDialog(scope.row)"
              >编辑</el-button
            >

            <el-popconfirm title="确定要删除吗?">
              <template #reference>
                <el-button
              type="text"
              style="color: red"
              @click="onDelete(scope.row)"
              >删除</el-button
            >
              </template>
            </el-popconfirm>
           
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
    class="sys-dialog"
    v-model="dialogVisible"
    title="新增综测申报事项"
    width="500"
    draggable
    overflow
  >
    <el-form
      ref="dialogForm"
      label-width="auto"
      :model="dialogData"
      class="demo-form-inline"
      :rules="rules"
      style="padding-left: 32px; max-width: 400px"
    >
      <el-form-item label="综测申报事项名称" prop="name">
        <el-input
          v-model="dialogData.name"
          placeholder="请输入综测申报事项名称"
          clearable
        >
        </el-input>
      </el-form-item>
      <el-form-item label="分值" prop="score">
        <el-input-number
          :precision="1"
          :min="0"
          v-model="dialogData.score"
          placeholder="请输入综测申报事项名称"
          clearable
        >
        </el-input-number>
      </el-form-item>
      <el-form-item label="测评分类" prop="type">
        <el-cascader
          v-model="dialogData.type"
          :options="typeOption"
          placeholder="请选择测评分类"
          clearable
        >
        </el-cascader>
      </el-form-item>

      <el-form-item label="附件" prop="attachment">
        <el-upload
          v-model:file-list="dialogData.attachment"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          class="upload"
          drag
          multiple
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogOverflowVisible = false">取消</el-button>
        <el-button type="primary" @click="onsubmitSys">确定 </el-button>
       
      </div>
    </template>
  </el-dialog>
</template>

<script>
import Pagination from '@/components/pagination'
import { SYS_LIST, TYPE_OPTIONS } from './const'
export default {
  //部件
  components: { Pagination },
  data() {
    return {
      dialogVisible: false,
      searchForm: {
        type: [],
        name: '',
      },
      dialogData: {
        name: '',
        type: [],
        attachment: [],
      },
      typeOption: TYPE_OPTIONS,
      optionOption: [],
      pagiParams: {
        pageNumber: 1,
        pageSize: 10,
        total: SYS_LIST.totalCount,
      },
      list: [],
      rules: {
        name: [
          {
            required: true,
            message: '请输入综测申报事项名称',
            trigger: 'blur',
          },
        ],
        score: [
          {
            required: true,
            message: '请输入分值',
          },
        ],
        type: [
          {
            required: true,
            message: '请选择测评分类',
          },
        ],
        attachment: [
          {
            required: true,
            message: '请上传附件',
          },
        ],
      },
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

      let start = (data.pageNumber - 1) * data.pageSize
      let end = data.pageNumber * data.pageSize

      this.list = SYS_LIST.list.slice(start, end)
    },
    goDetail({ id }) {
      // console.log(detail, 'detail');
      this.$router.push({ path: '/reviewDetail', query: { id } })
    },
    reset() {
      this.searchForm = JSON.parse(this._searchForm)
    },
    onsubmitSys() {
      this.$refs.dialogForm.validate((valid) => {
        if (valid) {
          let message = this.dialogData?.id ? '修改成功' : '添加成功'
          if (this.dialogData?.id) {
            this.list = this.list.map((item) => {
              if (item.id === this.dialogData.id) {
                let [type, option] = this.dialogData || []
                return { ...this.dialogData, type, option }
              } else {
                return item
              }
            })
          } else {
            let [type, option] = this.dialogData?.type || []
            this.list = [
              { ...this.dialogData, type, option, id: Math.random() },
              ...this.list,
            ]
          }
          this.$message.success(message)
          this.dialogVisible = false
          this.dialogData = {}
        } else {
          return false
        }
      })
    },
    openDialog(row) {
      let { type, option } = row
      this.dialogData = { ...row, type: [type, option] }
      this.dialogVisible = true
    },
    onDelete(row) {
      this.list = this.list.filter((item) => item.id != row.id)
      this.$message.success('删除成功')
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
