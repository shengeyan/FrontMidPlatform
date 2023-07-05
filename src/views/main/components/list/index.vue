<template>
  <m-waterfall
    :data="pexelsList"
    nodeKey="id"
    :column="5"
    :picturePreReading="true"
  >
    <template v-slot="{ item, width }">
      <item-vue :data="item" :width="width"></item-vue>
    </template>
  </m-waterfall>
</template>

<script setup>
import { ref } from 'vue'
import { getPexelsList } from '@/api/pexels'
import itemVue from './item.vue'

/**
 * 构建数据请求
 */
let query = {
  page: 1,
  size: 20
}
const pexelsList = ref([])
const getPexelsData = async () => {
  const res = await getPexelsList(query)
  pexelsList.value = res.list
}
getPexelsData()
</script>
