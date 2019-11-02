<template>
  <div class="activities">
    <section>
      <v-parallax class="image" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="600">
        <v-layout column align-center justify-center class="black--text">
          <h1 class="main-font mb-2 text-center">Actividades</h1>
          <h3 class="font-weight-light mb-4 text-center">Aprende sobre las actividades quw WIT ofrece</h3>
        </v-layout>
      </v-parallax>
    </section>
    <v-responsive
      height="2cm"
      class="text-center pa-2"
    >
    </v-responsive>
    <Activity />
  </div>
</template>

<script>
import Activity from '@/components/Activity'

export default {
  name: 'activities',
  components: {
    Activity
  }
}
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
