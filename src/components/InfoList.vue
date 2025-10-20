<script setup>
import { defineProps } from "vue"
import { useRouter } from "vue-router"

const props = defineProps({
  items: { type: Array, required: true },
  type: { type: String, required: true } // 'news' 或 'meeting'
})

const router = useRouter()

const goDetail = (item) => {
  const routeName = props.type === 'news' ? 'news-detail' : 'meeting-detail'
  router.push({ name: routeName, params: { id: item.id } })
}
</script>

<template>
  <ul class="list-group mb-3">
    <li
      v-for="item in items"
      :key="item.id"
      class="list-group-item d-flex justify-content-between align-items-start"
      @click="goDetail(item)"
      style="cursor: pointer;"
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
  padding: 0.5rem 1rem; 
}

.list-group-item:hover {
  background: #f1f3f5;
}

h5 {
  margin: 0;
  font-size: 1rem; 
  font-weight: 500; 
  color: #333;
}

p {
  margin: 0;
  color: #666;
  font-size: 0.85rem;
  line-height: 1.4;
}
</style>
