<script setup>
import { ref, computed } from "vue";
import FormList from "../components/FormList.vue";
import DocumentList from "../components/DocumentList.vue";
import ApplicationList from "../components/ApplicationList.vue";
import TabSwitcher from "../components/TabSwitcher.vue";

// 當前選中的 tab
const currentTab = ref("forms");

// 三個 tab 選項
const tabs = [
  { key: "forms", label: "表單" },
  { key: "documents", label: "公文" },
  { key: "applications", label: "申請" },
];

// 可見 tab（控制誰能看到申請 tab）
const visibleTabs = ref([
  { key: "forms", label: "表單" },
  { key: "documents", label: "公文" },
]);

// Toggle 申請 tab
const toggleApplicationTab = () => {
  const exists = visibleTabs.value.find(t => t.key === "applications");
  if (exists) {
    // 隱藏
    visibleTabs.value = visibleTabs.value.filter(t => t.key !== "applications");
    if (currentTab.value === "applications") currentTab.value = "forms";
  } else {
    // 顯示
    visibleTabs.value.push(tabs.find(t => t.key === "applications"));
  }
};
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-3">各項資料</h1>

    <!-- Tab + 按鈕同一行 -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <!-- TabSwitcher 靠左 -->
      <TabSwitcher 
        :tabs="visibleTabs" 
        :activeTab="currentTab" 
        @update:activeTab="currentTab = $event"
      />
      
      <!-- 按鈕靠右（控制誰能看到申請 tab） -->
      <button class="btn btn-success btn-sm" @click="toggleApplicationTab">
        {{ visibleTabs.find(t => t.key === "applications") ? "隱藏申請" : "開放申請" }}
      </button>
    </div>

    <!-- 根據當前 tab 顯示不同元件 -->
    <div v-if="currentTab === 'forms'">
      <FormList />
    </div>
    <div v-else-if="currentTab === 'documents'">
      <DocumentList />
    </div>
    <div v-else-if="currentTab === 'applications'">
      <ApplicationList />
    </div>
  </div>
</template>
