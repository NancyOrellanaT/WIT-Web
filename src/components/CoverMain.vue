<template>
  <v-parallax
    id="parallax"
    height="750"
    dark
    src="https://www.robotics.es/wp-content/uploads/2019/04/teletrabajo_robotics.jpeg"
  >
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="bold main-font ma-5">WOMEN IN TECHNOLOGY</h1>
        <h3
          black
          class="black--text font-type-1 ma-5"
        >Lorem ipsum dolor sit adipiscing elit cubilia.</h3>
        <v-row class="mt-5" align="center" justify="center">
          <v-btn large rounded color="deep-purple darken-2" dark>Lorem ipsum</v-btn>
        </v-row>
        <v-icon class="ma-5" color="pink lighten-2" x-large>mdi-cards-heart</v-icon>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {
  /* This solution is not definitive, it is only until vuetify implements a v-parallax with 100vh */
  mounted() {
    document.getElementById("parallax").style.height = "100vh";
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat+Alternates|Quicksand&display=swap');

#parallax {
  filter: brightness(0.7);
  background-size: 100% auto !important;
}

.main-font {
  font-family: "Quicksand", sans-serif;
  font-size: 3em;
  color: #d81b60;
}

.font-type-1 {
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 1.5em;
}

</style>
