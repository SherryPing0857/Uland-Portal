<script setup>
import { ref } from "vue";

// 假資料
const documents = ref([
  { id: 1, name: "公司年度報告", link: "/files/annual_report.pdf", type: "download" },
  { id: 2, name: "會議紀錄", link: "/files/meeting_minutes.pdf", type: "download" },
  { id: 3, name: "政策公告", link: "/files/policy_notice.pdf", type: "download" },
]);

// 點擊下載
const handleDownload = (doc) => {
  const link = document.createElement("a");
  link.href = doc.link;
  link.download = doc.name;
  link.click();
};
</script>

<template>
  <div class="document-list mt-3">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>文件名稱</th>
          <th>類型</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documents" :key="doc.id">
          <td>{{ doc.id }}</td>
          <td>{{ doc.name }}</td>
          <td>{{ doc.type }}</td>
          <td>
            <button class="btn btn-primary btn-sm" @click="handleDownload(doc)">
              下載
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="documents.length === 0" class="text-center p-3">
      沒有公文
    </div>
  </div>
</template>

<style scoped>
.document-list table {
  width: 100%;
  border-collapse: collapse;
}

.document-list th,
.document-list td {
  padding: 0.5rem;
  text-align: left;
}

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
}
</style>
