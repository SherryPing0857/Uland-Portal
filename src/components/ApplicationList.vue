<script setup>
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps({
  startDate: { type: String, default: "" },
  endDate: { type: String, default: "" },
  status: { type: String, default: "" },
  statusOptions: { type: Array, default: () => ["已送出", "審核中", "已核准"] }
});

const emit = defineEmits(["update:startDate", "update:endDate", "update:status", "upload"]);

const start = ref(props.startDate);
const end = ref(props.endDate);
const selectedStatus = ref(props.status);

watch(start, val => emit("update:startDate", val));
watch(end, val => emit("update:endDate", val));
watch(selectedStatus, val => emit("update:status", val));

const toggleStatus = (status) => {
  selectedStatus.value = selectedStatus.value === status ? "" : status;
};

// 清空篩選
const clearFilters = () => {
  start.value = "";
  end.value = "";
  selectedStatus.value = "";
};
</script>

<template>
  <div class="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-3 p-3 border rounded shadow-sm bg-light">
    <!-- 左側篩選 -->
    <div class="d-flex flex-wrap align-items-center gap-2">
      <!-- 日期篩選 -->
      <label class="mb-0 fw-semibold me-1">日期:</label>
      <input type="date" class="form-control form-control-sm filter-input" v-model="start" />
      <span class="mx-1">~</span>
      <input type="date" class="form-control form-control-sm filter-input" v-model="end" />

      <!-- 狀態按鈕 -->
      <label class="mb-0 fw-semibold ms-3 me-1">狀態:</label>
      <div class="btn-group">
        <button
          v-for="opt in statusOptions"
          :key="opt"
          type="button"
          class="btn btn-sm"
          :class="selectedStatus === opt ? 'btn-primary' : 'btn-outline-primary'"
          @click="toggleStatus(opt)"
        >
          {{ opt }}
        </button>
        <button class="btn btn-sm btn-outline-secondary" @click="clearFilters">
          清空篩選
        </button>
      </div>
    </div>

    <!-- 右側上傳資料按鈕 -->
    <button class="btn btn-success btn-sm mt-2 mt-md-0" @click="$emit('upload')">
      上傳資料
    </button>
  </div>
</template>

<style scoped>
.filter-input {
  width: 150px;
  max-width: 100%;
}

/* 手機響應式調整 */
@media (max-width: 575px) {
  .d-flex.flex-column.flex-md-row {
    flex-direction: column;
    align-items: stretch;
  }
  .btn-group {
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .btn-group .btn {
    margin-bottom: 0.25rem;
  }
  .btn-success {
    width: 100%;
  }
}
</style>
