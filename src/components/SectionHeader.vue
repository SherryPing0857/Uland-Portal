<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  buttonLabel: {
    type: String,
    default: "", 
  },
})

const emit = defineEmits(["click"])
</script>

<template>
  <div class="d-flex justify-content-between align-items-center mb-3">
    <!-- 左邊標題 -->
    <h2 class="section-title mb-0">{{ title }}</h2>

    <!-- 右邊按鈕 -->
    <button
      v-if="buttonLabel"
      class="btn btn-outline-primary"
      @click="$emit('click')"
    >
      {{ buttonLabel }}
    </button>
  </div>
</template>

<style scoped>
.section-title {
  font-weight: 600;
  color: #333;
}

.btn {
  font-weight: 500;
  border-radius: 20px;
  padding: 6px 20px;
  transition: all 0.2s ease;
}

.btn:hover {
  background-color: #0d6efd;
  color: #fff;
}
</style>
