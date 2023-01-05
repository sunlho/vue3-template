<template>
  <div class="login">
    <button @click="handleGetCode(phone)">
      <span v-if="codeTime == 0">获取验证码</span>
      <span v-else>{{ codeTime }}</span>
    </button>
    <button @click="phoneCodeLogin(phone, code)">登陆</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { phoneCodeLogin, handleGetCode, codeTime } from '@/hook/core/useLogin'

const phone = ref('19954279950')
const code = ref('')
</script>

<style lang="scss" scoped></style>
