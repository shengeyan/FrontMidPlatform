<template>
  <div
    class="duration-500 bg-white sticky top-0 left-0 w-full z-10 dark:bg-zinc-800"
  >
    <ul
      :class="[isOpenCategoty ? 'h-[206px]' : 'h-[56px]']"
      class="w-[800px] relative flex flex-wrap justify-center overflow-x-auto px-[10px] py-1 text-xs text-zinc-600 duration-300 overflow-hidden mx-auto"
    >
      <!-- lg 下展开箭头 -->
      <div
        @click="triggerState"
        class="dark:hover:bg-zinc-900 absolute right-1 bottom-1 z-20 p-1 rounded cursor-pointer duration-200 hover:bg-zinc-200"
      >
        <m-svg-icon
          :name="isOpenCategoty ? 'fold' : 'unfold'"
          name="unfold"
          class="w-1 h-1"
          fillClass="dark:fill-zinc-300 fill-zinc-900"
        ></m-svg-icon>
      </div>
      <!-- category item -->
      <li
        :class="{
          'text-zinc-900 bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-300':
            currentCategoryIndex === index
        }"
        @click="onItemClick(index)"
        v-for="(item, index) in $store.getters.categorys"
        :key="item.id"
        class="dark:text-zinc-500 dark:hover:text-zinc-300 dark:hover:bg-zinc-900 shrink-0 px-1.5 py-0 z-10 duration-200 last:mr-4 text-zinc-900 text-base font-bold h-4 leading-4 cursor-pointer hover:bg-zinc-200 rounded mr-1 mb-1"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/**
 * 状态切换处理
 */
const isOpenCategoty = ref(false)
const triggerState = () => {
  isOpenCategoty.value = !isOpenCategoty.value
}

/**
 * 选中状态处理
 */
const currentCategoryIndex = ref(0)
const onItemClick = (index) => {
  currentCategoryIndex.value = index
}
</script>
