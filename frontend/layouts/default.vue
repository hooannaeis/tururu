<template>
  <div style="position: relative; min-height: 100vh;">
    <nav class="nav__container">
      <nuxt-link to="/">
        <h1 class="txt-is-primary">tururu</h1>
      </nuxt-link>
    </nav>
    <nuxt style="margin:auto;"/>
    <footer>
      <ul class="footer__container">
        <nuxt-link to="/imprint">
          <li class="txt-is-bright">Imprint</li>
        </nuxt-link>
        <nuxt-link to="/privacy-stuff">
          <li class="txt-is-bright">Privacy Stuff</li>
        </nuxt-link>
        <nuxt-link to="/about-us">
          <li class="txt-is-bright">About Us</li>
        </nuxt-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    pageTitle: function () {
      const baseTitle = "tururu // ";
      if (this.$route.params && this.$route.params.piece) {
        return baseTitle + this.$route.params.piece;
      } else if (this.$route.name) {
        return baseTitle + this.$route.name;
      } else {
        return baseTitle;
      }
    },
  },
  head() {
    return {
      title: this.pageTitle,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: this.pageTitle },
      ],
    };
  },
};
</script>

<style lang="scss">
.text {
  display: none;
}
</style>
