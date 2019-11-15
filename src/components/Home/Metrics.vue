<template>
  <v-container class="my-10">
    <h1 id="labelMetrics" align="center" class="mt-12 main-font">Metricas</h1>
    <HorizontalDivider />
    <v-row class="mb-10 second-font">
      <v-col v-for="(component, i) in components" :key="i" cols="12" sm="4" md="4" align="center" justify="center">
        <v-row align="center" justify="center" class="mb-5">
          <h3 :id="'label' + component.id" align="center">{{ component.title }}</h3>
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
          "En el mundo las mujeres solamente ocupan un 20% en el área de la tecnología."
      },
      {
        id: 'MetricsCommunity',
        title: "Comunidades",
        src: require("@/assets/trabajo-social.png"),
        description:
          "Existen más 8 comunidades en Cochabamba, Bolivia, que trabajan por la integración de la mujer en el area de la tecnología."
      },
      {
        id: 'MetricsWomenWork',
        title: "Mujeres trabajando",
        src: require("@/assets/ayudar.png"),
        description:
          "Se ha roto la brecha de género, mostrando que todos somos capaces."
      }
    ]
  })
};
</script>

