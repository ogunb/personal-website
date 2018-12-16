<template>
  <div class="wrapper">
    <hero></hero>
    <router-link
      to="/about"
      type="button"
      class="showroom__aboutPage"
      ref="aboutButton"
    >learn more about me</router-link>
    <about v-if="$route.name === 'about'"></about>
    <showroom></showroom>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import Showroom from "@/components/Showroom.vue";
import FooterComp from "@/components/FooterComp.vue";
import About from "@/components/About.vue";

export default {
  name: "home",
  components: {
    Hero,
    Showroom,
    FooterComp,
    About
  },
  mounted() {
    window.addEventListener(
      "scroll",
      this.debounce(() => {
        if (window.pageYOffset > window.innerHeight / 2) {
          this.$refs.aboutButton.$el.style.opacity = 1;
        } else {
          this.$refs.aboutButton.$el.style.opacity = 0;
        }
      }, 100)
    );
  },
  methods: {
    debounce: function(callback, time) {
      // https://gist.github.com/nmsdvid/8807205#gistcomment-2313801
      let interval;
      return (...args) => {
        clearTimeout(interval);
        interval = setTimeout(() => {
          interval = null;
          callback(...args);
        }, time);
      };
    }
  }
};
</script>
<style>
.showroom__aboutPage {
  cursor: pointer;
  position: fixed;
  top: 50%;
  left: -150px;
  transform: rotate(90deg);
  transition: transform 2s var(--snap), opacity 2s var(--snap);
  font-size: 3.2rem;
  background: none;
  border: none;
  z-index: 5;
  opacity: 0;
}
.showroom__aboutPage:hover {
  transform: rotate(90deg) translateY(-10px);
}
@media screen and (max-width: 1075px) {
  .showroom__aboutPage {
    display: block;
    position: relative;
    transform: none;
    right: 0;
    top: 0;
    margin: 2rem auto 0 auto;
    z-index: 0;
  }
  .showroom__aboutPage:hover {
    transform: none;
  }
}
</style>
