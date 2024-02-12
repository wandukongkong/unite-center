import { defineStore } from 'pinia';
import { toRef } from 'vue';

export const useBoardStore = defineStore(
  'boardStore',
  () => {
    const selectedPokemonList = toRef([]);

    return {
      selectedPokemonList,
    };
  },
  {
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage,
        },
      ],
    },
  }
);
