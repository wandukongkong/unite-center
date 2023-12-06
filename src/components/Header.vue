<script setup>
import { toRef } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isOpenMenu = toRef(false);
</script>
<template>
  <div class="position-absolute w-100 start-0 top-0">
    <div class="d-flex bg-green">
      <button class="btn border-0 w-100px" @click="isOpenMenu = !isOpenMenu">
        <i class="bi bi-list"></i>
      </button>
    </div>
  </div>
  <Transition name="slide-menu-fade">
    <div v-if="isOpenMenu" class="position-absolute top-0 start-0 side-bar">
      <div class="d-flex justify-content-end mb-5">
        <button class="btn border-0 shadow-none" @click="isOpenMenu = !isOpenMenu">x</button>
      </div>
      <div class="d-flex flex-column">
        <button
          class="btn border-0 shadow-none d-flex align-items-center mb-2 py-0"
          @click="
            () => {
              router.push('/');
              isOpenMenu = false;
            }
          "
        >
          <img src="../assets/img/icon/pokestop.png" width="25" />
          <span class="mx-2 mt-1 menu-font">Home</span>
        </button>
        <button
          class="btn border-0 shadow-none d-flex align-items-center mb-2 py-0"
          @click="
            () => {
              router.push('/randomPick');
              isOpenMenu = false;
            }
          "
        >
          <img src="../assets/img/icon/pokeball.png" width="25" />
          <span class="mx-2 mt-1 menu-font">Random Pick</span>
        </button>
        <button
          class="btn border-0 shadow-none d-flex align-items-center mb-2 py-0"
          @click="
            () => {
              router.push('/circle');
              isOpenMenu = false;
            }
          "
        >
          <img src="../assets/img/icon/pokemoncircle.png" width="25" />
          <span class="mx-2 mt-1 menu-font">Unite Circle</span>
        </button>
      </div>
      <div class="position-absolute bottom-0 center">
        <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons"
          >Pokemon icons created by Roundicons Freebies - Flaticon</a
        >
      </div>
    </div>
  </Transition>
  <Transition name="fade-back">
    <div v-if="isOpenMenu" class="side-bar-back position-absolute top-0 start-0"></div>
  </Transition>
</template>
<style>
.menu-font {
  font-size: 20pt;
}

.side-bar {
  width: 250px;
  height: 100%;
  z-index: 999;
  background-color: #fec385;
  box-shadow: 1px 1px 16px 0px #00000042;
}

.side-bar-back {
  width: 100%;
  height: 100%;
  background-color: rgb(63, 63, 63);
  z-index: 998;
  opacity: 0.5;
}
</style>
