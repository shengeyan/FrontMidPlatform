<template>
  <!-- 一级路由出口 -->
  <router-view />
  <!-- <div>{{ isMobileTerminal }}</div> -->
</template>

<script setup>
import { isMobileTerminal } from './utils/flexible'
</script>
