import { createRouter, createWebHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils/flexible'
import mobileRouters from './modules/mobile-router'
import pcRouters from './modules/pc-router'
//创建router实例
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileRouters : pcRouters
})

export default router
