<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 表單資料陣列
const forms = ref([
  { id: 1, name: "請假申請表", link: "/files/leave.pdf", type: "download" },
  { id: 2, name: "報銷單", link: "/files/reimbursement.pdf", type: "download" },
  { id: 3, name: "加班申請表", link: "/form/3", type: "view" },
  { id: 4, name: "設備申請表", link: "/form/4", type: "view" },
  { id: 5, name: "出差申請表", link: "/files/travel.pdf", type: "download" },
]);

const handleClick = (form) => {
  if (form.type === "view") {
    router.push({ name: "FormReadOnly", params: { id: form.id } });
  } else if (form.type === "download") {
    const link = document.createElement("a");
    link.href = form.link;      // 檔案路徑
    link.download = form.name;  // 下載檔名
    link.click();
  }
};
</script>

<template>
  <ul class="list-group">
    <li
      v-for="form in forms"
      :key="form.id"
      class="list-group-item d-flex justify-content-between align-items-center form-item"
    >
      {{ form.name }}
      <button
        class="btn"
        :class="form.type === 'view' ? 'btn-success' : 'btn-primary'"
        @click="handleClick(form)"
      >
        {{ form.type === 'view' ? '檢視' : '下載' }}
      </button>
    </li>
  </ul>
</template>

<style scoped>
.form-item:hover {
  background: #f1f1f1;
  color: #000;
}

.btn-primary {
  background-color: #0d6efd;
  color: white;
}

.btn-primary:hover {
  background-color: #0b5ed7;
}

.btn-success {
  background-color: #198754;
  color: white;
}

.btn-success:hover {
  background-color: #157347;
}
</style>
