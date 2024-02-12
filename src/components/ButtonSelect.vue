<script setup>
import { toRef } from 'vue';
import { defineProps } from 'pinia';

const props = defineProps({
  buttomImgUrl: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <button class="btn shadow-none border-0 custom-buttn">+</button>
  <div class="position-relative border">
    <img src="@/assets/img/icon/avatar.png" class="" height="50" />
    <div class="position-absolute text-light" style="font-size: 30pt; -webkit-text-stroke: 0.1px black; top: -13px">
      <strong>+</strong>
    </div>
  </div>
</template>
<style>
.custom-buttn {
  transition: transform 0.1s !important;
}
.custom-buttn:hover {
  transform: scale(1.1) !important;
}
.custom-buttn:active {
  transform: scale(0.9) !important;
}
</style>
