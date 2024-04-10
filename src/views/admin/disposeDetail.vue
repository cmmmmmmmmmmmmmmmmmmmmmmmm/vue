<template>
  <div class="disposeDetail">
    <div class="base-info">
      <div class="mini-title">
        <div></div>
        学生信息
      </div>
      <div class="base-info-item"><span> 学号：</span>{{ detail.id }}</div>
      <div class="base-info-item"><span> 班级：</span>{{ detail.class }}</div>
      <div class="base-info-item">
        <span> 姓名：</span>{{ detail.name }}
      </div>
      <div class="mini-title">
        <div></div>
        评分信息
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

      <div class="mini-title">
        <div></div>
        评定结果
      </div>
      <div class="base-info-item"><span> 奖学金等级：</span>{{ scholarObj[detail.reward] }}</div>
      <div class="base-info-item"><span> 奖学金金额：</span>{{ detail.sum }}</div>
    </div>

    <div class="base-info">
      <div class="mini-title">
        <div></div>
        审批
      </div>
      <!-- 审批表单 -->
      <el-form
        :model="formData"
        label-width="auto"
        style="max-width: 600px"
        ref="ruleForm"
        :rules="rules"
      >
        <el-form-item label="审批结果" prop="result">
          <el-radio-group v-model="formData.result" @change="onRadioChange">
            <el-radio value="agree">同意</el-radio>
            <el-radio value="reject">驳回</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="审批意见" prop="desc">
          <el-input v-model="formData.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button @click="onCancel">返回</el-button>

          <el-button type="primary" @click="onSubmit">处理</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      formData: {
        result: 'agree',
        desc: '',
      },
      detail: {},
      scholarObj: {
        country: '国家奖学金',
        province: '省级奖学金',
        
        school1: '校级一等奖学金',
        school2: '校级二等奖学金',
      },

      rules: {
        //这种rules方案
        result: [
          { required: true, message: '请选择审批结果', trigger: 'change' },
        ],
        desc: [{ required: false, message: '请输入审批意见' }],
      },
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
      this.rules.desc = [{ required, message: '请输入审批意见' }]
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
          this.$message.success('申诉处理成功')
          this.$router.go(-1)
        } else {
          return false
        }
      })
    },

    onCancel() {
      this.$router.go(-1)
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

.disposeDetail {
  width: 100%;
  font-size: 16px;
  .mini-title {
    font-size: 18px;
    margin-bottom: 12px;
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
    padding: 16px;
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
        .desc {
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
