<template>
  <v-container>
    <v-row no-gutters>
      <template>
        <v-col>
          <v-card
            class="pa-2"
            outlined
            tile
          >
            Column
          </v-card>
        </v-col>
        <v-col>
          <h2 align="center">{{ components.title }}</h2>
           <v-layout justify-center>
            <blockquote class="blockquote">{{ components.description }}</blockquote>
        </v-layout>
        </v-col>
      </template>
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
      }
  })
}
</script>

<style scoped>

</style>