<template>
  <IxLayout class="main-layout">
    <IxLayoutHeader class="header">
      <Header />
    </IxLayoutHeader>
    <IxLayoutSider class="slider">
      <SliderMenu />
    </IxLayoutSider>
    <IxLayoutContent class="content">
      <router-view />
    </IxLayoutContent>
    <!-- <IxLayoutFooter class="footer">
      Footer
    </IxLayoutFooter> -->
  </IxLayout>
</template>

<script lang="ts" setup>
import SliderMenu from './sliderMenu.vue'
import Header from './header/index.vue'

</script>
<style lang="less" scoped>
.main-layout {
  height: 100%;
  width: 100%;

  .header {
    // background-color: aqua;
    border: 1px solid gray;
  }

  .slider {
    background-color: #191c24;
  }

  .content {
    overflow: hidden;
    padding: 20px;
  }
}
</style>
