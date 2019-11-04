<template>
  <div class="activities">
    <section>
      <v-parallax class="image" src="https://communitylivingontario.ca/wp-content/uploads/2017/03/img-forum.jpg" height="700">
        <v-layout column align-center justify-center class="black--text">
          <h1 class="header white--text mb-2 text-center">Actividades</h1>
          <h3 class="font-weight-light mb-4 white--text text-center">Aprende sobre las actividades quw WIT ofrece</h3>
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

.image {
  filter: brightness(0.7);
}

</style>
