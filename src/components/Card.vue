<script setup>
defineProps({
  title: String,
  text: String,
  img: String,
  link: String,
  departments: Array
});
</script>

<template>
  <div class="card h-100 shadow-sm d-flex flex-column">
    <img :src="img" class="card-img-top" :alt="title" loading="lazy" />
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
      <p class="text-muted mb-2">部門: {{ departments.join('、') }}</p>
      <div class="mt-auto text-end">
        <router-link :to="link || '#'" class="btn btn-primary">瞭解更多</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: 400px;
}

.card-img-top {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
