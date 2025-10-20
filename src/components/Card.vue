<script setup>
defineProps({
  title: String,
  text: String,
  img: String,
  link: String,
  departments: Array
})
</script>

<template>
  <div class="card h-100 shadow-sm d-flex flex-column">
    <img 
      :src="img" 
      class="card-img-top" 
      :alt="title" 
      style="height:200px; object-fit:cover;"
      loading="lazy"
    />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
      <p class="text-muted mb-2">部門: {{ departments.join('、') }}</p>
      <div class="mt-auto text-end">
        <router-link :to="link || '#'" class="btn btn-primary">
          瞭解更多
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-text {
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
