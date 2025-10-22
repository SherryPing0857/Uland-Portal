<script setup>
const props = defineProps({
  tabs: { type: Array, required: true },
  activeTab: { type: [String], required: true },
})
const emit = defineEmits(["update:activeTab"])

// helper
const getKey = (tab) => (typeof tab === "string" ? tab : tab.key)
const getLabel = (tab) => (typeof tab === "string" ? tab : tab.label)
</script>

<template>
  <div class="tab-switcher d-flex flex-wrap">
    <button
      v-for="tab in tabs"
      :key="getKey(tab)"
      class="btn me-2 mb-2"
      :class="{'btn-primary': activeTab === getKey(tab), 'btn-outline-primary': activeTab !== getKey(tab)}"
      @click="$emit('update:activeTab', getKey(tab))"
    >
      {{ getLabel(tab) }}
    </button>
  </div>
</template>

<style scoped>
.tab-switcher {
  display: flex;
  flex-wrap: wrap; /* 需要時換行 */
  gap: 0.5rem;
}

/* 移除原本固定最小寬度 */
.btn-group .btn,
.tab-switcher .btn {
  min-width: auto;
}
</style>
