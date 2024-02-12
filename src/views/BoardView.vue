<script setup>
import { toRef, computed } from 'vue';
import { storeToRefs } from 'pinia';
import { UseDraggable } from '@vueuse/components';

import { useBoardStore } from '@/stores/boardStore';
import pokemonList from '@/json/pokemon.json';

const { selectedPokemonList } = storeToRefs(useBoardStore());
const isOpenPokemonListTooltip = toRef(false);
const pokemonCardList = computed(() => {
  return pokemonList.filter(({ name }) => !selectedPokemonList.value.map(({ name }) => name).includes(name));
});

const addPokemonCard = (pokemonInfo) => {
  pokemonInfo.position = {};

  selectedPokemonList.value.push(pokemonInfo);

  pokemonCardList.value = pokemonList.filter(
    ({ name }) => !selectedPokemonList.value.map(({ name }) => name).includes(name)
  );
};

const deletePokemonCard = (pokemonName) => {
  selectedPokemonList.value = [...selectedPokemonList.value.filter(({ name }) => name !== pokemonName)];
};

const clickPokemonCard = (pokemonName, x, y) => {
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
    <img src="../assets/img/pokemon/teia.png" class="h-75" style="object-fit: contain" />
    <div class="position-absolute d-flex flex-fill w-100 h-100 opacity-1">
      <!-- <img v-for="{ image } in pokemonList" :src="image" height="30" /> -->
      <!-- 검색 영역 -->
      <div class="d-flex justify-content-start align-items-start bg-warning w-100" style="height: 0">
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
      <div class="">
        <div v-for="{ name, image, color, position } in selectedPokemonList" :key="pokemonName">
          <UseDraggable
            class="position-fixed"
            v-slot="{ x, y }"
            :initial-value="{ x: position?.x ?? 100, y: position?.y ?? 50 }"
          >
            <div
              class="pokemon-card border border-dark rounded position-relative"
              @mouseup="() => clickPokemonCard(name, x, y)"
            >
              <img class="pe-none rounded" :src="image" width="45" height="50" :style="{ 'background-color': color }" />
              <div class="position-absolute" style="top: -12px; right: -10px">
                <button
                  class="btn bg-dark text-white rounded-5 p-0 align-middle text-center"
                  style="width: 19px; height: 19px; font-size: 12px"
                  @click="deletePokemonCard(name)"
                >
                  x
                </button>
              </div>
            </div>
          </UseDraggable>
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
