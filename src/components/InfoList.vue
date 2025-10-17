<script setup>
const props = defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <ul class="list-group mb-3">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-start"
    >
      <div>
        <h5 class="mb-1">{{ item.title }} - {{ item.date }}</h5>
        <p class="mb-0 text-muted">{{ item.summary }}</p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.list-group-item {
  border-radius: 0.25rem;
  transition: background 0.2s ease;
}
.list-group-item:hover {
  background: #f1f3f5;
}
p {
  margin: 0;
  color: #495057;
  line-height: 1.5;
}
</style>
