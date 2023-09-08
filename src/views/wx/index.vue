<template>
  <div>微信接口测试</div>
  <div><button @click="wxScanQRCode">微信二维码</button></div>
</template>

<script lang="ts" setup>
const wxScanQRCode = () => {
  window.wx.scanQRCode({
    needResult: 1,
    scanType: ['qrCode', 'barCode'],
    success: function (res) {
      console.log(res)
      const result = res.resultStr // 当needResult 为 1 时，扫码返回的结果
      console.log(result)
    },
    fail: function (res) {
      console.log('err', res)
    }
  })
}
</script>

<style lang="scss" scoped></style>
