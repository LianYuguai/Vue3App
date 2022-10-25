<template>
  <div id="ooc-data-chart" class="chart" />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { EChartsOption, init } from 'echarts'
onMounted(() => {
  const chartEle: HTMLElement = document.getElementById('ooc-data-chart') as HTMLElement
  const chart = init(chartEle)
  const data: number[] = []
  for (let i = 0; i < 3; ++i) {
    data.push(Math.round(Math.random() * 200))
  }

  const option: EChartsOption = {
    title: {
      text: 'Dialy OCC Summary',
      show: true,
      top: 10,
      textStyle: {
        color: '#fff',
        fontSize: 12
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      orient: 'vertical',
      right: 0,
      top: 50,
      align: 'left',
      textStyle: {
        fontSize: 8,
        color: '#fff'
      }
    },
    grid: {
      right: 100,
      left: 10,
      bottom: 20,
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      },
      show: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        color: '#fff'
      }
    },
    yAxis: {
      type: 'value',
      position: 'left',
      // inverse: true,
      axisLabel: {
        formatter: '{value}',
        show: true,
        color: '#fff'
      }
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        symbol: 'circle',
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        symbol: 'circle',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        symbol: 'circle',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Direct',
        type: 'line',
        stack: 'Total',
        symbol: 'circle',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Search Engine',
        type: 'line',
        stack: 'Total',
        symbol: 'circle',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  chart && chart.setOption(option)
})
</script>
<style lang="less" scoped>
.chart {
  height: 300px;
  width: 100%;
}
</style>
