<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { onBeforeMount, onMounted } from "vue"
import WxJsApi from "./hook/tools/useWxJsApi"
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
  const wx = new WxJsApi({
    debug: false,
    jsApiList: ["getNetworkType"],
  })
  wx.init().then(() => {
    wx.setWxShareData({
      updateAppMessageShareData: {
        title: "分享标题",
        desc: "分享描述",
        link: "分享链接",
        imgUrl: "分享图标",
        success: function () {
          // 设置成功
        },
      },
      updateTimelineShareData: {
        title: "分享标题",
        link: "分享链接",
        imgUrl: "分享图标",
        success: function () {
          // 设置成功
        },
      },
    })
  })
})
</script>

<style scoped></style>
