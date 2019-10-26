<template>
  <v-container>
    <v-row justify="space-around">
      <v-col cols="6">
        <v-img
          :src="image.src"
          contain
          >
        </v-img>
      </v-col>
      <v-col>
        <h2 align="center">{{ components.title }}</h2>
        <v-layout justify-center>
          <blockquote class="blockquote">{{ components.description }}</blockquote>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => (
    {
      components: {
        title: 'MISIÓN',
        description: 'La Misión de WIT es demostrar que las mujeres son capaces de muchas cosas. Liderar, resolver problemas y desarrolar software son algunas de ellas'
      },
      image: {
        src: require('@/assets/Picture7.jpg')
      }
  })
}
</script>

<style scoped>

</style>