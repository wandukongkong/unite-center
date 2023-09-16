<template>
  <div class="h-100">
    {{ players.length }}
    <div class="d-flex border border-0 mb-2">
      <vue3-tags-input
        limit="10"
        :tags="players"
        placeholder="enter some user"
        @on-tags-changed="collectPlayers"
        class="me-1 border border-dark"
      />
      <button
        class="btn border border-dark go-button"
        :disabled="!(_.size(players) > 9)"
      >GO</button>
    </div>
    <Transition>
      <div
        v-if="_.size(players) < 11"
        class="d-flex flex-column h-100 justify-content-center align-items-center"
      >
        <Versus :players="players" />
      </div>
    </Transition>
  </div>
</template>
  
<script setup>
import { toRef } from 'vue';
import Vue3TagsInput from 'vue3-tags-input';
import _ from 'lodash';

const players = toRef([]);
const step = toRef(0);

// TODO: 맴버수에 따라 팀 결정
function collectPlayers(tags) {
	players.value = tags;
	console.log(tags);
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
