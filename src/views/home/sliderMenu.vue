<template>
  <IxMenu :data-source="dataSource" :selected-keys="selectedKeys" theme="dark">
    <template #itemLabel="item">
      <router-link :to="item.key">
        <span>{{ item.label }}</span>
      </router-link>
    </template>
  </IxMenu>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import { MenuData } from '@idux/components/menu'

const route = useRoute()
const router = useRouter()
console.log('route: ', route)
const [, expandedKey, selectedKey] = route.path.split('/')
const expandedKeys = ref([expandedKey])
const selectedKeys = ref([`/${expandedKey}/${selectedKey}`])
const dataSource = computed<MenuData[]>(() => {
  const menuRouters = router.getRoutes().filter(router => {
    return router.path.includes('/home/')
  })
  return menuRouters.filter(item => {
    return item.meta.isMenu === true
  }).map(router => {
    return {
      key: router.path,
      label: router.meta.title,
      icon: router.meta.icon
    } as MenuData
  })
})

watch(
  () => route.path,
  path => {
    const findItem = dataSource.value.find(item => {
      return item.key === path
    })
    // 路由地址不是菜单栏地址时，不做任何处理
    if (!findItem) {
      return
    }
    console.log('route.path***: ', path.split('/'))
    const [, expandedKey, selectedKey] = path.split('/')
    console.log('route.path: ', path, expandedKey, selectedKey)
    expandedKeys.value = [expandedKey]
    selectedKeys.value = [`/${expandedKey}/${selectedKey}`]
  }
)
</script>
