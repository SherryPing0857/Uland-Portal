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
  if (path === "/") {
    return route.path === "/"; // 嚴格匹配首頁
  }
  return route.path.startsWith(path); // 其他路由可匹配子路由
};
</script>

<template>
  <header class="d-flex justify-content-center py-3">
    <ul class="nav nav-pills">
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
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(90deg, #0a0f25, #1a1f3e); /* 深藍夜空漸層 */
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 255, 255, 0.1);
}

.nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1em;
}

.nav-link {
  color: #0ff; /* 青色文字 */
  font-weight: 500;
  background: linear-gradient(145deg, #1a1f3e, #0d1326); /* 深色漸層按鈕 */
  border-radius: 1rem;
  padding: 0.5rem 1.2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 5px rgba(0, 255, 255, 0.2);
}

.nav-link:hover {
  background: linear-gradient(145deg, #0ff, #00c8ff); /* hover 青色漸層 */
  color: #000;
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6), 0 4px 12px rgba(0, 255, 255, 0.3);
}

.nav-link.active {
  background: linear-gradient(
    145deg,
    #6fca77ff,
    #00bfff
  ); /* active 按鈕亮藍色漸層 */
  color: #fff;
  font-weight: 600;
  box-shadow: 0 0 15px rgba(31, 59, 59, 0.6), 0 4px 12px rgba(0, 255, 255, 0.3);
}
</style>
