<template>
  <div><button @click="music.start()">播放</button></div>
</template>

<script lang="ts" setup>
import PlayMusic from '@/hook/demo/useAutoPlayMusic'
const music = new PlayMusic({
  isAutoPlay: false,
  url: 'http://qushen-file.oss-cn-beijing.aliyuncs.com/outsourcing-2022/zhengzhou_nissan/assets/1.wav'
})
// music.loadMusic()
</script>

<style lang="scss" scoped></style>
