<template>
  <el-tooltip :content="placeholder" placement="top-start" effect="light" :disabled="tipDisabled">
    <el-input v-model="inputValue" :placeholder="placeholder" @input="onInput" />
  </el-tooltip>
</template>
<script setup lang="ts">
import { toRefs, ref, computed } from 'vue'

const props = withDefaults(defineProps<{ modelValue: string, placeholder?: string }>(), {
  modelValue: '',
  placeholder: '请输入您的内容请输入您的内容请输入您的内容请输入您的内容请输入您的内容请输入您的内容请输入您的内容请输入您的内容请输入您的内容'
})
// 抛出事件
const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()
const { placeholder, modelValue } = toRefs(props)
const inputValue = ref(props.modelValue)
const tipDisabled = computed(() => {
  return !!modelValue.value
})
const onInput = (value: string) => {
  console.log('onInput: ', value)
  emit('update:modelValue', value)
}
</script>
