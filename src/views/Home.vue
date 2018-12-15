<template>
  <div class="wrapper">
    <hero></hero>
    <showroom></showroom>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Showroom from "@/components/Showroom.vue";

export default {
  name: "home",
  components: {
    Hero,
    Showroom
  }
};
</script>
