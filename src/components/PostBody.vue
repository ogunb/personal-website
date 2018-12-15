<template>
  <div class="showroom__post__body" v-if="isOpen">
    <VueSimpleMarkdown></VueSimpleMarkdown>
  </div>
</template>

<script>
import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";

export default {
  name: "post-body",
  props: ["isOpen"],
  data() {
    return {
      input: ""
    };
  }
  // created: function() {
  //   return this.input
  // },
};
</script>

<style>
</style>

