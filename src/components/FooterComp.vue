<template>
  <footer class="footer">
    <a href="mailto:babacanogun@gmail.com" class="footer__mail">babacanogun@gmail.com</a>
    <social></social>
  </footer>
</template>

<script>
import Social from "./Social";
export default {
  name: "footer-comp",
  components: {
    Social
  }
};
</script>


<style>
.footer {
  background: var(--dark);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
}
.footer * {
  margin: 0 1rem;
}
.footer svg {
  width: 20px;
  height: 20px;
}
.footer a:hover svg {
  fill: var(--gray);
}
.footer__mail {
  color: var(--gray);
  font-size: 1.2rem;
}
@media screen and (max-width: 550px) {
  .footer {
    flex-direction: column;
  }
}
</style>
