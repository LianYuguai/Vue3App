<template>
  <div id="g2g-data-chart" class="chart" />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { EChartsOption, init } from 'echarts'
onMounted(() => {
  const chartEle: HTMLElement = document.getElementById('g2g-data-chart') as HTMLElement
  const chart = init(chartEle)
  const data: number[] = []
  for (let i = 0; i < 3; ++i) {
    data.push(Math.round(Math.random() * 200))
  }

  const option: EChartsOption = {
    title: {
      text: 'MeetRadio-24h',
      show: true,
      textStyle: {
        color: '#fff',
        fontSize: 14
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
      // Use axis to trigger tooltip
        type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {
      show: false
    },
    grid: {
      left: 10,
      right: 0,
      bottom: 10,
      top: 25,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: ['G2G'],
      axisLabel: {
        show: false
      }
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [320]
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [120]
      }
    ]
  }
  chart && chart.setOption(option)
})
</script>
<style lang="less" scoped>
.chart {
  height: 100%;
  width: 100%;
  padding-top: 15px;
}
</style>
