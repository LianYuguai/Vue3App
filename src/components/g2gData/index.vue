<template>
  <div class="g2g-data-box">
    <div class="content" style="background-color: rgb(42, 42, 42)">
      <div class="text-title">
        G2G Performance
      </div>
      <div class="detail">
        <div class="sub-text">
          <div class="title">
            Best(h):
          </div>
          <div class="text">
            18.9
          </div>
        </div>
        <div class="sub-text">
          <div class="title">
            Average(h):
          </div>
          <div class="text">
            30.2
          </div>
        </div>
        <div class="sub-text">
          <div class="title">
            Count:
          </div>
          <div class="text">
            56
          </div>
        </div>
      </div>
    </div>
    <G2gChartData style="background-color: rgb(42, 42, 42)" />
  </div>
</template>
<script lang="ts" setup>
import G2gChartData from './g2gChartData.vue'

</script>
<style lang="less" scoped>
.g2g-data-box {
  display: flex;

  .content {
    width: 40%;
    flex-shrink: 0;
    text-align: left;
    margin: 0 2px;
    color: #fff;
    padding: 15px 10px 0;

    .text-title {
      text-decoration: underline;
      cursor: pointer;
      font-size: 14px;
      color: rgb(26, 100, 146);
    }

    .detail {
      display: flex;
      .title {
        color: #980cb4;
        text-align: center;
        margin-bottom: 10px;
      }

      .text {
        text-align: center;
        font-weight: bold;
      }

      .sub-text {
        font-size: 12px;
        flex: 1;
      }
    }
  }
}
</style>
