<!-- src/components/ShowMoreButton.vue -->
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "顯示更多",
  },
})
</script>

<template>
  <div class="text-end mb-3">
    <button class="btn btn-primary">{{ label }}</button>
  </div>
</template>

<style scoped>
.btn {
color:red;
  font-weight: 500;
  border-radius: 20px;
  padding: 6px 20px;
}
</style>
