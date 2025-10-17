<script setup>
import { ref } from 'vue'

const selectedDept = ref('')
const selectedType = ref('')

const departments = [
  { label: '人事部', value: 'hr' },
  { label: '業務部', value: 'sales' },
  { label: '客服部', value: 'customer' },
  { label: '研發部', value: 'rd' },
  { label: '企劃部', value: 'planning' },
]

const questionTypes = [
  { label: '系統問題', value: 'system' },
  { label: '操作問題', value: 'operation' },
  { label: '帳號問題', value: 'account' },
  { label: '其他', value: 'other' },
]
</script>

<template>
  <div class="row g-2">
    <!-- 部門選單 -->
    <div class="col-sm">
      <select class="form-select" v-model="selectedDept">
        <option value="" disabled selected hidden>請選擇你的部門</option>
        <option v-for="dept in departments" :key="dept.value" :value="dept.value">
          {{ dept.label }}
        </option>
      </select>
    </div>

    <!-- 問題類型選單 -->
    <div class="col-sm">
      <select class="form-select" v-model="selectedType">
        <option value="" disabled selected hidden>請選擇問題類型</option>
        <option v-for="type in questionTypes" :key="type.value" :value="type.value">
          {{ type.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
/* 如果想讓選單更高、更漂亮可以加 padding */
.form-select {
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
}
</style>
