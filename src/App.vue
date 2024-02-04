<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue"
import NProgress from "nprogress"
import "nprogress/nprogress.css"

NProgress.configure({
  easing: "ease",
  speed: 1000,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
  parent: "body",
})
onBeforeMount(async () => {
  NProgress.start()
})
onMounted(() => {
  NProgress.done()
})
</script>

<style scoped></style>
