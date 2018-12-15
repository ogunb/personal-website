<template>
  <div class="showroom__post" v-bind:class="{ post__body__open: isOpen }">
    <p class="showroom__post__title">{{ title }}</p>
    <p class="showroom__post__subtitle" @click="changeUrl">{{ subtitle }}</p>
    <button
      @click="changeUrl"
      class="showroom__post__button"
      v-bind:class="{ showroom__post__button__open: isOpen }"
    ></button>
    <post-body v-bind="{ isOpen }"/>
  </div>
</template>

<script>
import PostBody from "./PostBody.vue";
export default {
  name: "post",
  components: {
    PostBody
  },
  data() {
    return {
      isOpen: false
    };
  },
  props: ["title", "subtitle", "id"],
  computed: {
    postNameToLink: function() {
      return this.subtitle.split(" ").join("-");
    }
  },
  methods: {
    changeUrl: function() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        this.$router.push({
          name: "post",
          params: { postId: this.id }
        });
      } else {
        this.$router.push({
          name: "home"
        });
      }
    }
  }
};
</script>

<style>
.showroom__post {
  margin: 2rem 0;
  display: grid;
  grid-template-columns: 17rem auto 12rem;
  grid-template-rows: auto 1fr;
  max-width: 1000px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  border: 4px solid var(--dark);
  border-bottom: none;
  transition: max-height 1s ease-in;
  max-height: 8rem;
}
.showroom__post.post__body__open {
  background: url(../assets/showroom-bottom.svg);
  background-size: 100%;
  background-repeat: repeat-x;
  background-position: 100% 100%;
  max-height: 700rem;
}
.showroom__post * {
  margin: 0;
}
.showroom__post__title {
  font-size: 2rem;
  padding-left: 15%;
}
.showroom__post__subtitle {
  font-weight: 700;
  cursor: pointer;
  transition: transform 2s var(--snap);
}
.showroom__post__subtitle:hover {
  transform: translateY(3px) scale(0.99);
}
.showroom__post__button {
  height: 100%;
  background: var(--dark);
  color: var(--light);
  border: none;
  height: 6rem;
  transition: transform 2s var(--snap);
  cursor: pointer;
  margin-right: -4px;
  float: right;
  box-shadow: 0 -3px 0 0 var(--dark);
  letter-spacing: 1;
  position: relative;
}
.showroom__post__button::before,
.showroom__post__button::after {
  transition: transform 2s var(--snap);
  content: "";
  display: block;
  width: 4px;
  height: 4rem;
  background: var(--light);
  display: flex;
  margin: auto;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translate(calc(-50% + -11px)) rotate(-15deg);
}
.showroom__post__button::after {
  transform: translate(calc(-50% + 11px)) rotate(15deg);
}
.showroom__post__button:hover {
  transform: translateY(3px);
}
.showroom__post__button:hover::before {
  transform: translate(calc(-50% + -5px)) rotate(-13deg);
}
.showroom__post__button:hover::after {
  transform: translate(calc(-50% + 5px)) rotate(13deg);
}
.showroom__post__button.showroom__post__button__open::before {
  transform: translate(calc(-50% + -11px)) rotate(15deg);
}
.showroom__post__button.showroom__post__button__open::after {
  transform: translate(calc(-50% + 11px)) rotate(-15deg);
}
.showroom__post__button.showroom__post__button__open:hover::before {
  transform: translate(calc(-50% + -5px)) rotate(13deg);
}
.showroom__post__button.showroom__post__button__open:hover::after {
  transform: translate(calc(-50% + 5px)) rotate(-13deg);
}
.showroom__post__body {
  grid-column: 1 / 4;
  line-height: 2.5;
  padding: 0 12%;
  opacity: 0;
  transition: opacity 5s var(--snap);
  max-width: 70vw;
}
.showroom__post__body img {
  margin: 20px auto;
  display: flex;
}
.showroom__post.post__body__open .showroom__post__body {
  opacity: 1;
  padding-bottom: 5rem;
  padding-top: 5rem;
}
@media screen and (min-width: 2000px) {
  .showroom__post {
    max-width: 1350px;
  }
}
@media screen and (max-width: 825px) {
  .showroom__post {
    grid-template-columns: 14rem auto 8rem;
  }
}
@media screen and (max-width: 505px) {
  .showroom__post {
    grid-template-columns: 11rem auto 5rem;
  }
}
</style>
