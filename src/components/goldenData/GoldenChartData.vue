<template>
  <div id="golden-data-chart" class="chart" />
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { EChartsOption, init } from 'echarts'
onMounted(() => {
  const chartEle: HTMLElement = document.getElementById('golden-data-chart') as HTMLElement
  const chart = init(chartEle)
  const data: number[] = [99.4, 99.3, 99.0]

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
      data: ['FH0000 PM-4', 'FH0000 PM-3', 'FH0000 PM-2'],
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
          const [first, second] = value.split(' ')
          const [p, m, flag, num] = second.split('')
          return p + '\n' + first + ' ' + m + '\n' + flag + num
        },
        color: '#fff'
        // rich: {
        //   flag: {
        //     fontSize: 10,
        //     padding: 5,
        //     width: 400,
        //     color: '#fff'
        //   }
        // }
      },
      max: 2 // only the largest 3 bars will be displayed
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
          color: '#fff'
        },
        itemStyle: {
          color: function (param) {
            return param.value > 120 ? 'yellow' : 'gray'
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

  // function run () {
  //   for (let i = 0; i < data.length; ++i) {
  //     if (Math.random() > 0.9) {
  //       data[i] += Math.round(Math.random() * 2000)
  //     } else {
  //       data[i] += Math.round(Math.random() * 200)
  //     }
  //   }
  //   chart.setOption<EChartsOption>({
  //     series: [
  //       {
  //         type: 'bar',
  //         data
  //       }
  //     ]
  //   })
  // }

  // setTimeout(function () {
  //   run()
  // }, 0)
  // setInterval(function () {
  //   run()
  // }, 3000)
})
</script>
<style lang="less" scoped>
.chart {
  height: 300px;
  width: 100%;
}
</style>
