<template>
  <div class="container py-4">
    <h1>教育訓練</h1>

    <!-- 切換部門 -->
    <SwitchButton v-model="selectedDepartment" />

    <!-- 卡片列表 -->
    <div class="row g-4 mt-3">
      <div
        class="col-12 col-sm-6 col-lg-3"
        v-for="item in pagedTrainings"
        :key="item.id"
      >
        <Card
          :title="item.title"
          :text="item.text"
          :img="item.img"
          :link="item.link"
          :departments="item.departments"
        />
      </div>
    </div>

    <!-- 分頁元件 -->
    <PageSwitcher
      v-model="currentPage"
      :totalPages="totalPages"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Card from "../components/Card.vue";
import SwitchButton from "../components/SwitchButton.vue";
import PageSwitcher from "../components/PageSwitcher.vue";

const selectedDepartment = ref("全部");
const trainingsData = ref([]);

// 每頁顯示卡片數量 & 當前頁碼
const pageSize = 8; // 優化：每頁只渲染 8 張
const currentPage = ref(1);

// 載入 JSON
onMounted(async () => {
  const res = await fetch("/data/Training.json");
  trainingsData.value = await res.json();
});

// 過濾課程
const filteredTrainings = computed(() => {
  if (selectedDepartment.value === "全部") return trainingsData.value;
  return trainingsData.value.filter(item =>
    item.departments.includes(selectedDepartment.value)
  );
});

// 分頁資料
const pagedTrainings = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredTrainings.value.slice(start, start + pageSize);
});

// 總頁數
const totalPages = computed(() =>
  Math.ceil(filteredTrainings.value.length / pageSize)
);

// 切換部門時自動跳回第一頁
watch(selectedDepartment, () => {
  currentPage.value = 1;
});
</script>

<style scoped>
/* Card 文字截斷 */
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 顯示 3 行文字 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Card 圖片懶加載優化 */
.card-img-top {
  height: 200px;
  object-fit: cover;
}

/* 分頁按鈕美化 */
.pagination .page-link {
  cursor: pointer;
}
</style>
