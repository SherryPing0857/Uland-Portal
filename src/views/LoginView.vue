<script setup>
import { ref } from "vue"

// 表單資料
const idNumber = ref("")
const password = ref("")
const errorMessage = ref("")

// 模擬登入函數
const login = () => {
  errorMessage.value = ""
  if (!idNumber.value || !password.value) {
    errorMessage.value = "請填寫身分證與密碼"
    return
  }
  console.log("登入資訊:", { idNumber: idNumber.value, password: password.value })
  alert("登入成功（範例）")
}
</script>

<template>
  <div class="d-flex justify-content-center login-page">
    <div class="card p-4 shadow-sm login-card">
      <h2 class="mb-4 text-center">員工入口網站</h2>
      <p class="text-muted text-center mb-3">
        使用身分證登入系統，密碼同樣為身分證號碼
      </p>

      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>

      <form @submit.prevent="login">
        <div class="mb-3">
          <label for="idNumber" class="form-label">身分證號</label>
          <input
            type="text"
            id="idNumber"
            class="form-control"
            v-model="idNumber"
            placeholder="請輸入身分證號"
          />
        </div>

        <div class="mb-3">
          <label for="password" class="form-label">密碼</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            placeholder="請輸入密碼（同身分證號）"
          />
        </div>

        <button type="submit" class="btn btn-primary w-100">登入</button>
      </form>

      <p class="text-center text-muted mt-3 small-text">
        如果忘記密碼，請聯繫系統管理員
      </p>
    </div>
  </div>
</template>

<style>
.login-page {
  min-height: 100vh;
  align-items: flex-start;
  padding-top: 80px;
  display: flex;
  justify-content: center;
}

.login-card {
  width: 100%;
  max-width: 400px;
  border-radius: 0.5rem;
}

.small-text {
  font-size: 0.9rem;
}
</style>
