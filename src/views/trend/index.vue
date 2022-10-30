<template>
  <div class="trend-box">
    <div class="top-box">
      <div class="content">
        <GoldenChartData :style="{'flex-grow': 1}" :chart-data="goldenChartData" />
      </div>
      <div class="content">
        <G2GChartData class="g2g" />
        <OerChartData class="oer" style="margin-top: 2px;" />
      </div>
    </div>
    <div class="top-box" style="margin-top: 2px;">
      <div class="content-large">
        <OocChartData />
      </div>
      <div class="content-small" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import GoldenChartData from '@/components/goldenData/index.vue'
import G2GChartData from '@/components/g2gData/index.vue'
import OerChartData from '@/components/oerData/index.vue'
import OocChartData from '@/components/oocData/index.vue'

import { getGoldenchamDataAPI, GoldenchamData } from '@/api/godenChamData'
import { getG2GAPI } from '@/api/g2g'
import { getOerAPI } from '@/api/oer'
import { getOocAPI } from '@/api/ooc'
import { onMounted, ref } from 'vue'

const goldenChartData = ref([] as GoldenchamData[])
onMounted(() => {
  getGolenchamData()
  getG2GAPI()
  getOerAPI()
  getOocAPI()
})

async function getGolenchamData () {
  const res = await getGoldenchamDataAPI()
  console.log('getGolenchamData: ', res)
  goldenChartData.value = res.data
}

</script>
<style lang="less" scoped>
.trend-box {
  max-height: 100%;
  overflow: scroll;
  background-color: black;
  .top-box{
    display: flex;
    .content{
      width: 50%;
      .g2g{
        height: 139px;
      }
      .oer{
        height: 159px;
      }
    }
    .content-large{
      width: 60%;
    }
    .content-small{
      width: 40%;
    }
  }
}
</style>
