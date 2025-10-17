<script setup>
import { ref } from "vue";

// 表單資料陣列
const forms = ref([
  { id: 1, name: "請假申請表", link: "#" },
  { id: 2, name: "報銷單", link: "#" },
  { id: 3, name: "加班申請表", link: "#" },
  { id: 4, name: "設備申請表", link: "#" },
  { id: 5, name: "出差申請表", link: "#" },
]);
</script>

<template>
    <ul class="list-group">
      <li
        v-for="form in forms"
        :key="form.id"
        class="list-group-item d-flex justify-content-between align-items-center form-item"
      >
        {{ form.name }}
        <a :href="form.link" class="btn btn-sm btn-primary">下載</a>
      </li>
    </ul>
</template>

<style scoped>

.form-item:hover {
  background: #dfecffff;  ;
  color: #000;
}

</style>
