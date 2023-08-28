<template>
    <div class="h-100">
        <div class="border border-0 mb-3">
            <vue3-tags-input :tags="tags" placeholder="enter some user" @on-tags-changed="handleChangeTag" />
        </div>

        <!-- TODO: 기능 버튼 영역 Start -->
        <div class="">
        </div>
        <!-- 기능 버튼 영역 End-->

        <!-- TODO: 카드 영역 Start  -->
        <div class="d-flex flex-fill h-75 justify-content-center align-items-between">
            <div>
                <div class="d-flex h-100">
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                </div>
                <div class="d-flex h-100">
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                    <PokemonCard v-model="isOpenCard" />
                </div>
            </div>
        </div>
        <!-- 카드 영역 End  -->
    </div>
</template>
<script setup>
import {toRef} from 'vue';
import Vue3TagsInput from 'vue3-tags-input';
import PokemonCard from '../components/PokemonCard.vue';
// import pokemonList from  '../../pokemon.json';

const tags = toRef([]);
const isOpenCard = toRef(false);

function handleChangeTag(e){
  tags.value = e;
}

</script>

<style lang="css">
.v3ti {
    flex: 1
}

.v3ti .v3ti-tag {
    background: #fc8829;
    /*border: 1px solid #222222;*/
    /*border-radius: 0;*/
}

.v3ti .v3ti-tag .v3ti-remove-tag {
    color: #000000;
    transition: color .3s;
}

.v3ti .v3ti-tag .v3ti-remove-tag:hover {
    color: #ffffff;
}
</style>