<script setup>
import { useRouter } from "vue-router";
import FilterBar from "./FilterBar.vue";

const props = defineProps({
  items: Array,
  startDate: String,
  endDate: String,
  status: String,
});

const emits = defineEmits(["update:filter"]);

const router = useRouter();

const handleView = (app) => router.push({ name: "ApplicationDetail", params: { id: app.id } });
const handleUpload = () => router.push({ name: "ApplicationUpload" });

const updateFilter = (val) => emits("update:filter", val);
</script>

<template>
  <FilterBar
    :startDate="startDate"
    :endDate="endDate"
    :status="status"
    @update:startDate="updateFilter({ startDate: $event })"
    @update:endDate="updateFilter({ endDate: $event })"
    @update:status="updateFilter({ status: $event })"
    @upload="handleUpload"
  />

  <div class="table-responsive" v-if="items && items.length">
    <table class="table table-striped table-hover align-middle">
      <thead class="table-primary">
        <tr>
          <th>ID</th>
          <th>申請名稱</th>
          <th>日期</th>
          <th>狀態</th>
          <th>上傳人</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="app in items" :key="app.id">
          <td>{{ app.id }}</td>
          <td>{{ app.name }}</td>
          <td>{{ app.date }}</td>
          <td>{{ app.status }}</td>
          <td>{{ app.uploadedBy }}</td>
          <td>
            <button class="btn btn-success btn-sm" @click="handleView(app)">檢視</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <p v-else class="text-center text-muted py-3">沒有符合條件的申請單</p>
</template>
