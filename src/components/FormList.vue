<template>
  <ul class="list-group">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      {{ item.name }}
      <a :href="item.link" class="btn btn-primary">
        下載
      </a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.list-group-item:hover {
  background: #f1f1f1;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}
</style>
