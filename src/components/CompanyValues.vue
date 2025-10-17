<script setup></script>

<template>
  <div class="container py-5">
    <div class="row g-4 align-items-stretch">
      <!-- 左側圖片 -->
      <div class="col-md-6">
        <div class="image-box">
          <img
            src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg"
            alt="公司理念圖"
            class="w-100 h-100 rounded shadow-sm"
          />
        </div>
      </div>

      <!-- 右側文字 -->
      <div class="col-md-6">
        <div class="text-box">
          <h2 class="mb-4">經營理念</h2>
          <ol class="list-unstyled">
            <li class="mb-3 p-3 rounded bg-light shadow-sm">
              <strong class="d-block mb-2">尊重與感恩</strong>
              <p>我們以家為核心，尊重與感恩是基本價值。正面協作，讓每個人發揮潛力。</p>
            </li>
            <li class="mb-3 p-3 rounded bg-light shadow-sm">
              <strong class="d-block mb-2">真誠</strong>
              <p>真誠的人值得信賴。我們鼓勵說真話、勇於挑戰、勇於認錯。</p>
            </li>
            <li class="mb-3 p-3 rounded bg-light shadow-sm">
              <strong class="d-block mb-2">服務品質</strong>
              <p>追求高品質服務，提升自我貢獻和客戶滿意度，創造雙贏成果。</p>
            </li>
            <li class="mb-3 p-3 rounded bg-light shadow-sm">
              <strong class="d-block mb-2">照顧與保護</strong>
              <p>重視同仁與辦公環境，維護健康快樂的工作氛圍。</p>
            </li>
            <li class="mb-3 p-3 rounded bg-light shadow-sm">
              <strong class="d-block mb-2">承諾</strong>
              <p>公司承諾照顧所有利害關係人，追求多贏，共享共榮。</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-box,
.text-box {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.image-box img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
}

h2 {
  font-weight: 600;
}

p {
  margin: 0;
  color: #495057;
  line-height: 1.6;
}

.bg-light {
  background-color: #f8f9fa !important;
}

.shadow-sm {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
}

/* 桌機：圖文等高 */
@media (min-width: 768px) {
  .image-box,
  .text-box {
    max-height: 600px;
  }
}

/* 手機：圖片縮小為 300px */
@media (max-width: 767.98px) {
  .image-box {
    height: 300px;
  }
  .text-box {
    height: auto;
    max-height: none;
  }
}
</style>
