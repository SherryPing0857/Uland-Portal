<script setup>
const props = defineProps({
  tabs: { type: Array, required: true },
  activeTab: { type: String, required: true },
})
const emit = defineEmits(["update:activeTab"])
</script>

<template>
  <div class="btn-group mb-3">
    <button
      v-for="tab in tabs"
      :key="tab"
      class="btn"
      :class="{'btn-primary': activeTab === tab, 'btn-outline-primary': activeTab !== tab}"
      @click="$emit('update:activeTab', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style scoped>
.btn-group .btn {
  min-width: 120px;
}
</style>
