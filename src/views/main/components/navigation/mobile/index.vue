<template>
  <div class="duration-500 bg-white sticky top-0 left-0 z-10">
    <ul
      :ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 汉堡按钮 -->
      <li
        @click="isOpenPopup = !isOpenPopup"
        class="dark:bg-zinc-900 z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>

      <!-- 滑块 -->
      <li
        ref="sliderTarget"
        :style="sliderStyle"
        class="dark:bg-zinc-900 absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>

      <!-- category item -->
      <li
        v-for="(item, index) in $store.getters.categorys"
        :class="{
          'text-zinc-100': $store.getters.currentCategoryIndex === index
        }"
        @click="onItemClick(item)"
        :ref="setItemRef"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
      >
        {{ item.name }}
      </li>
    </ul>
    <m-popup v-model="isOpenPopup">
      <menu-vue :categorys="data" @onItemClick="onItemClick"></menu-vue>
    </m-popup>
  </div>
</template>

<script setup>
import { onBeforeUpdate, ref, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import menuVue from '@/views/main/components/menu/index.vue'
import { createStore } from 'vuex'

const store = createStore()

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '52px'
})
// 选中的 item 下标
const currentCategoryIndex = ref(0)
// 获取填充的所有 item 元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取 ul 元素，以计算偏移位置
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget)
watch(
  () => store.getters.currentCategoryIndex,
  (val) => {
    // 获取选中元素的 left、width
    const { left, width } = itemRefs[val].getBoundingClientRect()
    // 为 sliderStyle 设置属性
    sliderStyle.value = {
      // ul 横向滚动位置 + 当前元素的 left 偏移量
      transform: `translateX(${ulScrollLeft.value + left - 10 + 'px'})`,
      width: width + 'px'
    }
  }
)
// item 点击事件
const onItemClick = (item) => {
  store.commit('app/changeCurrentCategory', item)
  isOpenPopup.value = false
}

//控制popup
const isVisable = ref(false)
const onShowPopup = () => {
  isVisable.value = true
}
</script>
