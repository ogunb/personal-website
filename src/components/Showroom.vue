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
          title: "color",
          subtitle: "voice controlled rgb color blender."
        },
        {
          id: 3,
          title: "to-do",
          subtitle: "mandatory to-do list."
        },
        {
          id: 2,
          title: "my-notes",
          subtitle: "the big words of js: recursion and call stack"
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
.showroom__posts {
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1075px) {
  .showroom {
    padding: 0 3%;
    margin: 4rem 0 1rem 0;
  }
}
</style>
