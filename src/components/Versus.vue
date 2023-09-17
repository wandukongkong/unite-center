<template>
  <div class="d-flex flex-column position-relative">
    <div class="d-flex my-2">
      <PokemonCard
        v-for="aPlayer in aTeams"
        :key="aPlayer"
        :player="aPlayer"
        :isOpen=props.isAllOpen
      ></PokemonCard>
    </div>
    <!-- <div
      class="d-flex flex-fill w-100 h-100 justify-content-center align-items-center position-absolute"
      v-if="_.size(props.players) > 9"
    >
      <img
        class="z-3"
        src="../assets/img/22591751.png"
        height="100"
      >
    </div> -->
    <div
      class="d-flex my-2"
      v-if="_.size(bTeams) > 0"
    >
      <PokemonCard
        v-for="aPlayer in bTeams"
        :key="aPlayer"
        :player="aPlayer"
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
<style></style>
  