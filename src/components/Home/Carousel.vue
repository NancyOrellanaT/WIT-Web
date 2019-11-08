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
    <v-carousel-item class="image" v-for="(image, i) in images" :key="i" :src="image.src" :id="image.id">
      <v-row class="fill-height px-5" align="center" justify="center">
        <div class="ma-12" />
        <v-spacer></v-spacer>
        <v-col class="text-center" cols="12">
          <v-row class="mt-5" align="center" justify="center">
            <v-btn id="buttonCarousel" large color="deep-purple darken-2" dark>Lorem ipsum</v-btn>
          </v-row>
          <v-icon class="ma-5" color="pink lighten-2" x-large :id="slides[i].id">{{ slides[i].icon }}</v-icon>
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
          id: 'imageCarousel1',
          src:
            "https://www.robotics.es/wp-content/uploads/2019/04/teletrabajo_robotics.jpeg"
        },
        {
          id: 'imageCarousel2',
          src: "https://vizualsymphony.com/wp-content/uploads/2019/05/AdobeStock_180991521-copy.jpeg"
        }
      ],
      slides: [
        {
          id: 'iconSlides1',
          icon: "mdi-cards-heart"
        },
        {
          id: 'iconSlides2',
          icon: "mdi-image-filter-vintage"
        }
      ]
    };
  }
};
</script>

<style scoped>
.image {
  filter: brightness(0.7);
}

#carousel {
  background-size: 100% auto !important;
}

</style>
