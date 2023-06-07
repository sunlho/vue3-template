<template>
  <div ref="container"></div>
</template>

<script lang="ts" setup>
/**
 * 使用 vite-plugin-raw，将 iconfont.scss 文件以字符串的形式导入
 */
import index from '@/static/fonts/iconfont.scss?raw'
const regex = /\.(\w+):before/g
const matches: string[] = []
const container = ref<HTMLElement | null>(null)

let match
while ((match = regex.exec(index))) {
  matches.push(match[1])
}

const createIconfont = () => {
  if (container.value != null) {
    matches.forEach((item) => {
      const span = document.createElement('span')
      span.innerHTML = `<i class="iconfont ${item}"></i>`
      container.value?.appendChild(span)
    })
  }
}
onMounted(() => {
  createIconfont()
})
</script>

<style lang="scss" scoped></style>
