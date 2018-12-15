<template>
  <section class="showroom">
    <div class="showroom__title">
      <p>
        this is the showroom. it has projects and
        <em>maybe</em> blog posts.
      </p>
      <p>
        <em>
          mostly things on my
          {{' '}}
          <a href="https://github.com/ogunb">github</a> are here as well.
        </em>
      </p>
    </div>
    <div class="showroom__posts">
      <post v-for="{id, title, subtitle} in posts" v-bind:key="id" v-bind="{id, title, subtitle}"></post>
    </div>
    <router-link to="/about" type="button" class="showroom__aboutPage">learn more about me</router-link>
  </section>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "showroom",
  components: {
    Post
  },
  data() {
    return {
      posts: [
        {
          id: 4,
          title: "practice",
          subtitle: "voice controlled rgb color blender."
        },
        {
          id: 2,
          title: "my-notes",
          subtitle: "the big words of js: recursion and call stack"
        },
        {
          id: 3,
          title: "practice",
          subtitle: "mandatory to-do list."
        },
        {
          id: 1,
          title: "sleepy",
          subtitle: "a sleep cycle calculator."
        },
        {
          id: 0,
          title: "rennie",
          subtitle: "sa-mp role play server."
        }
      ]
    };
  }
};
</script>

<style>
.showroom {
  margin: 8rem 0 9rem 0;
  position: relative;
  overflow: hidden;
}
.showroom__title {
  text-align: center;
}
.showroom__aboutPage {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: -150px;
  transform: rotate(90deg);
  transition: transform 2s var(--snap);
  font-size: 3.2rem;
  background: none;
  border: none;
  z-index: 5;
  outline: 0; /* shouldn't've don dis. */
}
.showroom__aboutPage:hover {
  transform: rotate(90deg) translateY(-10px);
}
.showroom__posts {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  .showroom {
    padding: 0 3%;
  }
}
</style>
