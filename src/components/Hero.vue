<template>
  <div class="hero">
    <div class="hero__top">
      <h1 class="hero__name">
        <span
          class="hero__name__letter"
          v-for="(letter, index) in name"
          v-bind:key="'fistName' + index"
        >{{ letter }}</span>
        <br>
        <span
          class="hero__name__letter"
          v-for="(letter, index) in lastName"
          v-bind:key="'lastName' + index"
        >{{ letter }}</span>
      </h1>
      <div class="hero__occupation">
        <h2>javascript</h2>
        <h2>developer</h2>
        <p>{ type: 'FRONT_END', payload: ['react', 'vue'] }</p>
      </div>
    </div>
    <div class="hero__bottom">
      <p>i'm ogün. a frontend js developer with a design background.</p>
      <social></social>
      <a href="mailto:babacanogun@gmail.com">babacanogun@gmail.com</a>
    </div>
  </div>
</template>

<script>
import Social from "./Social.vue";
export default {
  name: "hero",
  components: {
    Social
  },
  data() {
    return {
      name: "ogün".split(""),
      lastName: "babacan".split("")
    };
  }
};
</script>

<style>
.hero {
  background: url(../assets/hero-bg.jpg);
  background-repeat: no-repeat;
  background-position: 100% 102%;
  background-size: 100%;
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.hero__top {
  display: flex;
  align-items: flex-end;
  margin-bottom: 3rem;
}
.hero__name {
  transform: rotate(-15deg) translateY(0);
  font-size: 11.5rem;
}
.hero__name__letter {
  display: inline-block;
  transition: transform 2s var(--snap);
  cursor: default;
}
.hero__name__letter:hover {
  transform: translateY(10px) scale(0.95);
}
.hero__bottom {
  display: flex;
  flex-direction: column;
  text-align: center;
}

@media screen and (min-width: 1920px) {
  .hero {
    justify-content: center;
  }
  .hero__top {
    margin-bottom: 7%;
  }
}
@media screen and (max-width: 940px) {
  .hero__name {
    font-size: 10rem;
  }
}
@media screen and (max-width: 815px) {
  .hero {
    justify-content: space-around;
  }
  .hero__name {
    font-size: 8rem;
    transform: rotate(-3deg);
  }
  .hero__top {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }
}
@media screen and (max-width: 680px) {
  .hero__bottom {
    margin-top: -20vh;
  }
}
@media screen and (max-width: 355px) {
  .hero__name {
    font-size: 6.5rem;
  }
}
@media screen and (max-width: 300px) {
  .hero__name {
    font-size: 5rem;
  }
}
.hero__occupation {
  transform: scale(0.8) rotate(3deg);
  transition: transform 500ms var(--snap);
  color: var(--light);
  background: var(--dark);
  padding: 1.5rem;
  padding-right: 6rem;
  margin-left: -15rem;
  margin-bottom: -10rem;
}
.hero__occupation:hover {
  transform: scale(0.83) rotate(3deg);
}

@media screen and (max-width: 815px) {
  .hero__occupation {
    margin: 0;
  }
}
@media screen and (max-width: 550px) {
  .hero__occupation p {
    font-size: 1.1rem;
  }
}
</style>
