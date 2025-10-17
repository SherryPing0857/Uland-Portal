<script setup>
defineProps({
  title: String,
  text: String,
  img: String
})
</script>

<template>
  <div class="card h-100 shadow-sm">
    <img :src="img" class="card-img-top" :alt="title" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">{{ text }}</p>
      <a href="#" class="btn btn-primary">瞭解更多</a>
    </div>
  </div>
</template>
