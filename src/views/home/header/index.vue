<template>
  <div class="header-box">
    <div class="title">
      东电电子
    </div>
    <div class="tool" @click="onLogout">
      退出登录
    </div>
  </div>
</template>
<script lang="ts" setup>
import { usePermissionStore } from '@/store/permission'
import { useRouter } from 'vue-router'
const permissonStore = usePermissionStore()
const router = useRouter()
const onLogout = function () {
  permissonStore.clear()
  router.replace('/login')
}
</script>
<style lang="less" scoped>
.header-box {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;

  .title {
    margin: 0 auto;
  }

  .tool {
    cursor: pointer;
    color: blue;
  }
}
</style>
