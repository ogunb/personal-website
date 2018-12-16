<template>
  <section class="about" key="about">
    <button type="button" class="about__close" @click="closeAbout">X</button>
    <h3 class="about__title">i'm ogün,</h3>
    <div class="about__paragraph">
      <p>
        A 24 years old Front-end Developer from Eskişehir, Turkey. I love
        learning and I have a dilemma that bothered me for some time.
      </p>
      <p>
        I've studied Communication Design and Management in Eskişehir Anadolu
        University. Consistent with the department I studied, I focused on UX/UI
        design and I also taught my self Front-end Development. This has caused
        me a dilemma for a long time. Am I a designer who develops or am I a
        developer who designs?
      </p>
      <p>
        I didn't know what to call myself, but learning JavaScript has made me
        realize that, while I was good at designing, I only “liked” it. On the
        other hand, I ”loved“ coding. There was so much to learn. So many
        material challenges and problems to solve.
      </p>
      <p>
        <em>
          the satisfaction you get from solving a problem with programming is
          mind blowing.
        </em>
      </p>
    </div>
    <div class="about__contact">
      <p>So yeah, see you around I guess?:</p>
      <a
        href="https://www.dropbox.com/s/yc1bjafbax0i0qj/og%C3%BCn-babacan-cv-en.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >Resume(EN)</a>
      {{ ' ' }}
      <a
        href="https://www.dropbox.com/s/4f5bo3qvqhoht9z/og%C3%BCn-babacan-cv-tr.pdf?dl=0"
        target="_blank"
        rel="noopener noreferrer"
      >Resume(TR)</a>
      <br>
      <a href="mailto:babacanogun@gmail.com">babacanogun@gmail.com</a>
      <social></social>
    </div>
  </section>
</template>

<script>
import Social from "./Social.vue";
export default {
  name: "about",
  components: {
    Social
  },
  methods: {
    closeAbout: function() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
.about {
  position: fixed;
  max-width: 75vw;
  right: 0;
  top: 0;
  z-index: 1;
  height: 100vh;
  background: var(--dark);
  color: var(--light);
  padding: 6% 15% 15% 8%;
  box-sizing: border-box;
  line-height: 2;
  transition: transform 1.5s var(--snap);
}
.about-enter-to,
.about-leave {
  transform: translateX(0%);
}
.about-leave-to,
.about-enter {
  transform: translateX(100%);
}
.about__paragraph p {
  font-size: 1.2rem;
}
.about__close {
  position: absolute;
  top: 5%;
  right: 13%;
  background: none;
  font-size: 4rem;
  border: none;
  color: var(--light);
  cursor: pointer;
}
.about__contact p {
  margin-bottom: 0;
}
.about__contact a {
  color: var(--light);
}
.about__contact a:hover svg {
  fill: var(--gray);
}
@media screen and (max-width: 1000px) {
  .about {
    max-width: 100%;
    overflow-y: scroll;
  }
}
</style>
