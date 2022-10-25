<template>
  <div class="log-box">
    <IxTable :auto-height="true" :columns="columns" :data-source="dataSource" :get-key="getRowKey" :pagination="pagination" :spin="loading"
      @page-change="setPagination" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'

import { TableColumn, TablePagination } from '@idux/components/table'
import { getLogListAPI } from '@/api/log'

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

  const { data } = await getLogListAPI({ page: pageIndex, pageSize })

  dataSource.value = data.map((item) => {
    item.operate = '登录'
    return item
  })
  pagination.total = data.length// mock the total data here

  loading.value = false
}

onMounted(() => setPagination(1, 10))

interface Log {
  id: number
  passport: string
  time: string
}

const columns: TableColumn<Log>[] = [
  {
    title: '操作',
    dataKey: 'operate'
  },
  {
    title: '用户',
    dataKey: 'passport'
  },
  {
    title: '时间',
    dataKey: 'time'
  }
]

const dataSource = ref<Log[]>([])

const getRowKey = (record: Log) => record.id
</script>
<style lang="less" scoped>
.log-box {
  height: 100%
}
</style>
