<script setup>
import { ref, computed, onMounted } from "vue"
import InfoList from "../components/InfoList.vue"
import PageSwitcher from "../components/PageSwitcher.vue"
import TabSwitcher from "../components/TabSwitcher.vue"

// Tab 名稱（靜態陣列）
const allTabs = ["部門消息", "會議紀錄"]

// 控制哪些 tab 顯示
const visibleTabs = ref(["部門消息"]) // 初始只顯示部門消息
const activeTab = ref("部門消息")

// 分頁設定
const currentPage = ref(1)
const pageSize = 10

// 資料來源
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

// 計算當前頁顯示的資料
const currentItems = computed(() => {
  const data = activeTab.value === "部門消息" ? departmentNews.value : meetingRecords.value
  const start = (currentPage.value - 1) * pageSize
  return data.slice(start, start + pageSize)
})

// 計算總頁數
const totalPages = computed(() => {
  const data = activeTab.value === "部門消息" ? departmentNews.value : meetingRecords.value
  return Math.ceil(data.length / pageSize)
})

// Tab 切換事件
const onTabChange = (tab) => {
  activeTab.value = tab
  currentPage.value = 1
}

// Toggle 顯示/隱藏會議紀錄
const toggleMeetingTab = () => {
  if (visibleTabs.value.includes("會議紀錄")) {
    visibleTabs.value = visibleTabs.value.filter(t => t !== "會議紀錄")
    if (activeTab.value === "會議紀錄") activeTab.value = "部門消息"
  } else {
    visibleTabs.value.push("會議紀錄")
  }
}
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-3">公告資訊</h1>

    <!-- 按鈕 + Tab 同一行 -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <!-- TabSwitcher 靠左 -->
      <TabSwitcher 
        :tabs="visibleTabs" 
        :activeTab="activeTab" 
        @update:activeTab="onTabChange" 
      />
      <!-- 按鈕靠右 -->
      <button class="btn btn-success" @click="toggleMeetingTab">
        {{ visibleTabs.includes("會議紀錄") ? "隱藏會議紀錄" : "開放會議紀錄" }}
      </button>
    </div>

    <!-- 資訊列表 -->
    <InfoList 
      :items="currentItems" 
      :type="activeTab === '部門消息' ? 'news' : 'meeting'" 
    />

    <!-- 分頁 -->
    <PageSwitcher v-model="currentPage" :totalPages="totalPages" />
  </div>
</template>
