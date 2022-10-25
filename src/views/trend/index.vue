<template>
  <div class="trend-box">
    <div class="top-box">
      <div class="content">
        <GoldenChartData :style="{'flex-grow': 1}" />
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
