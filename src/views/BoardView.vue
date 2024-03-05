<script setup>
import { toRef, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useElementBounding } from '@vueuse/core';
import { Vue3Lottie } from 'vue3-lottie';
import { useDrop } from 'vue3-dnd';

import { useBoardStore } from '@/stores/boardStore';
import pokemonList from '@/json/pokemon.json';
import trashCan from '../assets/lottie/trashcan.json';
import PokemonDragCard from '@/components/PokemonDragCard.vue';

const { selectedPokemonList } = storeToRefs(useBoardStore());
const trashRef = toRef();
const isOpenPokemonListTooltip = toRef(false);
const isClickedCard = toRef(false);
const { x: positionX, y: positionY } = useElementBounding(trashRef);
const cardPositionX = toRef(0);
const cardPositionY = toRef(0);
const trashCanRef = toRef();
const isOverTrashZone = computed(() => {
  return (
    cardPositionX.value + 50 > positionX.value &&
    cardPositionX.value < positionX.value + 50 &&
    cardPositionY.value + 50 > positionY.value &&
    cardPositionY.value < positionY.value + 50
  );
});
const pokemonCardList = computed(() => {
  return pokemonList.filter(({ name }) => !selectedPokemonList.value.map(({ name }) => name).includes(name));
});

// drop
const [, drop] = useDrop(() => ({
  accept: 'box',
  drop(item, monitor) {
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    // TODO: 해당 카드 갱신
    selectedPokemonList.value = selectedPokemonList.value.map((selectedPokemonInfo) => {
      if (selectedPokemonInfo?.name === item.pokemonName) {
        selectedPokemonInfo.position.left = left;
        selectedPokemonInfo.position.top = top;
      }

      return selectedPokemonInfo;
    });
  },
}));

const addPokemonCard = (pokemonInfo) => {
  pokemonInfo.position = {};

  selectedPokemonList.value.push(pokemonInfo);

  pokemonCardList.value = pokemonList.filter(
    ({ name }) => !selectedPokemonList.value.map(({ name }) => name).includes(name)
  );
};

const deletePokemonCard = (pokemonName) => {
  if (isOverTrashZone.value && !isClickedCard.value) {
    selectedPokemonList.value = [...selectedPokemonList.value.filter(({ name }) => name !== pokemonName)];
  }
};

const clickPokemonCard = (pokemonName, x, y) => {
  isClickedCard.value = false;
  cardPositionX.value = x;
  cardPositionY.value = y;
  selectedPokemonList.value = selectedPokemonList.value.map((selectedPokemonInfo) => {
    if (selectedPokemonInfo.name.toLowerCase() === pokemonName.toLowerCase()) {
      selectedPokemonInfo.position = {
        x: x,
        y: y,
      };
    }
    return selectedPokemonInfo;
  });
};

const clickPokemonButton = () => {
  isOpenPokemonListTooltip.value = !isOpenPokemonListTooltip.value;
};
</script>
<template>
  <div class="d-flex flex-fill justify-content-center align-items-center w-100 h-100 position-relative">
    <!-- <img src="../assets/img/pokemon/teia.png" class="h-75" style="object-fit: contain" /> -->
    <div class="position-absolute d-flex flex-fill w-100 h-100 opacity-1">
      <!-- <img v-for="{ image } in pokemonList" :src="image" height="30" /> -->
      <!-- 검색 영역 -->
      <div class="d-flex justify-content-start align-items-start bg-warning w-100 z-1" style="height: 0">
        <!-- 포켓몬 추가  -->
        <div class="position-relative d-flex flex-column justify-content-center align-items-center w-100px">
          <button
            class="btn shadow-none border-0 custom-buttn"
            title="Select pokemon!"
            @click="() => clickPokemonButton()"
          >
            <div class="position-relative">
              <img src="@/assets/img/icon/avatar.png" class="" height="50" />
              <div
                class="position-absolute text-light"
                style="font-size: 30pt; -webkit-text-stroke: 0.1px black; top: -13px"
              >
                <strong>+</strong>
              </div>
            </div>
          </button>
          <transition>
            <div
              v-if="isOpenPokemonListTooltip"
              class="bg-white rounded-1 z-1 position-absolute overflow-y-auto"
              style="top: 65px; height: 500px"
            >
              <div
                v-for="(pokemonCardInfo, index) in pokemonCardList"
                :key="index"
                class="pokeomn-name-row px-3"
                @click="
                  () => {
                    isOpenPokemonListTooltip = false;
                    addPokemonCard(pokemonCardInfo);
                  }
                "
              >
                {{ pokemonCardInfo.name }}
              </div>
            </div>
          </transition>
        </div>
        <div>
          <button class="btn"></button>
        </div>
      </div>
      <!-- drage 영역 -->
      <div :ref="drop" class="w-100 h-100 position-absolute">
        <div class="position-relative" v-for="{ name, color, image, position } in selectedPokemonList" :key="name">
          <PokemonDragCard :pokemonName="name" :left="position?.left ?? 50" :top="position?.top ?? 50" />
        </div>
      </div>
      <!-- delete 관련 영역 -->
      <div class="d-flex justify-content-end position-absolute bottom-0 w-100">
        <button @click="() => trashCanRef.playSegments([0, 38], true)">click</button>
        <div
          class="border border-dark d-flex justify-content-center align-items-center"
          ref="trashRef"
          style="width: 50px; height: 50px; z-index: 0"
        >
          <!-- {{ isOverTrashZone }}/ {{ !isClickedCard }} {{}} -->
          <Vue3Lottie ref="trashCanRef" :animationData="trashCan" :autoPlay="false" :height="100" :width="100" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.pokemon-card {
  box-shadow: 0px 4px 4px 1px #252525;
  cursor: pointer;
  transition: transform 0.1s;
}
.pokemon-card:active {
  transform: scale(0.9);
}
.custom-buttn {
  transition: transform 0.1s !important;
}
.custom-buttn:hover {
  transform: scale(1.1) !important;
}
.custom-buttn:active {
  transform: scale(0.9) !important;
}
.pokeomn-name-row {
  cursor: pointer;
}
.pokeomn-name-row:hover {
  background-color: antiquewhite;
}
</style>
