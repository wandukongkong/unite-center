<script setup>
import { toRef } from 'vue';

const searchInput = toRef('');
const circleList = toRef([
  {
    circleName: 'Team Gaming Dymax',
    bannerImageUrl: require('@/assets/img/banner/gdx.jpg'),
    bannerMaker: 'GDX_보돌',
    openTalkUrl: 'https://open.kakao.com/o/gGYeiaJf',
  },
]);

const openWindow = (url) => {
  window.open(url, '_blank');
};
</script>
<template>
  <div class="d-flex flex-column h-100">
    <!-- 검색 영역 -->
    <div class="d-flex border border-0 mb-2 justify-content-center align-items-center">
      <input
        v-model="searchInput"
        placeholder="Search Circle"
        class="form-control py-1 me-1 border border-dark shadow-none"
      />
      <button class="btn border py-1 border-dark text-white custom-button me-1">검색</button>
    </div>
    <!-- 도움말 영역 -->
    <div class="d-flex justify-content-end">
      <button class="btn" @click="openWindow('https://open.kakao.com/o/slG8wkWf')">
        <i class="bi bi-chat small"></i> 등록 문의
      </button>
    </div>
    <!-- 내용 영역 -->
    <div class="d-flex align-content-start flex-wrap">
      <TransitionGroup name="fade-back">
        <div
          v-for="({ circleName, bannerImageUrl, openTalkUrl, bannerMaker }, index) in circleList.filter(
            ({ circleName }) => circleName.toLowerCase().includes(searchInput.toLowerCase())
          )"
          :key="index"
          class="d-flex flex-column me-3 mb-4"
          @click="openWindow(openTalkUrl)"
        >
          <h4 class="d-flex text-dark">{{ circleName }}</h4>
          <img :src="bannerImageUrl" class="d-flex circle-banner border border-1 border-dark shadow rounded" />
          <div class="d-flex justify-content-end" style="opacity: 0.5">Created by {{ bannerMaker }}</div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>
<style>
.custom-button {
  width: 70px;
  background-color: #fc8829;
}

.circle-banner {
  width: 700px;
  height: 150px;
  cursor: pointer;
  /* min-width: 400px; */
}
</style>
