<template>
  <vue-flip
    v-model="props.isOpen"
    :active-click="false"
    width="200px"
    height="300px"
    class="m-1"
  >
    <template #front>
      <div class="d-flex justify-content-center align-items-center pokemon-card-front rounded-2 p-1">
        <img
          class="w-50"
          src="../assets/img/pokemon/uniteLogo.png"
        />
        <img
          class="pokemon-card-border-front p-2 "
          src="../assets/img/pokemon/cardBorder.png"
        />
      </div>
    </template>
    <template #back>
      <div
        class="d-flex flex-column justify-content-center align-items-center pokemon-card-back pokemon-card-border-back rounded-2"
        style="background-color: rgb(34, 34, 34);"
      >
        <div class="d-flex flex-grow-1">
          <img
            class="w-100 pattern border border-2 border-dark rounded-bottom-3"
            src="https://unite.pokemon.com/images/pokemon/tyranitar/roster/roster-tyranitar-2x.png"
            :style="{'backgroundColor': '#ce5fd3'}"
          />
        </div>
        <div class="d-flex flex-grow-1 w-100 align-items-center ps-3 text-white">
          {{ props.player }}
        </div>

      </div>
    </template>
  </vue-flip>
</template>
<script setup>
import { defineProps } from 'vue';
import { VueFlip } from 'vue-flip';

const props = defineProps({
	imgUrl: {
		type: String,
		default: '',
	},
	isOpen: {
		type: Boolean,
		default: true,
	},
	player: {
		type: String,
	},
});
</script>
<style>
.pokemon-card-front {
	width: 200px;
	height: 300px;
	background: linear-gradient(120deg, #e67318, #3d237c);
	box-shadow: 0px 2px 2px black;
	position: relative;
	border-width: 2px;
	transition: all 0.1s ease;
	cursor: pointer;
	cursor: default;
}

.pokemon-card-back {
	width: 200px;
	height: 300px;
	/* background: linear-gradient(120deg, #aced5b); */
	box-shadow: 0px 2px 2px black;
	position: relative;
	border-width: 2px;
	cursor: default;
}

.pokemon-card-border-front {
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.8;
	/* border: 1px solid rgb(58, 58, 58); */
}

.pattern {
	background-image: url('https://unite.pokemon.com/images/common/square-pattern-30.svg'),
		linear-gradient(180deg, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 38%);
	background-size: 144px, auto;
	background-color: transparent;
	background-position: center, left top;
	color: #ffe700;
	flex-direction: column;
	border-radius: 5px;
}

.pokemon-card-border-back {
}
</style>
