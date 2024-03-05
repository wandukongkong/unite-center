<script setup>
import { useDrag } from 'vue3-dnd';
import { defineProps } from 'pinia';
import { toRefs } from '@vueuse/core';

const props = defineProps({
  pokemonName: {
    type: String,
    default: '',
  },
  pokemonImgUrl: {
    type: String,
    defualt: '',
  },
  left: {
    type: Number,
    default: 0,
  },
  top: {
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
  },
  collect: (monitor) => ({
    isDragging: monitor.isDragging(),
  }),
}));

const { isDragging } = toRefs(collect);
</script>
<template>
  <div v-if="isDragging" :ref="drag"></div>
  <div
    v-else
    :ref="drag"
    class="bg-light m-1 border position-absolute"
    draggable="true"
    :style="{ width: '100px', height: '100px', left: `${props.left}px`, top: `${props.top}px` }"
    role="Box"
    data-testid="box"
  >
    {{ props.left }} / {{ props.top }} / {{ isDragging }}
  </div>
</template>
