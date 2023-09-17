<template>
  <div class="h-100">
    {{ isAllOpen }}
    <div class="d-flex border border-0 mb-2 align-items-center justify-content-center">
      <div class="me-3">
        {{ players.length }}/10
      </div>
      <vue3-tags-input
        limit="10"
        :tags="tags"
        placeholder="enter some user"
        @on-tags-changed="collectPlayers"
        class="me-1 border border-dark"
      />
      <button
        class="btn border border-dark go-button"
        :disabled="!(_.size(players) > 9)"
        @click="shufflePlayer"
      >GO</button>
    </div>
    <div
      v-if="_.size(players) < 11"
      class="d-flex h-100 justify-content-center align-items-center"
    >
      <Versus
        :players="players"
        :isAllOpen="isAllOpen"
      />
    </div>
  </div>
</template>
  
<script setup>
import { toRef } from 'vue';
import Vue3TagsInput from 'vue3-tags-input';
import _ from 'lodash';

const players = toRef([]);
const tags = toRef([]);
const isAllOpen = toRef(false);

// TODO: 맴버수에 따라 팀 결정
function collectPlayers(tags) {
	players.value = tags;
}

function shufflePlayer() {
	players.value = _.shuffle(players.value);

	setTimeout(() => {
		isAllOpen.value = true;
	}, 100);
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
	transition: color 0.3s;
}

.v3ti .v3ti-tag .v3ti-remove-tag:hover {
	color: #ffffff;
}

.v-enter-active,
.v-leave-active {
	transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}

.go-button {
	color: white !important;
	background-color: #fc8829 !important;
}
</style>
