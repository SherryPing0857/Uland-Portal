<script setup>
import { ref } from "vue"
import TabSwitcher from "../components/TabSwitcher.vue"
import CompanyValues from "../components/CompanyValues.vue"
import CompanyHistory from "../components/CompanyHistory.vue"

const tabs = ["經營理念", "公司歷史"]
const activeTab = ref(tabs[0]) 
</script>

<template>
  <div class="container py-5">
  <h1>公司介紹</h1>
    <div class="text-start mb-4">
      <TabSwitcher
        :tabs="tabs"
        v-model:activeTab="activeTab"
      />
    </div>

    <!-- 內容切換區 -->
    <transition name="fade" mode="out-in">
      <div :key="activeTab">
        <CompanyValues v-if="activeTab === '經營理念'" />
        <CompanyHistory v-else />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
