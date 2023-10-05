import { defineStore } from "pinia";
import { toRef } from "vue";

export const useRandomPickStore = defineStore(
  "randomPickStore",
  () => {
    const tags = toRef([]);

    const updateTags = (tagsParam) => {
      tags.value = tagsParam;
    };

    return { tags, updateTags };
  },
  {
    persist: {
      enabled: true,
    },
  }
);
