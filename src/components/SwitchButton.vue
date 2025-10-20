<template>
  <div class="d-flex flex-wrap gap-2">
    <button
      v-for="option in options"
      :key="option"
      :class="['btn', 'btn-outline-primary', { active: modelValue === option }]"
      @click="$emit('update:modelValue', option)"
    >
      {{ option }}
    </button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  options: {
    type: Array,
    default: () => ["全部", "業務部", "客服部", "工務部", "企劃部", "研發部"]
  },
  modelValue: String
});
</script>

<style>
.btn.active {
  background-color: #0d6efd;
  color: white;
  border-color: #0d6efd;
}
</style>
