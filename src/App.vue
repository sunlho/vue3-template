<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import WeChatOpenTest from './hook/tools/useWechatOpenTest'
const wx = new WeChatOpenTest()
</script>

<style scoped></style>
