<template>
  <v-container class="my-10">
    <h1 id="labelMetrics" align="center" class="mt-12 main-font">Metricas</h1>
    <HorizontalDivider />
    <v-row class="mb-10 second-font">
      <v-col v-for="(component, i) in components" :key="i" cols="12" sm="4" md="4" align="center" justify="center">
        <v-row align="center" justify="center" class="mb-5">
          <h3 :id="'label' + component.id">{{ component.title }}</h3>
        </v-row>
        <v-img
          :id="'image' + component.id"
          :src="component.src"
          class="justify-center"
          contain
          height="180px"
          width="250px"
        ></v-img>
        <div class="my-9">
          <blockquote :id="'description' + component.id">{{ component.description }}</blockquote>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HorizontalDivider from "../utils/HorizontalDivider";

export default {
  components: {
    HorizontalDivider
  },
  data: () => ({
    components: [
      {
        id: 'MetricsDiversity',
        title: "Diversidad",
        src: require("@/assets/values.png"),
        description:
          "Las miembros de las comunidades, son mujeres con experiencia en diferentes ramas de la tecnologia"
      },
      {
        id: 'MetricsCommunity',
        title: "Comunidades",
        src: require("@/assets/trabajo-social.png"),
        description:
          "Existen 8 comunidades en Cochabamba que trabajan por la integracion de la mujer en el area de la tecnologia "
      },
      {
        id: 'MetricsWomenWork',
        title: "Mujeres trabajando",
        src: require("@/assets/ayudar.png"),
        description:
          "Se ha roto esa brecha de genero, mostrando las capacidades de la mujer"
      }
    ]
  })
};
</script>

