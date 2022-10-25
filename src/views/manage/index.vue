<template>
  <div class="log-box">
    <IxTable :auto-height="true" :columns="columns" :data-source="dataSource" :get-key="getRowKey" :pagination="pagination" :spin="loading"
      @page-change="setPagination" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

import { TableColumn, TablePagination } from '@idux/components/table'
import { getUserListAPI } from '@/api/user'

const pagination = reactive<TablePagination>({
  showSizeChanger: true
})

const setPagination = (pageIndex: number, pageSize: number) => {
  // 如果修改了 pageSize, 应该把 pageIndex 重置为 1
  if (pagination.pageSize !== pageSize) {
    pagination.pageIndex = 1
    pagination.pageSize = pageSize
  } else {
    pagination.pageIndex = pageIndex
  }

  fetchData(pagination.pageIndex, pagination.pageSize)
}

const loading = ref(false)

const fetchData = async (pageIndex: number, pageSize: number) => {
  loading.value = true

  const { data } = await getUserListAPI({ page: pageIndex, pageSize })

  dataSource.value = data
  pagination.total = data.length// mock the total data here

  loading.value = false
}

onMounted(() => setPagination(1, 10))

interface User {
  id: number
  passport: string
  role: number
}

const columns: TableColumn<User>[] = [
  {
    title: '用户名',
    dataKey: 'passport'
  },
  {
    title: '角色',
    dataKey: 'role'
  }
]

const dataSource = ref<User[]>([])

const getRowKey = (record: User) => record.id
</script>
<style lang="less" scoped>
.log-box {
  height: 100%
}
</style>
