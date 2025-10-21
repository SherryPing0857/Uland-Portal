<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 密碼重設欄位
const oldPassword = ref("");
const newPassword = ref("");
const confirmPassword = ref("");
const message = ref("");
const error = ref("");

// 前端驗證
const validateForm = () => {
  error.value = "";
  if (!oldPassword.value || !newPassword.value || !confirmPassword.value) {
    error.value = "請填寫所有欄位";
    return false;
  }
  if (newPassword.value !== confirmPassword.value) {
    error.value = "新密碼與確認密碼不一致";
    return false;
  }
  if (newPassword.value.length < 6) {
    error.value = "新密碼至少需要 6 個字元";
    return false;
  }
  return true;
};

// 提交密碼更改
const submitPasswordChange = async () => {
  if (!validateForm()) return;

  try {
    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oldPassword: oldPassword.value,
        newPassword: newPassword.value
      })
    });

    const data = await res.json();

    if (res.ok) {
      message.value = "密碼已成功更新";
      oldPassword.value = "";
      newPassword.value = "";
      confirmPassword.value = "";
    } else {
      error.value = data.message || "密碼更新失敗";
    }
  } catch (err) {
    console.error(err);
    error.value = "網路錯誤，請稍後再試";
  }
};

// 登出功能
const logout = () => {
  // 清除登入狀態（依你的實作而定）
  localStorage.removeItem("authToken"); // 假設你用 token
  // 導回首頁
  router.push("/");
};
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-4">設定</h1>

    <!-- 密碼重設區 -->
    <h3>重設密碼</h3>
    <div v-if="error" class="alert alert-danger">{{ error }}</div>
    <div v-if="message" class="alert alert-success">{{ message }}</div>

    <form @submit.prevent="submitPasswordChange" class="w-50 mb-5">
      <div class="mb-3">
        <label class="form-label">舊密碼</label>
        <input type="password" v-model="oldPassword" class="form-control" placeholder="輸入舊密碼" required>
      </div>

      <div class="mb-3">
        <label class="form-label">新密碼</label>
        <input type="password" v-model="newPassword" class="form-control" placeholder="輸入新密碼" required>
      </div>

      <div class="mb-3">
        <label class="form-label">確認新密碼</label>
        <input type="password" v-model="confirmPassword" class="form-control" placeholder="再次輸入新密碼" required>
      </div>

      <button type="submit" class="btn btn-primary">更新密碼</button>
    </form>

    <!-- 登出區 -->
    <h3>帳號操作</h3>
    <button class="btn btn-danger" @click="logout">登出</button>
  </div>
</template>

<style scoped>
</style>
