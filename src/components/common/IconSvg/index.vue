<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  name: string
  color?: string
  size?: string
}
const props = withDefaults(defineProps<Props>(), {
  name: '',
  color: '#000',
  size: '16px'
})
const iconName = computed(() => `#icon-${props.name}`)
</script>

<template>
  <svg class="c-icon" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<style scoped lang="less">
.c-icon {
  width: v-bind(size);
  height: v-bind(size);
  fill: currentColor;
  position: relative;
}
</style>
