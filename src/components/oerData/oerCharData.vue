<template>
  <div id="oer-data-chart" class="chart" />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { EChartsOption, init } from 'echarts'
onMounted(() => {
  const chartEle: HTMLElement = document.getElementById('oer-data-chart') as HTMLElement
  const chart = init(chartEle)
  const data: number[] = []
  for (let i = 0; i < 3; ++i) {
    data.push(Math.round(Math.random() * 200))
  }

  const option: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      },
      show: false
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      },
      show: false
    },
    legend: {
      data: ['Evaporation', 'Precipitation', 'Temperature'],
      show: false
    },
    grid: {
      top: 20,
      bottom: 30,
      left: 40,
      right: 50
    },
    xAxis: [
      {
        type: 'category',
        data: ['14', '15', '16', '17', '18', '19', '20'],
        axisPointer: {
          type: 'shadow'
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '',
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: '{value}',
          color: '#fff'
        }
      },
      {
        type: 'value',
        name: '',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} %',
          color: '#fff'
        }
      }
    ],
    series: [
      {
        name: 'Precipitation',
        type: 'bar',
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' ml'
          }
        },
        data: [
          2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
        ]
      },
      {
        name: 'Temperature',
        type: 'line',
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value as number + ' °C'
          }
        },
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
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
}
</style>
