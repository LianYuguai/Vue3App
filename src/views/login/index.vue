<template>
  <div>
    <ix-button>
      {{ login }}
    </ix-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const login = ref('登录')
</script>
