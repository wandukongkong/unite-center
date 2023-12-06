<script setup>
import { toRef, watch } from 'vue';

const searchInput = toRef('');
const circleList = toRef([
  {
    circleName: 'Game Dymax',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax1',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax2',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax3',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax4',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax5',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax6',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax7',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax8',
    bannerImageUrl: '',
  },
  {
    circleName: 'Game Dymax9',
    bannerImageUrl: '',
  },
]);
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
    <!-- 내용 영역 -->
    <div class="d-flex align-content-start flex-wrap">
      <TransitionGroup name="fade-back">
        <div
          v-for="({ circleName }, index) in circleList.filter(({ circleName }) =>
            circleName.toLowerCase().includes(searchInput.toLowerCase())
          )"
          :key="index"
          class="d-flex flex-column me-3 mb-4"
        >
          <span class="d-flex">{{ circleName }}</span>
          <div class="d-flex border border-dark circle-banner rounded"></div>
          <div class="d-flex justify-content-end">
            <span>Banner created by 완두콩콩</span>
          </div>
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
  /* min-width: 400px; */
}
</style>
