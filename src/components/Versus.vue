<script setup>
import _ from 'lodash';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRandomPickStore } from '../stores/randomPickStore';

const { shuffleMode } = storeToRefs(useRandomPickStore());

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
<template>
  <div class="d-flex flex-column position-relative">
    <div class="d-flex my-2 team-area position-relative">
      <Transition>
        <img
          v-if="shuffleMode === 'king' && isAllOpen"
          class="position-absolute z-1 king-image"
          src="../assets/img/king1.png"
        />
      </Transition>
      <transition-group>
        <PokemonCard
          v-for="(aPlayer, index) in aTeams"
          :key="index"
          :player="aPlayer"
          :pokemon-info="aTeamPokemonList[index]"
          :is-open="props.isAllOpen"
        ></PokemonCard>
      </transition-group>
    </div>
    <Transition>
      <div
        v-if="_.size(props.players) > 9"
        class="d-flex flex-fill w-100 h-100 justify-content-center align-items-center position-absolute z-1"
      >
        <!-- <img class="z-3" src="../assets/img/22591751.png" height="100"> -->
        <span class="versus-text">VS</span>
      </div>
    </Transition>
    <div v-if="_.size(bTeams) > 0" class="d-flex my-2 team-area position-relative">
      <Transition>
        <img
          v-if="shuffleMode === 'king' && isAllOpen"
          class="position-absolute z-1 king-image"
          src="../assets/img/king1.png"
        />
      </Transition>
      <transition-group>
        <PokemonCard
          v-for="(bPlayer, index) in bTeams"
          :key="index"
          :player="bPlayer"
          :pokemon-info="bTeamPokemonList[index]"
          :is-open="props.isAllOpen"
        ></PokemonCard>
      </transition-group>
    </div>
  </div>
</template>
<style>
.versus-text {
  margin-top: 13px;
  font-size: 50pt;
  background: -webkit-linear-gradient(#fc8829, #7620fa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: yellow;
}

.king-image {
  width: 50px;
  height: 40px;
  left: 95px;
  top: -10px;
}

@media screen and (max-width: 576px) {
  .team-area {
    margin: 0 !important;
  }

  .versus-text {
    margin-bottom: 33px;
    font-size: 30pt;
    background: -webkit-linear-gradient(#fc8829, #7620fa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: yellow;
  }

  .king-image {
    width: 30px;
    height: 23px;
    left: 25px;
    top: -10px;
  }
}
</style>
