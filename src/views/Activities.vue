<template>
  <div class="activities">
    <section>
      <v-parallax id="parallaxActivities" class="image" src="https://communitylivingontario.ca/wp-content/uploads/2017/03/img-forum.jpg" height="700">
        <v-layout column align-center justify-center class="black--text">
          <h1 id="labelActivitiesTitle" class="header ma-5 main-font mb-2 text-center">Actividades</h1>
          <h3 id="labelActivitiesDescription" class="font-weight-light mb-4 white--text text-center">Aprende sobre las actividades que WIT ofrece</h3>
        </v-layout>
      </v-parallax>
    </section>
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
