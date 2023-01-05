<template>
  <div>一个获取狗狗的案例</div>
  <div><button @click="handleGetDog">Test</button></div>
  <div class="image"><img alt="" :src="url" @load="handleComplete()" /></div>
</template>

<script lang="ts" setup>
import { url, handleGetDog, handleComplete } from '@/hook/demo/useGetDog'
</script>

<style lang="scss" scoped>
.image {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>
