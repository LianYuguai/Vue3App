<template>
  <div id="golden-data-chart" class="chart" />
</template>
<script lang="ts" setup>
import { onMounted, watchEffect, onBeforeMount, onBeforeUnmount } from 'vue'
import { EChartsOption, EChartsType, init } from 'echarts'
import { GoldenchamData } from '@/api/godenChamData'
let chart: EChartsType
onMounted(() => {
  const chartEle: HTMLElement = document.getElementById('golden-data-chart') as HTMLElement
  chart = init(chartEle)
  const data: number[] = []

  const option: EChartsOption = {
    title: {
      text: 'TEL Intelligent Etch Dashboard',
      textStyle: {
        color: '#fff',
        fontSize: '16px'
      }
    },
    grid: {
      top: 25,
      bottom: 0,
      left: 80,
      right: 50
    },
    xAxis: {
      max: 100,
      splitNumber: 10,
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: [],
      inverse: true,
      animationDuration: 300,
      animationDurationUpdate: 300,
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        formatter: function (value: any) {
          const [first, second] = value.split('/')
          const [p, m, flag, num] = second.split('')
          return p + '\n' + first + ' ' + m + '\n' + flag + num
        },
        color: '#fff'
      }
      // max: 2 // only the largest 3 bars will be displayed
    },
    series: [
      {
        realtimeSort: true,
        name: '',
        type: 'bar',
        data,
        label: {
          show: true,
          position: 'right',
          valueAnimation: true,
          color: '#fff',
          formatter: function (data: any) {
            return data.value + '%'
          }
        },
        itemStyle: {
          color: function (param) {
            return param.value > 99 ? 'yellow' : 'gray'
          }
        }
      }
    ],
    legend: {
      show: true
    },
    animationDuration: 0,
    animationDurationUpdate: 3000,
    animationEasing: 'linear',
    animationEasingUpdate: 'linear'
  }
  chart && chart.setOption(option)
})

const props = defineProps<{
  chartData: GoldenchamData[]
}>()
watchEffect(() => {
  const data = props.chartData
  console.log('watchEffect: ', data)
  const seriesData = data.map(item => {
    return item.matchRatio
  })
  const yAxisData = data.map(item => {
    return item.toolChamber
  })
  chart && chart.setOption<EChartsOption>({
    series: {
      data: seriesData
    },
    yAxis: {
      data: yAxisData as []
    }
  })
})
const resizeChart = () => {
  chart && chart.resize()
}
onBeforeMount(() => {
  window.addEventListener('resize', resizeChart)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart)
})
</script>
<style lang="less" scoped>
.chart {
  height: 300px;
  width: 100%;
}
</style>
