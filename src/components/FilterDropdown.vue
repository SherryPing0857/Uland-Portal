<script setup>
import { ref, watch, computed } from 'vue'

const selectedDept = ref('')
const selectedType = ref('')

const departments = [
  { label: '人事部', value: 'hr' },
  { label: '業務部', value: 'sales' },
  { label: '客服部', value: 'customer' },
  { label: '研發部', value: 'rd' },
  { label: '企劃部', value: 'planning' }
]

// 部門對應問題類型
const deptTypes = {
  hr: ['人事系統', '流程問題'],
  sales: ['CRM 系統', '客戶資料'],
  customer: ['訂單系統', '帳號問題'],
  rd: ['開發環境', 'Git 操作'],
  planning: ['企劃系統', '報告流程']
}

// 動態生成問題類型下拉
const questionTypes = computed(() => {
  return selectedDept.value ? deptTypes[selectedDept.value] || [] : []
})

const emit = defineEmits(['update:filter'])

watch([selectedDept, selectedType], () => {
  emit('update:filter', {
    department: selectedDept.value,
    type: selectedType.value
  })
})

// 當部門改變時清空問題類型
watch(selectedDept, () => {
  selectedType.value = ''
})
</script>

<template>
  <div class="row g-2 mb-3">
    <div class="col-sm">
      <select class="form-select" v-model="selectedDept">
        <option value="" hidden>請選擇部門</option>
        <option v-for="dept in departments" :key="dept.value" :value="dept.value">
          {{ dept.label }}
        </option>
      </select>
    </div>

    <div class="col-sm">
      <select class="form-select" v-model="selectedType">
        <!-- 新增提示文字 -->
        <option value="" hidden>請選擇你的問題</option>
        <option v-for="type in questionTypes" :key="type" :value="type">
          {{ type }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.form-select { padding: 0.5rem 0.75rem; font-size: 1rem; }
</style>
