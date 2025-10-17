<script setup>
const historyEvents = [
  { year: "2018", title: "公司成立", description: "優能家正式創立，啟動智慧社區服務的願景。" },
  { year: "2019", title: "首個合作社區", description: "與台北地區首個智慧社區合作，導入智能管理系統。" },
  { year: "2020", title: "服務升級", description: "推出行動服務平台，讓社區住戶更便捷地享受服務。" },
  { year: "2022", title: "全國擴展", description: "業務拓展至全台主要城市，建立合作據點。" },
  { year: "2024", title: "品牌再造", description: "優能家全新企業識別系統上線，強化品牌形象。" },
  { year: "2025", title: "邁向國際", description: "啟動海外市場計畫，持續推動智慧生活的理念。" },
]
</script>

<template>
  <div class="container py-5">
    <h2 class="text-center fw-bold mb-5">公司歷程</h2>

    <div class="timeline position-relative">
      <div
        v-for="(event, index) in historyEvents"
        :key="event.year"
        class="timeline-item position-relative mb-5"
        :class="{ 'timeline-item-left': index % 2 === 0, 'timeline-item-right': index % 2 !== 0 }"
      >
        <div class="timeline-content bg-light rounded shadow-sm p-4">
          <h4 class="text-primary mb-2">{{ event.year }}</h4>
          <h5 class="fw-bold mb-2">{{ event.title }}</h5>
          <p class="mb-0 text-muted">{{ event.description }}</p>
        </div>
      </div>

      <!-- 中線 -->
      <div class="timeline-line position-absolute top-0 start-50 translate-middle-x"></div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  padding: 2rem 0;
}
.timeline-line {
  width: 4px;
  background-color: #0d6efd;
  height: 100%;
  z-index: 0;
}

.timeline-item {
  width: 50%;
  position: relative;
}

.timeline-item-left {
  padding-right: 3rem;
  text-align: right;
}

.timeline-item-right {
  margin-left: 50%;
  padding-left: 3rem;
  text-align: left;
}

.timeline-content {
  position: relative;
  z-index: 1;
  border-left: 4px solid #0d6efd;
  background-color: #fff;
}

.timeline-item-left .timeline-content {
  border-left: none;
  border-right: 4px solid #0d6efd;
}

/* 時間點 */
.timeline-item::before {
  content: "";
  position: absolute;
  top: 20px;
  width: 18px;
  height: 18px;
  background-color: #0d6efd;
  border-radius: 50%;
  z-index: 2;
}
.timeline-item-left::before {
  right: -9px;
}
.timeline-item-right::before {
  left: -9px;
}

/* 手機版 — 改為直式 */
@media (max-width: 767.98px) {
  .timeline-line {
    left: 8px;
    transform: none;
  }

  .timeline-item {
    width: 100%;
    margin-left: 0 !important;
    padding-left: 2rem !important;
    text-align: left;
  }

  .timeline-item::before {
    left: 0;
  }

  .timeline-content {
    border-left: 4px solid #0d6efd !important;
    border-right: none !important;
  }
}
</style>
