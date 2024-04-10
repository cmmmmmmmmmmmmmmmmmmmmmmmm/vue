<template>
  <div class="appealDetail">
    <div class="base-info">
      <div class="mini-title">
        <div></div>
        学生信息
      </div>
      <div class="base-info-item"><span> 学号：</span>{{ detail.id }}</div>
      <div class="base-info-item"><span> 班级：</span>{{ detail.class }}</div>
      <div class="base-info-item">
        <span> 学生姓名：</span>{{ detail.name }}
      </div>
      <div class="base-info-item">
        <span> 思想素质总分：</span>{{ detail.deyuScore }}
      </div>
      <div class="base-info-item">
        <span> 学业测评总分：</span>{{ detail.xueyeScore }}
      </div>
      <div class="base-info-item">
        <span> 发展能力总分：</span>{{ detail.nengliScore }}
      </div>
      <div class="base-info-item">
        <span> 综合测评总分：</span>{{ detail.zongheScore }}
      </div>
      <div class="base-info-item">
        <span> 综合测评排名：</span>{{ detail.zongheRank }}
      </div>
      <div class="base-info-item">
        <span> 学业测评专业排名：</span>{{ detail.xueyeRank }}
      </div>
      <div class="base-info-item">
        <span> 体测成绩：</span>{{ detail.sportScore }}
      </div>
      <div class="button-box">
        <el-button type="primary" @click="goAppeal" :disabled="appealDisabled"
          >申诉</el-button
        >
      </div>
    </div>
    <div class="base-info">
      <div class="mini-title">
        <div></div>
        思想素质测评
      </div>
      <div class="base-info-item">
        <span> 思想表现：</span>{{ detail['si-xiang-biao-xian'] }}
      </div>
      <div class="base-info-item">
        <span> 文明守纪：</span>{{ detail['wen-ming-shou-ji'] }}
      </div>
      <div class="base-info-item">
        <span> 学习态度：</span>{{ detail['xue-xi-tai-du'] }}
      </div>
      <div class="base-info-item">
        <span> 社会责任:</span>{{ detail['she-hui-ze-ren'] }}
      </div>

      <div class="mini-title">
        <div></div>
        发展能力测评
      </div>
      <div class="base-info-item">
        <span> 自主学习:</span>{{ detail['zi-zhu-xue-xi'] }}
      </div>
      <div class="base-info-item">
        <span> 实践创新:</span>{{ detail['shi-jian-chuang-xin'] }}
      </div>
      <div class="base-info-item">
        <span> 组织交流:</span>{{ detail['zu-zhi-jiao-liu'] }}
      </div>
      <div class="base-info-item">
        <span> 创新创业:</span>{{ detail['chuang-xin-chuang-ye'] }}
      </div>
      <div class="base-info-item">
        <span> 文体特长:</span>{{ detail['wen-ti-te-chang'] }}
      </div>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="申诉"
      width="500"
      draggable
      overflow
    >
      <el-form
        :model="formData"
        class="demo-form-inline"
        style="padding-left: 32px"
        ref="ruleForm"
        :rules="rules"
      >
        <el-form-item label="申诉理由" prop="reason">
          <el-input v-model="formData.reason" type="textarea" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="onSubmit"> 确定 </el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        reason: '',
      },
      detail: {},
      appealDisabled: false,
      rules: {
        reason: [{ required: true, message: '请输入申诉原因' }],
      },
      dialogVisible: false,
    }
  },
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
    onRadioChange(value) {
      this.formData.result = value
      let required = value === 'reject'
      this.rules.reason = [{ required, message: '请输入审批意见' }]
    },
    getDetail() {
      //这里暂时用axios模仿联网请求，到时候把import取消掉
      axios.get('/js/appeal.json').then(
        (res) => {
          let data = res.data.data.list.filter((item) => {
            return item.id == this.$route.query.id
          })
          this.detail = data[0]
        },

        (res) => {
          console.log('error')
        }
      )
    },

    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.appealDisabled = true
          this.dialogVisible = false
          this.$message.success('申诉成功')
         
        } else {
          return false
        }
      })
    },
    goAppeal() {
      this.dialogVisible = true
    },
  },
  //请求数据
  created() {},
  mounted() {
    this.getDetail()
  },
}
</script>

<style scoped lang="scss">
.test {
  width: 100%;
}
.button-box {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.appealDetail {
  width: 100%;
  font-size: 16px;
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

  .base-info {
    background-color: #fff;
    border-radius: 8px;
    padding: 4px 16px 16px;
    margin-bottom: 24px;
    display: flex;
    flex-wrap: wrap;
    .base-info-item {
      margin-bottom: 8px;
      width: 50%;
      span {
        color: #666;
        margin-right: 4px;
      }
    }
    .base-info-item-attachment {
      width: 100%;
      display: flex;

      .attachment {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .reason {
          margin-top: 8px;
          font-size: 14px;
          word-break: break-all;
        }
        img {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
}
</style>
