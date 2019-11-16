<template>
  <section>
    <v-parallax
      id="parallaxHome"
      class="image"
      src="http://uwcmahindracollege.org/themes/site_themes/uwc/content_images/slide-aboutus-peoplecommunity-001.jpg"
      height="550"
      center
    >
      <v-layout column align-center justify-center class="white--text">
        <div class="ma-12" />
        <h1
          id="parallaxHometitle"
          class="white--text mb-2 parallax-font text-center"
        >Comparte con nosotros</h1>
        <div
          id="parallaxHomeDescription"
          class="subheading mb-4 text-center"
        >La diversidad es el motor de la invención. Genera creatividad que enriquece el mundo.</div>
        <v-btn
          id="ButtonParallaxHome"
          class="mt-12"
          color="deep-purple darken-2"
          dark
          large
          @click="goToAboutUs()"
        >Conoce a nuestro equipo</v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  methods: {
    goToAboutUs() {
      this.$router.push("/about-us");
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style scoped>
.parallax-font {
  font-size: 3em;
}

.image {
  filter: brightness(0.8);
}
</style>
