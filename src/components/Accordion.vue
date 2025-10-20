<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  items: { type: Array, default: () => [] },
})

const activeId = ref(null)
</script>

<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div
      class="accordion-wrapper"
      v-for="item in items"
      :key="item.id"
    >
      <div class="accordion-item">
        <h2 class="accordion-header" :id="'heading' + item.id">
          <button
            class="accordion-button"
            :class="{ collapsed: activeId !== item.id }"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse' + item.id"
            aria-expanded="false"
            :aria-controls="'collapse' + item.id"
            @click="activeId = activeId === item.id ? null : item.id"
          >
            {{ item.title }}
          </button>
        </h2>
        <div
          :id="'collapse' + item.id"
          class="accordion-collapse collapse"
          :class="{ show: activeId === item.id }"
          :aria-labelledby="'heading' + item.id"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-wrapper {
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
  overflow: hidden;
}

.accordion-button {
  font-weight: 500;
}
</style>
