<template>
  <DefinScrollbar height="100%" :showUpBt="true">
    <div class="page-container main-view">
      <div class="container">
        <div class="echart-container">
          <div class="top-container">
            <div class="left">
              <EchartContainer ref="EchartContainerRef"></EchartContainer>
            </div>
            <div class="right">
              <EchartContainer ref="EchartContainerRef_1"></EchartContainer>
            </div>
          </div>
        </div>

        <el-divider border-style="dashed" />
        <div class="text-container">
          <div class="title">大学生综合测评系统审核端使用须知：</div>
          &emsp;&emsp;
          在您参与大学生综合测评系统审核工作之前，请务必认真阅读以下填写须知：
          请确保对提交的信息进行全面、客观、公正的审核，不偏袒任何一方，不受个人偏见或利益影响。
          请严格按照规定的审核标准进行操作，确保审核过程合乎法规和相关政策要求。
          拒绝任何形式的舞弊行为，包括但不限于虚假审核、泄露审核信息等，一经发现将严肃处理。
          对于审核中存在疑问或不清楚的情况，请及时向上级主管或相关部门咨询，不得擅自做出决定。
          审核工作涉及学生个人隐私和信息保护，请严格遵守相关法律法规，确保信息安全。
          感谢您的配合和努力，您的审核工作将对大学生综合测评系统的公正性和有效性起到重要作用。如有疑问，请及时联系。
        </div>
      </div>
    </div>
  </DefinScrollbar>
</template>

<script>
/**
 * 页面例子
 */
import {
  defineComponent,
  onBeforeUnmount,
  ref,
  reactive,
  getCurrentInstance,
  onActivated,
  onMounted,
} from 'vue'
import { useRouter } from 'vue-router'
import EchartContainer from '@/components/EchartContainer.vue'
import DefinScrollbar from '@/components/DefinScrollbar.vue'
import * as echarts from 'echarts'

export default defineComponent({
  components: {
    EchartContainer,
    DefinScrollbar,
  },
  setup() {
    const router = useRouter()
    const EchartContainerRef = ref() //组件实例
    const EchartContainerRef_1 = ref() //组件实例
    const dataContainer = reactive({
      loading: false,
    })
    onMounted(() => {
      /** 初始化图表 */
      EchartContainerRef.value.initData({
        backgroundColor: '',
        title: {
          text: '综测数据概览',
          x: 'left',
          textStyle: { fontSize: '16', color: '#171a17' },
        },
        tooltip: { trigger: 'axis' },
        legend: { data: ['学生人数（人）'], right: 0 },
        grid: { top: 90, right: 80, bottom: 30, left: 80 },
        xAxis: [
          {
            type: 'category',
            data: [
              '0-30(分)',
              '30-59(分)',
              '60-89(分)',
              '90-99(分)',
              '100-119(分)',
              '120-149(分)',
              '150-179(分)',
            ],
            boundaryGap: true,
            axisTick: { show: false },
          },
        ],
        yAxis: [
          {
            // name: '学生人数（人）',
            nameLocation: 'middle',
            nameTextStyle: { padding: [50, 4, 5, 6] },
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#000', formatter: '{value} ' },
          },
        ],
        series: [
          {
            name: '学生人数（人）',
            type: 'bar',
            barWidth: 30,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(108,80,243,0.3)' },
                { offset: 1, color: 'rgba(108,80,243,0)' },
              ]),
              //柱状图圆角
              borderRadius: [30, 30, 0, 0],
            },
            data: [
              { value: 2, stationName: 's1' },
              { value: 11, stationName: 's1' },
              { value: 34, stationName: 's2' },
              { value: 54, stationName: 's3' },
              { value: 63, stationName: 's4' },
              { value: 3, stationName: 's5' },
              { value: 1, stationName: 's6' },
            ],
          },
        ],
      })
      EchartContainerRef_1.value.initData({
        title: {
          text: '奖学金数据概览',
          x: 'left',
          textStyle: { fontSize: '16', color: '#171a17' },
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: '获奖人数',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2,
            },
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 18,
                fontWeight: 'bolder',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1, name: '国家级奖学金' },
              { value: 2, name: '省级奖学金' },
              { value: 4, name: '校级一等奖学金' },
              { value: 6, name: '校级二等奖学金' },
            ],
          },
        ],
      })
    })
    return {
      dataContainer,
      EchartContainerRef,
      EchartContainerRef_1,
    }
  },
})
</script>

<style lang="scss" scoped>
.main-view {
  display: flex;
  flex-direction: column;
  width: 100%;
  .container {
    background-color: white;
    width: 100%;
    border-radius: 5px;
    padding: 15px;
    box-sizing: border-box;
    > * {
      margin: 0 0 30px 0;
      &:last-child {
        margin: 0;
      }
    }
    > .echart-container {
      width: 100%;
      > .top-container {
        display: flex;
        flex-direction: row;
        height: 450px;
        > .left,
        > .right {
          width: 0;
          flex: 1 1 0;
        }
        > .left {
          flex: 2 1 0;
          margin-right: 60px;
        }
      }
      > .bottom-container {
        width: 100%;
        height: 400px;
        margin-top: 30px;
      }
    }
    .text-container {
      font-size: 16px;
      color: #171a17;
      line-height: 28px;

      padding: 8px;
      .title {
        font-size: 18px;
        font-weight: bolder;
        margin-bottom: 12px;
      }
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>
