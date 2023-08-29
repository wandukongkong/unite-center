<template>
  <div class="h-100">
    <div class="border border-0 mb-2">
      <vue3-tags-input limit="20" :tags="tags" placeholder="enter some user" @on-tags-changed="handleChangeTag" />
    </div>

    <!-- TODO: 카드 영역 Start  -->
    <div class="d-flex flex-column h-100 justify-content-start align-items-start">
      <!-- TODO: 기능 버튼 영역 Start -->
      <div class="d-flex mb-1">
        <button class="btn border bg-light py-0 me-1">
          전체 뒤집기
        </button>
      </div>
      <!-- 기능 버튼 영역 End-->
      <div class="d-flex flex-wrap">
        <div v-for="tag in tags" :key="tag">
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
  flex: 1;
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