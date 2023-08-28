<template>
    <vue-flip v-model="isOpenCard" active-click="true" width="200px" height="50px" class="mx-1">
        <template #front>
            <div class="d-flex justify-content-center align-items-center pokemon-card-back rounded-2 p-1">
                <img class="w-50 " src="../assets/pokemon/uniteLogo.png" />
                <img class="pokemon-card-border p-2" src="../assets/pokemon/cardBorder.png" />
            </div>
        </template>
        <template #back>
            <div class="d-flex justify-content-center align-items-center pokemon-card-front rounded-2">
                <img class="w-100" :src="props.image" />
            </div>
        </template>
    </vue-flip>
</template>
<script setup>
import {defineProps} from 'vue';
import { VueFlip } from 'vue-flip';

const props= defineProps({
  imgUrl: {
    type: String,
    default: '',
  }
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
}

.pokemon-card-border {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
}
</style>