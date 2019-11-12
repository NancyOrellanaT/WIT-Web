<template>
  <div class="contact">
    <section>
      <v-parallax
        id="parallaxContact"
        class="image"
        src="http://www.lecdh.be/sites/default/files/styles/bandeau_titre/public/contact-590062300.jpg?itok=s2PWszjR"
        height="700"
      >
        <v-layout column align-center justify-center class="black--text">
          <h1 id="labelContactTitle" class="header ma-5 mb-2 white--text text-center">Contacto</h1>
        </v-layout>
      </v-parallax>
    </section>
    <Contact />
  </div>
</template>

<script>
import Contact from '@/components/contact/Contact'
export default {
  name: "contact",
  components: {
    Contact
  }
}
</script>

<style>
.image {
  filter: brightness(0.7);
}
</style>