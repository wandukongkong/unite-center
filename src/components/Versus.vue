<template>
  <div class="d-flex flex-column position-relative">
    <div class="d-flex my-2 team-area">
      <PokemonCard
        v-for="(aPlayer, index) in aTeams"
        :key="index"
        :player="aPlayer"
        :pokemonInfo="aTeamPokemonList[index]"
        :isOpen=props.isAllOpen
      ></PokemonCard>
    </div>
    <!-- <Transition>
      <div
        class="d-flex flex-fill w-100 h-100 justify-content-center align-items-center position-absolute"
        v-if="_.size(props.players) > 9"
      >
        <img
          class="z-3"
          src="../assets/img/22591751.png"
          height="100"
        >
      </div>
    </Transition> -->
    <div
      class="d-flex my-2 team-area"
      v-if="_.size(bTeams) > 0"
    >
      <PokemonCard
        v-for="(bPlayer, index) in bTeams"
        :key="index"
        :player="bPlayer"
        :pokemonInfo="bTeamPokemonList[index]"
        :isOpen=props.isAllOpen
      ></PokemonCard>
    </div>
  </div>
</template>
<script setup>
import _ from 'lodash';
import { computed } from 'vue';

const props = defineProps({
	players: {
		type: Array,
		default: () => {
			return [];
		},
	},
	aTeamPokemonList: {
		type: Array,
		default: () => {
			return [];
		},
	},
	bTeamPokemonList: {
		type: Array,
		default: () => {
			return [];
		},
	},
	isAllOpen: {
		type: Boolean,
		default: false,
	},
});

const aTeams = computed(() => {
	return _.chain(props.players).chunk(5).nth(0).value();
});
const bTeams = computed(() => {
	return _.chain(props.players).chunk(5).nth(1).value();
});
</script> 
<style>
@media screen and (max-width: 576px) {
	.team-area {
		margin: 0 !important;
	}
}
</style>
  