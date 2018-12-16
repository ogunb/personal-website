<template>
  <div class="showroom__post" v-bind:class="{showroom__post__open: isOpen}" ref="post">
    <p class="showroom__post__title">{{ title }}</p>
    <p class="showroom__post__subtitle" @click="handleClick">{{ subtitle }}</p>
    <button
      @click="handleClick"
      class="showroom__post__button"
      v-bind:class="{ showroom__post__button__open: isOpen }"
    ></button>
    <transition name="showroom__post__body">
      <div v-if="isOpen" class="showroom__post__body" v-html="post"></div>
    </transition>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "post",
  data() {
    return {
      isOpen: false,
      post: ""
    };
  },
  props: ["title", "subtitle", "id"],
  mounted: function() {
    if (this.$route.params.postId && this.$route.params.postId == this.id) {
      this.handleClick();
      window.scrollTo({
        behavior: "smooth",
        top: this.$refs.post.offsetTop + window.innerHeight
      });
    }
  },
  methods: {
    handleClick() {
      this.markdownPost();
      this.changeUrl();
    },
    markdownPost: async function() {
      const markdown = await import(`../assets/posts/${this.id}.js`);
      this.post = marked(markdown.default);
    },
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
  max-height: 6.4rem;
  transition: max-height 0.5s var(--snap);
}
.showroom__post.showroom__post__open {
  transition: max-height 0.5s ease-in;
  max-height: 330rem;
  background: url(../assets/showroom-bottom.svg);
  background-size: 100%;
  background-repeat: repeat-x;
  background-position: 100% 100%;
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
  opacity: 1;
  transition: opacity 0.3s linear;
  max-width: 70vw;
  padding-bottom: 5rem;
  padding-top: 2rem;
}
.showroom__post__body img {
  margin: 20px auto;
  display: flex;
}
.showroom__post__body-enter,
.showroom__post__body-leave-active {
  opacity: 0;
}
@media screen and (min-width: 2000px) {
  .showroom__post {
    max-width: 1350px;
  }
}
@media screen and (max-width: 825px) {
  .showroom__post {
    grid-template-columns: 14rem auto 12rem;
  }
}
@media screen and (max-width: 685px) {
  .showroom__post {
    grid-template-columns: 0 auto 12rem;
    grid-gap: 1rem;
  }
  .showroom__post__title {
    visibility: hidden;
  }
}
@media screen and (max-width: 505px) {
  .showroom__post {
    display: flex;
    flex-direction: column;
    max-height: 16rem;
  }
  .showroom__post__body {
    padding: 1rem 0 1rem 0;
  }
  .showroom__post__title {
    display: none;
  }
  .showroom__post__subtitle {
    padding: 2rem;
  }
  .showroom__post__button {
    width: 100%;
    margin: 0;
  }
  .showroom__post__button:hover {
    transform: none;
  }
}
.showroom__post__body a {
  color: #4183c4;
  text-decoration: none;
}
.showroom__post__body p,
.showroom__post__body blockquote,
.showroom__post__body ul,
.showroom__post__body ol,
.showroom__post__body dl,
.showroom__post__body li,
.showroom__post__body table,
.showroom__post__body pre {
  margin: 15px 0;
  line-height: 2;
  font-size: 1.6rem;
}
.showroom__post__body ul,
.showroom__post__body ol {
  padding-left: 30px;
}
.showroom__post__body blockquote {
  border-left: 4px solid #ddd;
  padding: 0 15px;
  color: #777;
}
.showroom__post__body blockquote > :first-child {
  margin-top: 0;
}
.showroom__post__body blockquote > :last-child {
  margin-bottom: 0;
}
.showroom__post__body img {
  max-width: 100%;
}
.showroom__post__body span.align-center {
  display: block;
  overflow: hidden;
  clear: both;
}
.showroom__post__body span.align-center > span {
  display: block;
  overflow: hidden;
  margin: 13px auto 0;
  text-align: center;
}
.showroom__post__body span.align-center span img {
  margin: 0 auto;
  text-align: center;
}
.showroom__post__body code,
.showroom__post__body tt {
  margin: 0 2px;
  padding: 0 5px;
  white-space: nowrap;
  border: 1px solid #eaeaea;
  background-color: #f8f8f8;
  border-radius: 3px;
}
.showroom__post__body pre code {
  margin: 0;
  padding: 0;
  white-space: pre;
  border: none;
  background: transparent;
}
.showroom__post__body .highlight pre {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}
.showroom__post__body pre {
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  overflow: auto;
  padding: 6px 10px;
  border-radius: 3px;
}
.showroom__post__body pre code,
.showroom__post__body pre tt {
  background-color: transparent;
  border: none;
}
</style>
