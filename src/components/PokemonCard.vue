<template>
	<vue-flip v-model="props.isOpen" :active-click="false" class="m-1 vue-flip">
		<template #front>
			<div class="d-flex justify-content-center align-items-center pokemon-card-front rounded-2 p-1 border border-dark">
				<img class="w-50" src="../assets/img/pokemon/uniteLogo.png" />
				<img class="pokemon-card-border-front p-2" src="../assets/img/pokemon/cardBorder.png" />
			</div>
		</template>
		<template #back>
			<div
				class="d-flex flex-column justify-content-center align-items-center pokemon-card-back pokemon-card-border-back rounded-2"
				@click="emit('click-card')">
				<div class="d-flex flex-grow-1">
					<img v-if="true" class="w-100 pattern border border-2 border-dark rounded-bottom-3 pokemon-img"
						:src="props.pokemonInfo.image" :style="{ backgroundColor: props.pokemonInfo.color }" />
				</div>
				<div class="d-flex flex-grow-1 w-100 align-items-center ps-3 text-white">
					<h6 class="mb-0">
						{{ props.player }}
					</h6>
				</div>
			</div>
		</template>
	</vue-flip>
</template>
<script setup>
import { defineProps } from 'vue';
import { VueFlip } from 'vue-flip';

const emit = defineEmits(['click-card'])
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
		default: '',
	},
	pokemonInfo: {
		type: Object,
		default: () => {
			return {};
		},
	},
});
</script>
<style>
.pokemon-card-front {
	width: 230px;
	height: 100%;
	background: linear-gradient(120deg, #e67318, #3d237c);
	box-shadow: 0px 6px 4px rgb(0, 0, 0, 0.6);
	position: relative;
	border-width: 2px;
	/* cursor: pointer; */
	cursor: default;
	z-index: 0;
}

.pokemon-card-back {
	width: 230px;
	height: 300px;
	background-color: rgb(34, 34, 34);
	box-shadow: 0px 6px 4px rgb(0, 0, 0, 0.6);
	position: relative;
	border-width: 2px;
	cursor: pointer;
	transition: transform 0.2s;
	z-index: 0
}

.pokemon-card-back:hover {
	transform: scale(1.02);
}

.pokemon-card-back:active {
	transform: scale(0.99);
}

.pokemon-card-border-front {
	position: absolute;
	width: 95%;
	height: 100%;
	opacity: 0.5;
	/* border: 1px solid rgb(58, 58, 58); */
}

.pokemon-img {
	height: 100px;
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
	height: 270px;
}

.vue-flip {
	width: 230px;
	height: 300px;
}

@media screen and (max-width: 576px) {
	.vue-flip {
		width: 70px;
		height: 150px;
	}

	.pokemon-img {
		height: 100px;
	}

	.pattern {
		background-image: url('https://unite.pokemon.com/images/common/square-pattern-30.svg'),
			linear-gradient(180deg, rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 38%);
		background-size: 44px, auto;
		background-color: transparent;
		background-position: center, left top;
		color: #ffe700;
		flex-direction: column;
		border-radius: 5px;
	}

	.pokemon-card-back {
		width: 72px;
		height: 120px;
		background-color: rgb(34, 34, 34);
		box-shadow: 0px 2px 2px black;
		position: relative;
		border-width: 2px;
	}

	.pokemon-card-front {
		width: 72px;
		height: 120px;
		background: linear-gradient(120deg, #e67318, #3d237c);
		box-shadow: 0px 2px 2px black;
		position: relative;
		border-width: 2px;
		transition: all 0.1s ease;
	}
}
</style>
