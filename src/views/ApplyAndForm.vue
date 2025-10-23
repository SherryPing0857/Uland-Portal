<script setup>
import { ref, computed, onMounted } from "vue";
import FormList from "../components/FormList.vue";
import DocumentList from "../components/DocumentList.vue";
import ApplicationList from "../components/ApplicationList.vue";
import TabSwitcher from "../components/TabSwitcher.vue";
import PageSwitcher from "../components/PageSwitcher.vue";

// Tab 控制
const currentTab = ref("forms");
const currentPage = ref(1);
const pageSize = 10;

// 篩選條件（僅 ApplicationList 用）
const startDate = ref("");
const endDate = ref("");
const status = ref("全部");

// 統一管理資料
const dataMap = ref({
  forms: [],
  documents: [],
  applications: [],
});

// 載入資料
onMounted(async () => {
  try {
    const [formsRes, docsRes, appsRes] = await Promise.all([
      fetch("/data/FormList.json"),
      fetch("/data/DocumentList.json"),
      fetch("/data/Applications.json")
    ]);

    dataMap.value.forms = await formsRes.json();
    dataMap.value.documents = await docsRes.json();
    dataMap.value.applications = await appsRes.json();
  } catch (err) {
    console.error(err);
  }
});

// 篩選後資料（Application）
const filteredApplications = computed(() => {
  return dataMap.value.applications.filter(app => {
    const dateOk =
      (!startDate.value || app.date >= startDate.value) &&
      (!endDate.value || app.date <= endDate.value);
    const statusOk = status.value === "全部" || !status.value || app.status === status.value;
    return dateOk && statusOk;
  });
});

// 當前頁資料
const pagedData = computed(() => {
  const allData =
    currentTab.value === "applications"
      ? filteredApplications.value
      : dataMap.value[currentTab.value] || [];

  const start = (currentPage.value - 1) * pageSize;
  return allData.slice(start, start + pageSize);
});

// 總頁數
const totalPages = computed(() => {
  const length =
    currentTab.value === "applications"
      ? filteredApplications.value.length
      : dataMap.value[currentTab.value]?.length || 0;
  return Math.ceil(length / pageSize);
});

// Tab 切換回第一頁，且重置 Application 篩選條件
const onTabChange = (tab) => {
  currentTab.value = tab;
  currentPage.value = 1;

  if (tab === "applications") {
    startDate.value = "";
    endDate.value = "";
    status.value = "全部";
  }
};

// Tab 設定
const tabs = [
  { key: "forms", label: "表單" },
  { key: "documents", label: "公文" },
  { key: "applications", label: "申請" },
];
const visibleTabs = ref([
  { key: "forms", label: "表單" },
  { key: "documents", label: "公文" },
]);

const toggleApplicationTab = () => {
  const exists = visibleTabs.value.find(t => t.key === "applications");
  if (exists) {
    visibleTabs.value = visibleTabs.value.filter(t => t.key !== "applications");
    if (currentTab.value === "applications") currentTab.value = "forms";
  } else {
    visibleTabs.value.push(tabs.find(t => t.key === "applications"));
  }
};

// 更新 Application 篩選條件
const updateFilter = (val) => {
  if (val.startDate !== undefined) startDate.value = val.startDate;
  if (val.endDate !== undefined) endDate.value = val.endDate;
  if (val.status !== undefined) status.value = val.status;
  currentPage.value = 1;
};
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-3">各項資料</h1>

    <div class="d-flex justify-content-between align-items-center mb-3">
      <TabSwitcher
        :tabs="visibleTabs"
        :activeTab="currentTab"
        @update:activeTab="onTabChange"
      />
      <button class="btn btn-success btn-sm" @click="toggleApplicationTab">
        {{ visibleTabs.find(t => t.key === "applications") ? "隱藏申請" : "開放申請" }}
      </button>
    </div>

    <div v-if="currentTab === 'forms'">
      <FormList :items="pagedData" />
    </div>
    <div v-else-if="currentTab === 'documents'">
      <DocumentList :items="pagedData" />
    </div>
    <div v-else-if="currentTab === 'applications'">
      <ApplicationList
        :items="pagedData"
        :startDate="startDate"
        :endDate="endDate"
        :status="status"
        @update:filter="updateFilter"
      />
    </div>

    <PageSwitcher v-if="totalPages > 1" v-model="currentPage" :totalPages="totalPages" />
  </div>
</template>
