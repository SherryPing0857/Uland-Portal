<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  startDate: String,
  endDate: String,
  status: String,
});

const emit = defineEmits(["update:startDate", "update:endDate", "update:status", "upload"]);

const start = ref(props.startDate || "");
const end = ref(props.endDate || "");
const selectedStatus = ref(props.status || "全部");

// 固定狀態選項
const statusOptions = ["全部", "審核中", "已核准", "已退回"];

watch([start, end, selectedStatus], ([s, e, st]) => {
  emit("update:startDate", s);
  emit("update:endDate", e);
  emit("update:status", st);
});

// 點擊切換狀態
const toggleStatus = (status) => {
  selectedStatus.value = selectedStatus.value === status ? "全部" : status;
  // 日期不變
};

// 全部按鈕
const resetFilters = () => {
  start.value = "";
  end.value = "";
  selectedStatus.value = "全部";
};
</script>

<template>
  <div class="filter-bar d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3 p-3 border rounded shadow-sm bg-white">
    <!-- 左側篩選 -->
    <div class="d-flex flex-column flex-md-row gap-3 flex-grow-1">
      <!-- 日期 -->
      <div class="d-flex flex-wrap flex-md-nowrap align-items-center gap-1">
        <label class="fw-semibold mb-0">日期:</label>
        <input type="date" v-model="start" class="form-control form-control-sm filter-input" />
        <span>~</span>
        <input type="date" v-model="end" class="form-control form-control-sm filter-input" />
      </div>

      <!-- 狀態按鈕 -->
      <div class="d-flex flex-wrap align-items-center gap-2">
        <label class="fw-semibold mb-0">狀態:</label>
        <div class="btn-group btn-group-sm flex-wrap">
          <button
            v-for="opt in statusOptions"
            :key="opt"
            type="button"
            class="btn"
            :class="selectedStatus === opt ? 'btn-primary' : 'btn-outline-primary'"
            @click="toggleStatus(opt)"
          >
            {{ opt }}
          </button>
        </div>
      </div>
    </div>

    <!-- 上傳按鈕 -->
    <div class="flex-shrink-0 mt-2 mt-md-0">
      <button class="btn btn-success btn-sm w-100 w-md-auto" @click="emit('upload')">上傳資料</button>
    </div>
  </div>
</template>

<style scoped>
.filter-input {
  width: 130px;
  max-width: 100%;
}

@media (max-width: 575px) {
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-group {
    width: 100%;
    flex-wrap: wrap;
  }
  .btn-group .btn {
    margin-bottom: 0.25rem;
  }
  .filter-input {
    width: 100%;
  }
  .btn-success {
    width: 100%;
  }
}
</style>
