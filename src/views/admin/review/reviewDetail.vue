<template>
  <div class="reviewDetail">
    <div class="base-info">
      <div class="mini-title">
        <div></div>
        学生信息
      </div>
      <div class="base-info-item"><span> 学号：</span>{{ detail.id }}</div>
      <div class="base-info-item">
        <span> 申报分数：</span>{{ detail.score }}
      </div>
      <div class="base-info-item">
        <span> 学生姓名：</span>{{ detail.name }}
      </div>
      
      <div class="base-info-item">
        <span> 创建时间：</span>{{ detail.creatTime }}
      </div>

      <div class="mini-title">
        <div></div>
        材料附件
      </div>
      <div class="base-info-item">
        <span> 测评分类：</span>{{ auditDetail.type }}
      </div>
      <div class="base-info-item">
        <span> 测评类型：</span>{{ auditDetail.option }}
      </div>
      <div class="base-info-item">
        <span> 测评分值：</span>{{ auditDetail.score }}
      </div>
      <div class="base-info-item base-info-item-attachment">
        <span> 测评附件：</span>

        <div class="attachment-list">
          <div
            class="attachment"
            v-for="item in auditDetail.attachment"
            :key="item"
          >
            <div class="desc">{{ item.description }}( {{ item.score }}分 )</div>
            <el-image
              style="width: 100px; height: 100px"
              :src="item.url"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="auditDetail.attachment.map((item) => item.url)"
              :initial-index="0"
              fit="cover"
            />
            <!-- <img :src="item.url" /> -->
          </div>
        </div>
      </div>
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
      >
        <el-form-item
          label="审批结果"
          :rules="{
            required: true,
            message: '请选择审批结果',
          }"
        >
          <el-radio-group v-model="formData.result">
            <el-radio value="agree">同意</el-radio>
            <el-radio value="reject">驳回</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          label="审批意见"
          :rule="{
            required: this.formData.result == 'reject',
            message: '请输入审批意见',
          }"
        >
          <el-input v-model="formData.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button @click="onCancel">返回</el-button>
          <el-button @click="onPrev" :disabled="auditIndex == 0"
            >上一个</el-button
          >
          <el-button
            type="primary"
            @click="onNext"
            :disabled="auditIndex == auditList.length - 1"
            >下一个</el-button
          >
          <el-button
            type="primary"
            @click="onSubmit"
            :disabled="auditIndex != auditList.length - 1"
            >发布公示</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { REVIEW_DETAIL_LIST } from './const'

export default {
  data() {
    return {
      formData: {
        result: 'agree',
        desc: '',
      },
      detail: {},
      auditList: REVIEW_DETAIL_LIST,
      // 审批索引
      auditIndex: 0,
      auditDetail: {},
      rules: {
        //这种rules方案
        result: [
          { required: true, message: '请选择审批结果', trigger: 'change' },
        ],
        desc: [{ required: true, message: '请输入审批意见', trigger: 'blur' }],
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
    getDetail() {
      //这里暂时用axios模仿联网请求，到时候把import取消掉
      axios.get('/js/data.json').then(
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
          this.$message.success('发布公示成功')
          this.$router.go(-1)
          // if (this.auditIndex == this.auditList.length - 1) {
          //   this.$router.go(-1)
          // } else {
          // this.setAuditDetail(this.auditIndex + 1)
          // }
        } else {
          return false
        }
      })
    },
    setAuditDetail(index = 0) {
      this.auditIndex = index
      this.auditDetail = this.auditList?.[index] || {}
      this.formData = {
        result: this.auditDetail?.result || 'agree',
        desc: this.auditDetail?.desc || '',
      }
    },
    onPrev() {
      this.auditList[this.auditIndex].result = this.formData.result
      this.auditList[this.auditIndex].desc = this.formData.desc

      this.setAuditDetail(this.auditIndex - 1)
    },
    onNext() {
      this.auditList[this.auditIndex].result = this.formData.result
      this.auditList[this.auditIndex].desc = this.formData.desc
      this.setAuditDetail(this.auditIndex + 1)
    },
    onCancel() {
      this.$router.go(-1)
    },
  },
  //请求数据
  created() {
    this.setAuditDetail()
  },
  mounted() {
    this.getDetail()
  },
}
</script>

<style scoped lang="scss">
.test {
  width: 100%;
}

.reviewDetail {
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
      .attachment-list {
        display: flex;
        flex-wrap: wrap;
        border: var(--el-border-color) 1px solid;
        border-radius: 8px;
        padding: 16px;
        margin-top: 8px;
      }
      .attachment {
        border-right: solid 1px var(--el-border-color);
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 8px 0;

        .desc {
          margin-bottom: 8px;
          font-size: 14px;
          max-width: 80%;
        }
        img {
          width: 200px;
          height: 200px;
        }
      }
      .attachment:last-child {
        border-right: none;
      }
    }
  }
}
</style>
