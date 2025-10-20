<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

// 導航列資料
const navItems = [
  { name: "公告資訊", path: "/news" },
  { name: "部門指南", path: "/faq" },
  { name: "教育訓練", path: "/training" },
  { name: "各項表單", path: "/forms" },
  { name: "公司介紹", path: "/intro" },
];

// 判斷是否為當前頁面
const isActive = (path) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
    <div class="container">
      <!-- Logo 或網站名稱 -->
      <RouterLink to="/" class="navbar-brand">公司名稱</RouterLink>

      <!-- 漢堡按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 導覽列連結 -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="nav-link"
              :class="{ active: isActive(item.path) }"
            >
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #fafafa; /* 文青柔和背景 */
  border-bottom: 1px solid #e0e0e0;
}

.nav-link {
  color: #555;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #1a3d7c;
}

.nav-link.active {
  color: #1a3d7c;
  font-weight: 600;
}

.navbar-collapse {
  background-color: #fafafa;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}
</style>
