<script setup>
import { ref, computed, onMounted } from "vue"
import InfoList from "../components/InfoList.vue"
import PageSwitcher from "../components/PageSwitcher.vue"

const tabs = ["部門消息", "會議記錄"]
const activeTab = ref(tabs[0])

const currentPage = ref(1)
const pageSize = 10

const departmentNews = ref([])
const meetingRecords = ref([])

// 載入資料
onMounted(async () => {
  try {
    const [departRes, meetingRes] = await Promise.all([
      fetch("/data/DepartNews.json"),
      fetch("/data/MeetingRecords.json")
    ])
    departmentNews.value = await departRes.json()
    meetingRecords.value = await meetingRes.json()
  } catch (err) {
    console.error("載入資料失敗：", err)
  }
})

// 目前頁面要顯示的資料
const currentItems = computed(() => {
  const data = activeTab.value === "部門消息" ? departmentNews.value : meetingRecords.value
  const start = (currentPage.value - 1) * pageSize
  return data.slice(start, start + pageSize)
})

// 總頁數
const totalPages = computed(() => {
  const data = activeTab.value === "部門消息" ? departmentNews.value : meetingRecords.value
  return Math.ceil(data.length / pageSize)
})

// 切換 Tab
const onTabChange = (tab) => {
  activeTab.value = tab
  currentPage.value = 1
}
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-3">公告資訊</h1>

    <!-- Tabs -->
    <div class="btn-group mb-3">
      <button
        v-for="tab in tabs"
        :key="tab"
        class="btn"
        :class="{ 'btn-primary': activeTab === tab, 'btn-outline-primary': activeTab !== tab }"
        @click="onTabChange(tab)"
      >
        {{ tab }}
      </button>
    </div>

    <!-- 資訊列表，根據 Tab 傳 type -->
    <InfoList 
      :items="currentItems" 
      :type="activeTab === '部門消息' ? 'news' : 'meeting'" 
    />

    <!-- 分頁 -->
    <PageSwitcher v-model="currentPage" :totalPages="totalPages" />
  </div>
</template>

<style scoped>
.btn-group .btn { min-width: 120px; }
</style>
