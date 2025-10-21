<script setup>
import { ref, watch } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const isOpen = ref(false); // 導覽列是否展開

const navItems = [
  { name: "公告資訊", path: "/news" },
  { name: "部門指南", path: "/faq" },
  { name: "教育訓練", path: "/training" },
  { name: "各項表單", path: "/forms" },
  { name: "公司介紹", path: "/intro" },
  { name: "員工回饋", path: "/feedback" },
  { name: "帳戶設定", path: "/setting" },
];

const isActive = (path) => route.path.startsWith(path);

// 點選連結時關閉選單
const closeNav = () => {
  isOpen.value = false;
};

// 漢堡按鈕切換
const toggleNav = () => {
  isOpen.value = !isOpen.value;
};

// 監聽路由變化，自動收合
watch(() => route.path, () => {
  closeNav();
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary py-3">
    <div class="container">
      <RouterLink to="/news" class="navbar-brand text-white">捷一資訊&優能家 員工知識庫</RouterLink>

      <!-- 漢堡按鈕 -->
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleNav"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- 導覽列 -->
      <div :class="['collapse navbar-collapse', { show: isOpen }]">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-for="item in navItems" :key="item.path">
            <RouterLink
              :to="item.path"
              class="nav-link"
              :class="{ active: isActive(item.path) }"
              @click="closeNav"
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
  background-color: #3160a7 !important; 
}

.nav-link {
  color: #ffffff !important; 
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-link:hover {
  color: #ffdd57 !important;
}


.nav-link.active {
  color: #ffdd57 !important;
  font-weight: 600;
}

.navbar-collapse {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
}

.navbar-brand {
  font-weight: 700;
}

.navbar-toggler {
  border-color: #ffffff;
}
</style>
