<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  startDate: { type: String, default: "" },
  endDate: { type: String, default: "" },
});

const emit = defineEmits([
  "update:startDate",
  "update:endDate",
]);

const start = ref(props.startDate);
const end = ref(props.endDate);

watch(start, val => emit("update:startDate", val));
watch(end, val => emit("update:endDate", val));
</script>

<template>
  <div class="d-flex gap-2 flex-wrap align-items-center">
    <label class="mb-0">日期篩選:</label>
    <input type="date" class="form-control" v-model="start" />
    <span class="mx-1">~</span>
    <input type="date" class="form-control" v-model="end" />
  </div>
</template>

<style scoped>
.form-control {
  max-width: 180px;
}
</style>
