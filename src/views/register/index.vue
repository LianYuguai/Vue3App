<template>
  <div class="register-box">
    <SysTipInput v-model="value" />
    <IconSvg name="add-circle" />
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

const value = ref('')
watchEffect(() => {
  console.log('watchEffect vlaue: ', value.value)
})
</script>
<style lang="less" scoped>
.register-box{
  margin: 200px auto 0;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;
  background-color: @system-backgroud-color;
}
</style>
