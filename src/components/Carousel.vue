<template>
  <v-carousel
    cycle
    height="100vh"
    hide-delimiter-background
    show-arrows-on-hover
    reverse-transition="fade-transition"
    transition="fade-transition"
    interval="5000"
    id="carousel"
  >
    <v-carousel-item class="image" v-for="(image, i) in images" :key="i" :src="image.src">
      <v-row class="fill-height px-5" align="center" justify="center">
        <v-spacer></v-spacer>
        <v-col class="text-center" cols="12">
          <h1 class="bold main-font ma-5">{{ slides[i].mainText }}</h1>
          <h3 black class="black--text font-type-1 ma-5" v-if="slides[i].darkLettersActived">{{ slides[i].secondText }}</h3>
          <h3 black class="font-type-1 ma-5 white--text" v-else>{{ slides[i].secondText }}</h3>
          <v-row class="mt-5" align="center" justify="center">
            <v-btn large rounded color="deep-purple darken-2" dark>Lorem ipsum</v-btn>
          </v-row>
          <v-icon class="ma-5" color="pink lighten-2" x-large>{{ slides[i].icon }}</v-icon>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      images: [
        {
          src:
            "https://www.robotics.es/wp-content/uploads/2019/04/teletrabajo_robotics.jpeg"
        },
        {
          src: "https://vizualsymphony.com/wp-content/uploads/2019/05/AdobeStock_180991521-copy.jpeg"
        },
        {
          src:"https://firebasestorage.googleapis.com/v0/b/metube-120e9.appspot.com/o/Captura.PNG?alt=media&token=44dd9036-7b75-4c0d-810e-14287bb646e1"
        }
      ],
      slides: [
        {
          icon: "mdi-cards-heart",
          mainText: "",
          secondText: "Lorem ipsum dolor sit adipiscing elit cubilia.",
          darkLettersActived: true
        },
        {
          icon: "mdi-image-filter-vintage",
          mainText: "",
          secondText: "Lorem ipsum dolor sit adipiscing elit cubilia.",
          darkLettersActived: false
        },
        {
          icon:"mdi-brightness-5",
          mainText: "",
          secondText: "Lorem ipsum dolor sit amet consectetur cubilia.",
          darkLettersActived: true
        }
      ]
    };
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lobster|Montserrat+Alternates|Quicksand&display=swap');

.image {
  filter: brightness(0.7);
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

#carousel {
  background-size: 100% auto !important;
}

</style>
