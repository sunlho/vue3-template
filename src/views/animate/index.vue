<script lang="ts" setup>
import { handleAnimation, hiddenEffect } from "@/utils/animation"
import animateCssData from "./data"

const handlePreviewAnimate = (e: MouseEvent, item: { label: string; value: string }) => {
  const target = (e.target as HTMLElement).getElementsByClassName("target")[0]
  if (!target) return
  handleAnimation(target, [
    {
      ...item,
      onComplete: (anim) => {
        console.log("Animation complete:", item.label, anim)
        setTimeout(() => {
          anim.reset()
          if (hiddenEffect[item.value]) {
            anim.targets[0].style.transform = ""
            anim.targets[0].style.opacity = "1"
          }
        }, 500)
      },
    },
  ])
}
</script>

<template>
  <div class="flex flex-col flex-1">
    <div class="flex">
      <div class="flex-1 overflow-hidden" v-for="item in animateCssData" :key="item.label" :label="item.label" :name="item.label">
        <div class="px-20px pb-20px">{{ item.label }}</div>
        <div
          v-for="(animate, index) in item.children"
          :key="index"
          class="inline-block c-#76838f mx-20px mb-30px"
          @mouseenter="handlePreviewAnimate($event, animate)"
        >
          <div class="w-100px h-100px flex flex-col items-center justify-center gap-10px cursor-pointer rd-6px b-#eee b-solid b-1px br-4px">
            <span class="target h-30px w-30px bg-#ccc pointer-events-none"></span>
            <span class="c-#000">{{ animate.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
