<script setup>
import { toRef, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import Vue3TagsInput from 'vue3-tags-input';
import _ from 'lodash';

import { useRandomPickStore } from '@/stores/randomPickStore';
import pokemonList from '@/json/pokemon.json';

const { tags, shuffleMode, shuffleModeColor } = storeToRefs(useRandomPickStore());
const { updateTags, updateShuffleMode, updateShuffleModeColor } = useRandomPickStore();
const players = toRef([...tags.value]);
const aTeamPokemonList = toRef([]);
const bTeamPokemonList = toRef([]);
const isOpenOption = toRef(false);
const goButtonColor = toRef('#fc8829');

const isOnlyPokemon = toRef(false);
const isOnlyUser = toRef(true);

const isAllOpen = toRef(false);

// 맴버수에 따라 팀 결정
function collectPlayers(itmes) {
  updateTags(itmes);

  players.value = [...itmes];
  isAllOpen.value = false;
}

function shufflePlayer() {
  if (!isOnlyPokemon.value) {
    players.value = _.shuffle(players.value);
  }

  if (shuffleMode.value === 'default') {
    aTeamPokemonList.value = _.chain(pokemonList).shuffle().slice(0, 5).value();
    bTeamPokemonList.value = _.chain(pokemonList).shuffle().shuffle().slice(0, 5).value();
  } else if (shuffleMode.value === 'king') {
    aTeamPokemonList.value = [
      ..._.chain(pokemonList)
        .filter(({ color }) => color === '#aced5b')
        .shuffle()
        .slice(0, 1)
        .value(),
      ..._.chain(pokemonList)
        .filter(({ color }) => color === '#fecc51')
        .shuffle()
        .slice(0, 4)
        .value(),
    ];
    bTeamPokemonList.value = [
      ..._.chain(pokemonList)
        .filter(({ color }) => color === '#aced5b')
        .shuffle()
        .shuffle()
        .slice(0, 1)
        .value(),
      ..._.chain(pokemonList)
        .filter(({ color }) => color === '#fecc51')
        .shuffle()
        .shuffle()
        .slice(0, 4)
        .value(),
    ];
  } else {
    aTeamPokemonList.value = _.chain(pokemonList)
      .filter(({ color }) => color === shuffleModeColor.value)
      .shuffle()
      .slice(0, 5)
      .value();
    bTeamPokemonList.value = _.chain(pokemonList)
      .filter(({ color }) => color === shuffleModeColor.value)
      .shuffle()
      .shuffle()
      .slice(0, 5)
      .value();
  }

  isAllOpen.value = true;
}

function changeShuffleMode(mode) {
  switch (mode) {
    case 'default':
      updateShuffleModeColor('#fc8829');
      updateShuffleMode('default');

      break;
    case 'attack':
      updateShuffleModeColor('#f16c38');
      updateShuffleMode('attack');

      break;
    case 'defence':
      updateShuffleModeColor('#aced5b');
      updateShuffleMode('defence');

      break;
    case 'balance':
      updateShuffleModeColor('#ce5fd3');
      updateShuffleMode('balance');

      break;
    case 'speed':
      updateShuffleModeColor('#29a5e3');
      updateShuffleMode('speed');

      break;
    case 'support':
      updateShuffleModeColor('#fecc51');
      updateShuffleMode('support');

      break;
    case 'king':
      updateShuffleModeColor('#fef251');
      updateShuffleMode('king');

      break;

    default:
      break;
  }
}

onMounted(() => {});
</script>

<template>
  <div class="d-flex flex-column h-100">
    <div class="d-flex border border-0 mb-2 justify-content-center align-items-center">
      <div class="me-3 total-area">{{ tags.length }}/10</div>
      <Vue3TagsInput
        limit="10"
        :tags="tags"
        :placeholder="tags.length === 10 ? '' : 'enter some user'"
        class="me-1 border border-dark"
        @on-tags-changed="collectPlayers"
      />
      <button
        class="btn border border-dark text-white custom-button me-1"
        :style="{ 'background-color': shuffleModeColor, 'padding-bottom': '3.5px!important' }"
        :disabled="!(_.size(players) > 9)"
        @click="shufflePlayer"
      >
        GO
      </button>
      <button
        class="btn border border-dark custom-button"
        style="backgroundcolor: #fcad58; padding-bottom: 3.5px !important"
        @click="isOpenOption = !isOpenOption"
      >
        <i class="bi bi-sliders"></i>
      </button>
    </div>
    <Transition name="slide-fade">
      <div
        v-if="isOpenOption"
        class="mt-3 position-absolute option-area w-100 start-0 d-flex justify-content-center flex-column"
      >
        <div>
          <button
            class="btn border border-dark text-white m-1 custom-button"
            style="background-color: #fc8829; width: 100px"
            @click="changeShuffleMode('default')"
          >
            Defailt
          </button>
          <button
            class="btn border border-dark text-white m-1 custom-button"
            style="background-color: #f15438; width: 100px"
            @click="changeShuffleMode('attack')"
          >
            Attack
          </button>
          <button
            class="btn border border-dark text-white m-1 custom-button"
            style="background-color: #aced5b; width: 100px"
            @click="changeShuffleMode('defence')"
          >
            Defence
          </button>
          <button
            class="btn border border-dark text-white m-1 custom-button"
            style="background-color: #ce5fd3; width: 100px"
            @click="changeShuffleMode('balance')"
          >
            Balance
          </button>
          <button
            class="btn border border-dark text-white m-1 custom-button"
            style="background-color: #29a5e3; width: 100px"
            @click="changeShuffleMode('speed')"
          >
            Speed
          </button>
          <button
            class="btn border border-dark text-white m-1 custom-button"
            style="background-color: #fecc51; width: 100px"
            @click="changeShuffleMode('support')"
          >
            Support
          </button>
          <button
            class="btn border border-dark text-dark m-1 custom-button"
            style="background-color: #fef251; width: 100px"
            @click="changeShuffleMode('king')"
          >
            <img class="me-1 mb-1" src="../assets/img/king1.png" width="20" height="17" />King
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <div class="mx-1 my-2">
            <input id="onlyPokemon" v-model="isOnlyPokemon" type="checkbox" class="btn-check" autocomplete="off" />
            <label class="btn btn-outline-primary" for="onlyPokemon">Only Pokemon</label><br />
          </div>
          <!-- <div class="mx-1 my-2">
            <input v-model="isOnlyUser" type="checkbox" class="btn-check" id="onlyUser" autocomplete="off">
            <label class="btn btn-outline-primary" for="onlyUser">Only User</label><br>
          </div> -->
        </div>
      </div>
    </Transition>

    <div v-if="_.size(players) < 11" class="d-flex flex-fill justify-content-center align-items-center versus-area">
      <Versus
        :players="players"
        :a-team-pokemon-list="aTeamPokemonList"
        :b-team-pokemon-list="bTeamPokemonList"
        :is-all-open="isAllOpen"
      />
    </div>
  </div>
</template>

<style lang="css">
.v3ti {
  flex: 1;
}

.v3ti .v3ti-tag {
  background: #fc8829 !important;
  /*border: 1px solid #222222;*/
  /*border-radius: 0;*/
}

.v3ti .v3ti-tag .v3ti-remove-tag {
  color: #000000;
  transition: color 0.3s;
}

.v3ti .v3ti-tag .v3ti-remove-tag:hover {
  color: #ffffff;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.total-area {
  min-width: 50px;
  color: #b6611c !important;
}

.versus-area {
  /* padding-top: 250px; */
  align-items: center;
}

.option-area {
  z-index: 900;
  left: 35%;
  top: 80px;
}

.custom-button {
  transition: transform 0.1s !important;
}

.custom-button:hover {
  transform: scale(1.05);
}

.custom-button:active {
  transform: scale(0.98);
}

.custom-option-button {
  transition: opacity 0.1s;
}

.custom-option-button {
  transition: opacity 0.1s;
}

@media screen and (max-width: 576px) {
  .total-area {
    margin-left: 5px;
    color: #b6611c !important;
  }

  .versus-area {
    align-items: start !important;
  }

  .option-area {
    z-index: 999;
    left: 0;
    top: 100px;
  }
}
</style>
