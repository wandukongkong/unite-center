<script setup>
import { useDrag } from 'vue3-dnd';
import { defineProps } from 'pinia';
import { toRefs } from '@vueuse/core';

const emit = defineEmits(['click-delete']);
const props = defineProps({
  pokemonName: {
    type: String,
    default: '',
  },
  pokemonImgUrl: {
    type: String,
    defualt: '',
  },
  pokemonPositionColor: {
    type: String,
    default: '',
  },
  left: {
    type: Number,
    default: 0,
  },
  top: {
    type: Number,
    default: 0,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
});

const [collect, drag] = useDrag(() => ({
  type: 'box',
  item: {
    pokemonName: props.pokemonName,
    left: props.left,
    top: props.top,
    zIndex: props.zIndex,
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
}));

const { isDragging } = toRefs(collect);
</script>
<template>
  <div class="position-relative">
    <div v-if="isDragging" :ref="drag"></div>
    <img
      v-else
      :ref="drag"
      :src="props.pokemonImgUrl"
      class="m-1 position-absolute rounded border border-dark border-2"
      draggable="true"
      role="Box"
      data-testid="box"
      :style="{
        height: '65px',
        left: `${props.left}px`,
        top: `${props.top}px`,
        'z-index': `${props.zIndex}`,
        'background-color': props.pokemonPositionColor,
        'box-shadow': '0 5px 7px 0px black !important',
        cursor: 'pointer',
      }"
    />
    <div
      v-if="!isDragging"
      class="position-absolute"
      :style="{
        height: '65px',
        left: `${props.left + 50}px`,
        top: `${props.top - 3}px`,
        'z-index': `${props.zIndex}`,
        cursor: 'pointer',
      }"
    >
      <button
        class="d-flex justify-content-center align-items-center btn p-0 shadow-none border-0"
        style="width: 20px; height: 20px"
        @click="emit('click-delete', props.pokemonName)"
      >
        <i class="bi bi-x-circle-fill"></i>
      </button>
    </div>
  </div>
</template>
