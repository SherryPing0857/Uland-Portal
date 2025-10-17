<script setup>
import { ref } from "vue";

// FAQ 資料陣列
const faqs = ref([
  {
    id: 1,
    title: "Accordion Item #1",
    content:
      "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item’s accordion body."
  },
  {
    id: 2,
    title: "Accordion Item #2",
    content:
      "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content."
  },
  {
    id: 3,
    title: "Accordion Item #3",
    content:
      "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content, but just filling up the space."
  }
]);
</script>

<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <div
      class="accordion-item"
      v-for="faq in faqs"
      :key="faq.id"
    >
      <h2 class="accordion-header" :id="'heading' + faq.id">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + faq.id"
          aria-expanded="false"
          :aria-controls="'collapse' + faq.id"
        >
          {{ faq.title }}
        </button>
      </h2>
      <div
        :id="'collapse' + faq.id"
        class="accordion-collapse collapse"
        :aria-labelledby="'heading' + faq.id"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          {{ faq.content }}
        </div>
      </div>
    </div>
  </div>
</template>
