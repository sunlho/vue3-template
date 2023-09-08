<template>
  <div class="wrapper">
    <div class="music" @click="music.toggle()">
      <img ref="musicIcon" alt="" src="./music.png" />
    </div>
    <div><button @click="music.start()">播放</button></div>
    <br />
    <div><button @click="music.stop()">停止</button></div>
    <br />
    <div><button @click="music.toggle()">切换</button></div>
  </div>
</template>

<script lang="ts" setup>
import PlayMusic from '@/hook/core/useAutoPlayMusic'
const music = new PlayMusic({
  url: 'https://qushen-file.oss-cn-beijing.aliyuncs.com/CBC15/5c89d6779fab955439.mp3',
  isAutoPlay: false
})
const state = music.state()
const musicIcon = ref<HTMLElement | null>(null)

watch(state, (val) => {
  if (val) {
    musicIcon.value?.style.setProperty('animation-play-state', 'running')
  } else {
    musicIcon.value?.style.setProperty('animation-play-state', 'paused')
  }
})


</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #c1d0c5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  width: 100px;
  height: 50px;
  background-color: #409eff;
  color: #fff;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #66b1ff;
  }

  &:active {
    background-color: #3a8ee6;
  }
}

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
