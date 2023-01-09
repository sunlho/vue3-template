<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import WxJsApi from './hook/tools/useWxJsApi'
new WxJsApi()
</script>

<style scoped></style>
