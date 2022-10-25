<template>
  <div class="oer-data-box">
    <div class="content" style="background-color: rgb(42, 42, 42)">
      <div class="text-title">
        Seasoning Available@
      </div>
      <div class="detail">
        <div class="sub-text">
          <div class="title">
            Best(h):
          </div>
          <div class="text">
            14
          </div>
        </div>
        <div class="sub-text">
          <div class="title">
            Average(h):
          </div>
          <div class="text">
            20
          </div>
        </div>
      </div>
    </div>
    <OerChartData style="background-color: rgb(42, 42, 42)" />
  </div>
</template>
<script lang="ts" setup>
import OerChartData from './oerCharData.vue'

</script>
<style lang="less" scoped>
.oer-data-box {
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
      padding-right: 30px;
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
