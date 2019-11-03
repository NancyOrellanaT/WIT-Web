<template>
  <v-container>
    <h2 align="center">METRICAS</h2>
    <v-row>
      <v-col v-for="component in components" :key="component" cols="12" sm="4" md="4">
        <v-card>
          <v-row align="center" justify="center" style="height: 50px;">
            <h3 align="center" justify="center">{{component.t}}</h3>
          </v-row>
          <v-img :src="component.src" :aspect-ratio="1.3"></v-img>
          <div align="center" justify="center">
            <blockquote class="blockquote">{{component.d}}</blockquote>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    components: [
      {
        t: "Diversidad",
        src: require("@/assets/diversidad.jpg"),
        d:
          "Las miembros de las comunidades, son mujeres con experiencia en diferentes ramas de la tecnologia"
      },
      {
        t: "Comunidades",
        src: require("@/assets/comunidad.jpg"),
        d:
          "Existen 8 comunidades en Cochabamba que trabajan por la integracion de la mujer en el area de la tecnologia "
      },
      {
        t: "Mujeres trabajando",
        src: require("@/assets/poder.jpg"),
        d:
          "Se ha roto esa brecha de genero, mostrando las capacidades de la mujer"
      }
    ]
  })
};
</script>