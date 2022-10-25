<template>
  <div class="ooc-data-box">
    <div class="title">
      <div class="text">
OOC
</div>
    </div>
    <OocChartData style="background-color: rgb(42, 42, 42)" />
  </div>
</template>
<script lang="ts" setup>
import OocChartData from './oocChartData.vue'

</script>
<style lang="less" scoped>
.ooc-data-box {
  display: flex;
  align-items: center;

  .title {
    background-color: rgb(42, 42, 42);
    height: 300px;
    // line-height: 300px;
    display: flex;
    align-items: center;
    color: #fff;
    padding-left: 10px;
    .text{
      width: 16px;
      word-break: break-all;
      white-space: wrap;
      font-size: 12px;
      line-height: 14px;
    }
  }
}
</style>
