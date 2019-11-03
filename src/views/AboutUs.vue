<template>
  <div>
    <section>
      <v-parallax class="image" src="http://cs.umanitoba.ca/~wics/assets/img/home/so-helpful-cropped-all3.jpg" height="700">
        <v-layout column align-center justify-center class="black--text">
          <h1 class="main-font mb-2 text-center">SOBRE NOSOTROS</h1>
          <h3 class="font-weight-light mb-4 white--text text-center">Somos una comunidad que busca fomentar mujeres y hombres en el mundo en el area de la tecnología</h3>
          <v-btn class="mt-12" color="deep-purple lighten-1" dark large>Contactanos</v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <Members/>
    <Communities/>
  </div>
</template>

<script>
import Members from "@/components/Members.vue";
import Communities from '@/components/Communities'

export default {
  name: "about-us",
  components: {
    Communities,
    Members
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster|Montserrat+Alternates|Quicksand&display=swap");

.image {
  filter: brightness(0.95);
}

.main-font {
  font-family: "Quicksand", sans-serif;
  font-size: 3em;
  color: white;
}

</style>
