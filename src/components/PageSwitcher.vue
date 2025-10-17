<script setup>
import { computed } from "vue"

const props = defineProps({
  totalPages: { type: Number, required: true },
  modelValue: { type: Number, required: true },
})

const emit = defineEmits(["update:modelValue"])

const currentPage = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val)
})

const goToPage = (page) => {
  if (page >= 1 && page <= props.totalPages) {
    currentPage.value = page
  }
}
</script>

<template>
  <nav aria-label="Page navigation" class="d-flex justify-content-center my-3">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <button class="page-link" @click="goToPage(currentPage - 1)">&laquo;</button>
      </li>

      <li
        v-for="page in totalPages"
        :key="page"
        class="page-item"
        :class="{ active: currentPage === page }"
      >
        <button class="page-link" @click="goToPage(page)">{{ page }}</button>
      </li>

      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <button class="page-link" @click="goToPage(currentPage + 1)">&raquo;</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.page-item.active .page-link {
  background-color: #0d6efd;
  border-color: #0d6efd;
  color: white;
}
</style>
