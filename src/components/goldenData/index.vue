<template>
  <div class="gold-data-box">
    <GoldenChartData style="background-color: rgb(42, 42, 42)" :chart-data="chartData" />
    <div class="content" style="background-color: rgb(42, 42, 42)">
      <div class="text-title">
        Golden Chamber
      </div>
      <div class="text-sub-title">
        FH0000/PM-4
      </div>
      <div class="detail">
        <div class="title">
          Reclipe:
        </div>
        <div class="text" style="font-weight:bold">
          M3L65IN1A11
        </div>
        <div class="sub-text">
          <span class="title">From:</span>
          <span class="text">2/11/2022</span>
        </div>
        <div class="sub-text">
          <span class="title">To:</span>
          <span class="text">7/17/2022</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import GoldenChartData from '@/components/goldenData/GoldenChartData.vue'
import { defineProps } from 'vue'
import { GoldenchamData } from '@/api/godenChamData'
defineProps<{
  chartData: GoldenchamData[]
}>()

</script>
<style lang="less" scoped>
.gold-data-box {
  display: flex;
  .content {
    flex-basis: 150px;
    flex-shrink: 0;
    text-align: left;
    margin-left: 2px;
    color: #fff;
    padding: 15px 10px 0;
    .text-title{
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
      color: rgb(26, 100, 146);
    }
    .text-sub-title{
      font-size: 14px;
      font-weight: bold;
    }
    .detail {
      .title{
        min-width: 50px;
        text-align: left;
        color: #980cb4;
        font-size: 12px;
        display: inline-block;
      }
      .text{
        text-align: left;
        font-size: 12px;
      }
      .sub-text{
        text-align: left;
        font-size: 12px;
      }
    }
  }
}
</style>
