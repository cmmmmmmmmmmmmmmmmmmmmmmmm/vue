<template>
  <DefinScrollbar height="100%" :showUpBt="true">
    <div class="page-container main-view">
      <div class="container">
        <div class="echart-container">
          <EchartContainer ref="EchartContainerRef"></EchartContainer>
        </div>
        <el-divider border-style="dashed" />
        <div class="text-container">
          <div class="title">大学生综合测评系统审核端填写须知：</div>
          &emsp;&emsp;欢迎使用大学生综合测评系统！在填写信息之前，请务必认真阅读以下填写须知：
          请如实、准确地填写个人信息，包括但不限于姓名、学号、联系方式等，确保信息真实有效。
          请按照系统要求填写各项评价内容，如学业成绩、课外活动、社会实践等，真实反映个人情况。
          不得弄虚作假、夸大事实或隐瞒真相，否则将影响测评结果的公正性和准确性。
          请妥善保管个人账号和密码，不得将账号信息透露给他人，以免造成信息泄露或误用。
          若在填写过程中遇到问题或疑问，请及时向相关部门或指导老师咨询，不得私自修改或篡改信息。
          感谢您的配合和理解，您的如实填写将为系统评估提供重要数据，促进个人发展和学校管理。如有疑问，请及时联系。
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
 
  ref,
  reactive,
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
    const dataContainer = reactive({
      loading: false,
    })
    onMounted(() => {
      /** 初始化图表 */
      EchartContainerRef.value.initData({
        backgroundColor: '',
        title: {
          text: '综测排名情况',
          x: 'left',
          textStyle: { fontSize: '18', color: '#171a17' },
        },
        tooltip: { trigger: 'axis' },
        legend: { data: ['分数', '排名'], right: 0 },
        grid: { top: 70, right: 80, bottom: 30, left: 80 },
        xAxis: [
          {
            type: 'category',
            data: ['2021（年）', '2022（年）', '2023（年）', '2024（年）'],
            boundaryGap: true,
            axisTick: { show: false },
          },
        ],
        yAxis: [
          {
            name: '综测排名',
            inverse: true,
            nameLocation: 'middle',
            nameTextStyle: { padding: [3, 4, 50, 6] },
            splitLine: {
              show: true,
              lineStyle: { type: 'dashed', color: '#f5f5f5' },
            },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { color: '#000', formatter: '{value} ' },
          },
          {
            name: '综测分数',
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
            name: '排名',
            type: 'line',
            smooth: true,
            showSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 12,
            yAxisIndex: 0,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: 'rgba(199, 237, 250,0.5)' },
                  { offset: 1, color: 'rgba(199, 237, 250,0.2)' },
                ],
                false
              ),
            },
            itemStyle: {
              color: '#3bbc86',
            },
            data: [
              { value: 5, stationName: 's1' },
              { value: 12, stationName: 's2' },
              { value: 6, stationName: 's3' },
              { value: 8, stationName: 's4' },
            ],
          },
          {
            name: '分数',
            type: 'bar',
            barWidth: 30,
            yAxisIndex: 1,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(108,80,243,0.3)' },
                { offset: 1, color: 'rgba(108,80,243,0)' },
              ]),
              //柱状图圆角
              borderRadius: [30, 30, 0, 0],
            },
            data: [
              { value: 88, stationName: 's1' },
              { value: 92, stationName: 's2' },
              { value: 86, stationName: 's3' },
              { value: 94, stationName: 's4' },
            ],
          },
        ],
      })
    })
    return {
      dataContainer,
      EchartContainerRef,
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
      height: 300px;
     
      
    }
    .text-container {
        font-size: 16px;
        color: #171a17;
        line-height: 28px;
        
        padding: 8px;
        .title{
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
