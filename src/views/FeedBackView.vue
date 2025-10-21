<template>
  <div>
    <main>
      <div class="container py-4">

        <!-- jumbotron 區塊 -->
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">你的聲音，我們重視</h1>
            <p class="col-md-8 fs-4">
              這裡是專門收集員工想法與建議的區域。我們鼓勵大家分享創意、提出改進方案，並提供真誠的意見，幫助公司和團隊持續進步。
            </p>
          </div>
        </div>

        <!-- 兩個欄位區塊 -->
        <div class="row align-items-md-stretch">
          <!-- 創意發想區 -->
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3 d-flex flex-column">
              <h2>創意發想區</h2>
              <p class="flex-grow-1">
                收集你的創意與建議，不論是流程改進、產品創新或其他想法，都歡迎分享。可匿名或留下姓名與部門，每份回饋都是公司改進的重要參考。
              </p>
              <div class="text-end">
                <a 
                  href="https://example.com/creative" 
                  class="btn btn-outline-light" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  發表創意
                </a>
              </div>
            </div>
          </div>
          <!-- 真心話 / 問題反饋區 -->
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3 d-flex flex-column">
              <h2>真心話 </h2>
              <p class="flex-grow-1">
                提供員工向公司相關單位私下反映工作上遇到的困擾或不當情況，所有回饋僅供相關人員審慎處理，幫助改善工作環境，讓每位員工都能感受到尊重與保障。
              </p>
              <div class="text-end">
                <a 
                  href="https://example.com/feedback" 
                  class="btn btn-outline-secondary" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  提出反饋
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
</script>

<style scoped>
</style>
