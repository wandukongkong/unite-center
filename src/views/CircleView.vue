<script setup>
import { toRef } from 'vue';

const circleBannerList = toRef([
  {
    circleName: 'Game Dymax',
    bannerImageUrl: '',
  },
]);
</script>
<template>
  <div class="d-flex flex-column h-100">
    <!-- 검색 영역 -->
    <div class="d-flex border border-0 mb-2 justify-content-center align-items-center">
      <input class="form-control py-1 me-1 border border-dark shadow-none" />
      <button class="btn border py-1 border-dark text-white custom-button me-1">검색</button>
    </div>
    <!-- 내용 영역 -->
    <div class="d-flex align-content-start flex-wrap">
      <div v-for="({ circleName }, index) in circleBannerList" :key="index" class="d-flex flex-column me-3 mb-4">
        <span class="d-flex">{{ circleName }}</span>
        <div class="d-flex border border-dark circle-banner rounded"></div>
        <div class="d-flex justify-content-end">
          <!-- <span>by 완두콩콩</span> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-button {
  width: 70px;
  background-color: #fc8829;
}

.circle-banner {
  width: 500px;
  height: 100px;
  /* min-width: 400px; */
}
</style>
