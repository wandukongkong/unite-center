<template>
  <div class="">
    <div class="d-flex border border-0 mb-2 align-items-center justify-content-center">
      <div class="me-3 total-area">
        {{ tags.length }}/10
      </div>
      <vue3-tags-input
        limit="10"
        :tags="tags"
        placeholder="enter some user"
        @on-tags-changed="collectPlayers"
        class="me-1 border border-dark"
      />
      <button
        class="btn border border-dark go-button"
        :disabled="!(_.size(players) > 9)"
        @click="shufflePlayer"
      >GO</button>
    </div>
    <Transition name="slide-fade">
      <div
        v-if="isOpenOption"
        class="mt-3"
      >
        hi
      </div>
    </Transition>
    <button
      class="btn border-0"
      @click="isOpenOption = !isOpenOption"
    >
      <i
        v-if="isOpenOption"
        class="bi bi-caret-up-fill"
      ></i>
      <i
        v-else
        class="bi bi-caret-down-fill"
      ></i>
    </button>
    <div
      v-if="_.size(players) < 11"
      class="d-flex h-100 justify-content-center versus-area"
    >
      <Versus
        :players="players"
        :aTeamPokemonList="aTeamPokemonList"
        :bTeamPokemonList="bTeamPokemonList"
        :isAllOpen="isAllOpen"
      />
    </div>
  </div>
</template>
  
<script setup>
import { toRef, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import Vue3TagsInput from 'vue3-tags-input';
import _ from 'lodash';

import { useRandomPickStore } from '../stores/randomPickStore';
import pokemonList from '../../pokemon.json';

const { tags } = storeToRefs(useRandomPickStore());
const { updateTags } = useRandomPickStore();
const players = toRef([...tags.value]);
const aTeamPokemonList = toRef([]);
const bTeamPokemonList = toRef([]);
const isOpenOption = toRef(false);

const isAllOpen = toRef(false);

// TODO: 맴버수에 따라 팀 결정
function collectPlayers(itmes) {
	updateTags(itmes);

	players.value = [...itmes];
	isAllOpen.value = false;
}

// TODO:
function shufflePlayer() {
	players.value = _.shuffle(players.value);

	aTeamPokemonList.value = _.chain(pokemonList).shuffle().slice(0, 5).value();
	bTeamPokemonList.value = _.chain(pokemonList).shuffle().slice(0, 5).value();

	isAllOpen.value = true;
}

onMounted(() => {});
</script>

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

.go-button {
	color: white !important;
	background-color: #fc8829 !important;
	padding-bottom: 3.5px !important;
}

.total-area {
	min-width: 50px;
	color: #b6611c !important;
}

.versus-area {
	padding-top: 250px;
	align-items: center;
}

@media screen and (max-width: 576px) {
	.total-area {
		margin-left: 5px;
		color: #b6611c !important;
	}

	.versus-area {
		padding-top: 150px;
		align-items: start !important;
	}
}
</style>
