<template>
    <vue3-tags-input :tags="tags" :validate="customValidate" placeholder="enter some tags" />
</template>

<script>
import { defineComponent } from 'vue';
import Vue3TagsInput from 'vue3-tags-input';

export default defineComponent ({
  name: 'Validation',

  components: {
    Vue3TagsInput
  },

  data() {
    return {
      tags: []
    };
  },

  methods: {
    customValidate(value) {
      const regex = new RegExp(/^[a-zA-Z]+$/);
      return regex.test(value);
    }
  }
});
</script>