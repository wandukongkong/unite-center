import { defineStore } from "pinia";
import { toRef } from "vue";

export const useRandomPickStore = defineStore(
  "randomPickStore",
  () => {
    const tags = toRef([]);
    const shuffleMode = toRef("default");
    const shuffleModeColor = toRef("#fc8829");

    const updateTags = (tagsParam) => {
      tags.value = tagsParam;
    };
    const updateShuffleMode = (mode) => {
      shuffleMode.value = mode;
    };
    const updateShuffleModeColor = (color) => {
      shuffleModeColor.value = color;
    };

    return {
      tags,
      shuffleMode,
      shuffleModeColor,
      updateTags,
      updateShuffleMode,
      updateShuffleModeColor,
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
