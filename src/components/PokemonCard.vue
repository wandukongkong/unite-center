<template>
  <vue-flip
    v-model="isOpen"
    :active-click="false"
    width="200px"
    height="300px"
    class="m-1"
  >
    <template #front>
      <!-- {{ props.player }} -->
      <div class="d-flex justify-content-center align-items-center pokemon-card-back rounded-2 p-1">
        <img
          class="w-50"
          src="../assets/img/pokemon/uniteLogo.png"
        />
        <img
          class="pokemon-card-border p-2"
          src="../assets/img/pokemon/cardBorder.png"
        />
      </div>
    </template>
    <template #back>
      {{props.player}}
      <div class="d-flex justify-content-center align-items-center pokemon-card-front rounded-2">
        <img
          class="w-100"
          :src="props.image"
        />
      </div>
    </template>
  </vue-flip>
</template>
<script setup>
import { defineProps, toRef } from 'vue';
import { VueFlip } from 'vue-flip';

const isOpen = toRef(false);
const props = defineProps({
	imgUrl: {
		type: String,
		default: '',
	},
	isAllOpen: {
		type: Boolean,
		default: false,
	},
	player: {
		type: String,
	},
});
</script>
<style>
.pokemon-card-back {
	width: 200px;
	height: 300px;
	background: linear-gradient(120deg, #e67318, #3d237c);
	box-shadow: 0px 2px 2px black;
	position: relative;
	border-width: 2px;
	transition: all 0.1s ease;
	cursor: pointer;
	animation: fadein 0.5s;
	cursor: default;
}

.pokemon-card-front {
	width: 200px;
	height: 300px;
	background: linear-gradient(120deg, #e67318, #3d237c);
	box-shadow: 0px 2px 2px black;
	position: relative;
	border-width: 2px;
	transition: all 0.1s ease;
	cursor: pointer;
	animation: fadein 0.5s;
	cursor: default;
}

.pokemon-card-border {
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.8;
}

@keyframes fadein {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@-moz-keyframes fadein {
	/* Firefox */
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@-webkit-keyframes fadein {
	/* Safari and Chrome */
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@-o-keyframes fadein {
	/* Opera */
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>
