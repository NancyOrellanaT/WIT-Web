<template>
  <v-container>
    <v-row justify="space-around">
      <v-col align-self="center">
        <h2 align="center">{{ components.title }}</h2>
        <v-layout justify-center>
            <blockquote class="blockquote">{{ components.description }}</blockquote>
        </v-layout>
      </v-col>
      <v-col cols="6">
        <v-img
          :src="image.src"
          contain
          class="white--text align-center"
          gradient="to bottom, rgba(1,1,0.9,0.5), rgba(1,1,0.9,0.8)"
          >
          <v-layout justify-center>
            <v-card class="pa-3 px-3 white--text" dark color="transparent">
          <v-card-title v-text="components.phrase"></v-card-title>
            </v-card>
          </v-layout>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => (
    {
      components: {
        title: 'VISIÓN',
        description: 'La visión de WIT es fomentar e incentivar la participacion de las mujeres en las distintas áreas de las nuevas tecnologías.',
        phrase: 'Inserte Frase Motivacional Aqui'
      },
      image: {
        src: require('@/assets/Picture5.jpg')
      }
  })
}
</script>