<template>
  <section class="about" key="about">
    <button type="button" class="about__close" @click="closeAbout">X</button>
    <h3 class="about__title">i'm ogün,</h3>
    <div class="about__paragraph">
     <p>I’m Ogün, a 24 years old Front-end Developer from Istanbul, Turkey. I’m a “techie” guy and I really like learning about techie stuff.
</p>
     <p>I've studied Communication Design and Management in Eskişehir Anadolu University. Consistent with the department I studied, I focused on UX/UI design and I also taught myself HTML and CSS. At first, I wasn’t intending for it to be anything more than prototyping what I designed, but it didn’t satisfy me.</p>
     <p>I felt like being a designer didn’t suit me, something was just missing. Learning Javascript has made me realize that programming offers me something from the past. It's provided me with the opportunity of finding material solutions to problems and it felt like I was 10 again, playing video games. This now defines who I’m and who I want to be.</p>
      <p>
        <em>
          the satisfaction you get from solving a problem with programming is
          mind blowing.
        </em>
      </p>
    </div>
    <div class="about__contact">
      <em>
        <p>So yeah, see you around I guess?:</p>
      </em>
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
  mounted: function() {
    document.body.style.overflowY = "hidden";
  },
  destroyed: function() {
    document.body.style.overflowY = "scroll";
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
.about__paragraph {
  height: 90%;
  padding-right: 2rem;
  overflow-y: scroll;
  scrollbar-color: var(--light) var(--dark);
}
.about__paragraph::-webkit-scrollbar {
  background: var(--dark);
}
.about__paragraph::-webkit-scrollbar-thumb {
  background-color: var(--light);
}
.about__paragraph p {
  font-size: 1.6rem;
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
  .about__paragraph {
  padding-top: 1rem;
    overflow-y: hidden;
    padding-right: 0;
    padding-top: 1rem;
  }
}
</style>
