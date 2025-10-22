<script setup>
import { useRouter } from 'vue-router'

// 如果使用 Vue Router，就可以回到上一頁
const router = useRouter()

const goBack = () => {
  if (window.history.length > 1) {
    // 有上一頁的話用瀏覽器返回
    window.history.back()
  } else {
    // 如果沒有上一頁，使用 Vue Router 導向預設頁面
    router.push('/')
  }
}
</script>

<template>
  <button class="btn btn-outline-primary" @click="goBack">
    ← 返回上一頁
  </button>
</template>

<style scoped>
.btn {
  min-width: 120px;
}
</style>
