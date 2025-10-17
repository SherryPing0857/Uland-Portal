<script setup>
import { ref } from "vue";
import Card from "../components/Card.vue";
import SwitchButton from "../components/SwitchButton.vue";

const trainings = ref([
  {
    id: 1,
    title: "新進人員訓練",
    text: "了解公司文化、制度與作業流程。",
    img: "https://img.freepik.com/premium-photo/wooden-cubes-with-word-example_284815-518.jpg",
  },
  {
    id: 2,
    title: "系統操作教學",
    text: "熟悉內部 ERP / CRM 系統操作。",
    img: "https://img.freepik.com/premium-photo/wooden-cubes-with-word-example_284815-518.jpg",
  },
  {
    id: 3,
    title: "產品知識課程",
    text: "掌握產品功能、服務流程與FAQ。",
    img: "https://img.freepik.com/premium-photo/wooden-cubes-with-word-example_284815-518.jpg",
  },
  {
    id: 4,
    title: "顧客服務與溝通技巧",
    text: "學習有效的客戶溝通方式與問題處理流程，提升服務品質與滿意度。",
    img: "https://img.freepik.com/premium-photo/wooden-cubes-with-word-example_284815-518.jpg",
  },
]);
</script>

<template>
  <div class="container py-4">
    <h1>教育訓練</h1>
    <SwitchButton/>
    <div class="row g-4">
      <div
        class="col-12 col-sm-6 col-lg-3"
        v-for="item in trainings"
        :key="item.id"
      >
        <Card :title="item.title" :text="item.text" :img="item.img" />
      </div>
    </div>
  </div>
</template>
