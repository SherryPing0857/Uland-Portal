<script setup>
import { ref, computed } from "vue"
import InfoList from "../components/InfoList.vue"
import PageSwitcher from "../components/PageSwitcher.vue"

// Tab 切換
const tabs = ["部門消息", "會議記錄"]
const activeTab = ref(tabs[0])

// 模擬資料，每種 20 筆
const departmentNews = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  date: `2025-10-${(i % 30 + 1).toString().padStart(2, "0")}`,
  title: `人事部公告 #${i + 1}`,
  summary: `年度考核或公告內容示例 ${i + 1}`
}))

const meetingRecords = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  date: `2025-10-${(i % 30 + 1).toString().padStart(2, "0")}`,
  title: `會議紀錄 #${i + 1}`,
  summary: `討論會議紀錄示例 ${i + 1}`
}))

// 分頁控制
const pageSize = 10
const currentPage = ref(1)

// 當前頁顯示資料
const currentItems = computed(() => {
  const data = activeTab.value === "部門消息" ? departmentNews : meetingRecords
  const start = (currentPage.value - 1) * pageSize
  return data.slice(start, start + pageSize)
})

// 總頁數
const totalPages = computed(() => {
  const data = activeTab.value === "部門消息" ? departmentNews : meetingRecords
  return Math.ceil(data.length / pageSize)
})

// Tab 切換回第一頁
const onTabChange = (tab) => {
  activeTab.value = tab
  currentPage.value = 1
}
</script>

<template>
  <div class="container py-4">
    <h1>公告資訊</h1>

    <!-- Tab 切換 -->
    <div class="btn-group mb-3">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="btn"
        :class="{'btn-primary': activeTab === tab, 'btn-outline-primary': activeTab !== tab}"
        @click="onTabChange(tab)"
      >
        {{ tab }}
      </button>
    </div>

    <!-- 列表 -->
    <InfoList :items="currentItems" />

    <!-- 分頁器 -->
    <PageSwitcher v-model="currentPage" :totalPages="totalPages" />
  </div>
</template>

<style scoped>
.btn-group .btn {
  min-width: 120px;
}
</style>
