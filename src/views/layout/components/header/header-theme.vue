<template>
  <m-popover placement="bottom-left">
    <template #reference>
      <m-svg-icon
        :name="svgIconName"
        class="guide-theme dark:hover:bg-zinc-900 guide-theme w-4 h-4 p-1 cursor-pointer rounded-sm duration-200 outline-none hover:bg-zinc-100/60"
        fillClass="dark:fill-zinc-300 fill-zinc-900"
      ></m-svg-icon>
    </template>

    <div class="w-[140px] overflow-hidden">
      <div
        @click="onItemClick(item)"
        class="dark:hover:bg-zinc-800 flex items-center p-1 cursor-pointer rounded hover:bg-zinc-100/60"
        v-for="item in themeArr"
        :key="item.id"
      >
        <m-svg-icon
          :name="item.icon"
          class="w-1.5 h-1.5 mr-1"
          fillClass="dark:fill-zinc-300 fill-zinc-900"
        ></m-svg-icon>
        <span class="dark:text-zinc-300 text-zinc-800 text-sm">{{
          item.name
        }}</span>
      </div>
    </div>
  </m-popover>
</template>

<script setup>
import { THEME_DARK, THEME_LIGHT, THEME_SYSTEM } from '@/constants'
import { useStore } from 'vuex'
import { computed } from 'vue'

// 构建渲染数据源
const themeArr = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白'
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极夜黑'
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统'
  }
]

/**
 * menu 切换事件
 * @param {*} theme
 */
const onItemClick = (theme) => {
  store.commit('theme/changeThemeType', theme.type)
}

// 控制图标展示
const store = useStore()
const svgIconName = computed(() => {
  // 根据当前的 themeType 返回当前的选中 icon
  const findTheme = themeArr.find((theme) => {
    return theme.type === store.getters.themeType
  })
  return findTheme.icon
})
</script>

<style lang="scss" scoped></style>
