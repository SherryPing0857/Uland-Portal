<script setup>
import { ref, computed, onMounted } from 'vue'
import FilterDropdown from '../components/FilterDropdown.vue'
import Accordion from '../components/Accordion.vue'

const filter = ref({ department: '', type: '' })
const faqs = ref([])

onMounted(async () => {
  const res = await fetch('/data/Faq.json')
  faqs.value = await res.json()
})

const filteredFaqs = computed(() => {
  return faqs.value.filter(f => {
    const matchDept = !filter.value.department || f.department === filter.value.department
    const matchType = !filter.value.type || f.type === filter.value.type
    return matchDept && matchType
  })
})
</script>

<template>
  <div class="container py-4">
    <h1 class="mb-3">部門指南</h1>
    <FilterDropdown v-model:filter="filter" />
    <Accordion :items="filteredFaqs" :openFirst="true" />
  </div>
</template>
