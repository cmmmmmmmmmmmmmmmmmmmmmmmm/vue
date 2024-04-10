<template>
  <div class="appealDetail">
    <div class="base-info">
      <div class="mini-title">
        <div></div>
        奖学金申报
      </div>
      <el-form
        class="appeal-form"
        :model="formData"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="奖学金类型" prop="reward">
          <el-select
            :disabled="appealDisabled"
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

        <el-form-item label="奖学金金额" prop="sum">
          <el-input
            :disabled="appealDisabled"
            v-model="formData.sum"
            placeholder="请输入奖学金金额"
            clearable
          >
            <template #append>元</template></el-input
          >
        </el-form-item>
        <el-form-item>
          <el-button :disabled="appealDisabled" @click="onReset"
            >重置</el-button
          >

          <el-button
            type="primary"
            @click="onsubmit"
            :disabled="appealDisabled"
          >
            申报
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        reward: undefined,
        sum: '',
        id: '',
      },
      scholarOption: [
      { label: '国家奖学金', value: 'country', sum: 8000 },
        { label: '省级奖学金', value: 'province', sum: 5000 },
        { label: '校级一等奖学金', value: 'school1', sum: 2000 },
        { label: '校级二等奖学金', value: 'school2', sum: 1000 },
      ],
      appealDisabled: false,
      rules: {
        reward: [{ required: true, message: '请选择奖学金类型' }],
        sum: [{ required: true, message: '请输入奖学金金额' }],
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
    onsubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          localStorage.setItem('scholar', JSON.stringify(this.formData))
          this.appealDisabled = true
          this.$message.success('奖学金申报成功')
        } else {
          return false
        }
      })
    },
    onReset() {
      this.formData = {}
    },
    onTypeChange(item) {
      this.formData.reward = item
      this.formData.sum = this.scholarOption.filter(
        (option) => option.value == item
      )[0].sum
    },
  },

  //请求数据
  created() {},
  mounted() {
    this.formData = JSON.parse(localStorage.getItem('scholar')) || {}
    console.log('formData', JSON.parse(localStorage.getItem('scholar')))
    if (this.formData?.reward) this.appealDisabled = true
  },
}
</script>

<style scoped lang="scss">
.appeal-form {
  :deep {
    .el-select__wrapper,
    el-input__wrapper {
      width: 300px;
    }
  }
}
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
  }
}
</style>
