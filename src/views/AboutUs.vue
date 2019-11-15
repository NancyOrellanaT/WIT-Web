<template>
  <div>
    <section>
      <v-parallax id="parallaxAboutUs" class="image" src="http://cs.umanitoba.ca/~wics/assets/img/home/so-helpful-cropped-all3.jpg" height="700">
        <v-layout column align-center justify-center class="black--text">
          <h1 id="labelAboutUsTitle" class="header mb-2 text-center white--text">Sobre nosotros</h1>
          <h3 id="labelAboutUsDescription" class="font-weight-light mb-4 white--text text-center">Somos una comunidad que busca fomentar a mujeres y hombres en el mundo en el área de la tecnología</h3>
          <v-btn id="buttonAboutusContact" class="mt-12" color="deep-purple lighten-1" dark large @click="goToContact()">Contáctanos</v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <Members/>
    <Communities/>
  </div>
</template>

<script>
import Members from "@/components/About-us/Members";
import Communities from '@/components/About-us/Communities'

export default {
  name: "about-us",
  components: {
    Communities,
    Members
  },
  methods: {
    goToContact(){
      this.$router.push('/contact')
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style scoped>

.image {
  filter: brightness(0.7);
}

</style>
