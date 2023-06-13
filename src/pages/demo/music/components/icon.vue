<script lang="ts" setup>
import PlayMusic from '@/hook/demo/useAutoPlayMusic'

const music = new PlayMusic({
  url: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/5c89d6779fab955439.mp3',
  isAutoPlay: true
})

const musicIcon = ref<HTMLElement | null>(null)

const handleClick = () => {
  const state = music.toggle()
  if (state) {
    musicIcon.value?.style.setProperty('animation-play-state', 'running')
  } else {
    musicIcon.value?.style.setProperty('animation-play-state', 'paused')
  }
}

onMounted(() => {
  setTimeout(() => {
    musicIcon.value?.style.setProperty('animation-play-state', 'running')
  }, 1000)
})
</script>

<template>
  <div class="music" @click="handleClick">
    <img ref="musicIcon" alt="" src="./music.png" />
  </div>
</template>

<style lang="scss" scoped>
.music {
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 999;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    animation: rotation 5s linear infinite;
    animation-play-state: paused;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
