<template>
  <div class="mb-12">
    <v-row
      v-for="(activity, i) in activities"
      :key="i"
      :class="i === 1 ? 'mb-6' : ''"
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col cols="12" md="11">
        <HorizontalDivider />
        <v-lazy
          v-model="isActive"
          :options="{
          threshold: 0.2
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-img class="image" :id="'imageActivity' + i" :aspect-ratio="2.5" :src="activity.img">
            <v-row align="center" class="pa-2 fill-height">
              <v-col>
                <v-layout column align-center justify-center class="text-xs-center">
                  <h2
                    :id="'labelActivityTitle' + i"
                    align="center"
                    justify="center"
                    class="header ma-5 main-font mb-2 text-center"
                  >{{ activity.name }}</h2>
                  <h3
                    class="font-weight-medium mb-4 white--text text-center"
                    :id="'labelActivityDescription' + i"
                    align="center"
                    justify="center"
                  >{{ activity.description }}</h3>     
                </v-layout>
                <v-btn :id="'buttonActivity' + i" v-if="activity.linkActivated" :href="activity.link" class="deep-purple darken-2 white--text font-weight-bold mt-5">CONOCE MÁS</v-btn>
              </v-col>
            </v-row>
          </v-img>
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HorizontalDivider from "../Utils/HorizontalDivider";

export default {
  components: {
    HorizontalDivider
  },
  data() {
    return {
      activities: [
        {
          img:
            "https://www.capital.cl/wp-content/uploads/2015/07/ted_talks_charlas.jpg",
          name: "Charlas TED 2019",
          link: 'https://www.google.es/',
          linkActivated: true,
          description:
            "Informáte más para poder acceder a estas charlas mensuales que te brinda la comunidad."
        },
        {
          img:
            "https://www.dijitalfarm.com/wp-content/uploads/2018/01/jon-parks-agile-marketing-workshop-1080x675.jpg",
          name: "Día internacional de mujer 2019",
          link: 'https://www.google.es/',
          linkActivated: true,
          description:
            "Mediante este evento se promovió y se mostró el impacto de la mujer en el área de la tecnología. Siendo este evento dirigido por Teresa Camacho. "
        },
        {
          img:
            "https://images.ctfassets.net/3cttzl4i3k1h/39iTil6Z8coiC4qwoI6AeS/2ba0079ff86d1633fb42d8cd6576e664/IMG_6761.jpg?w=1400&h=600&q=80&fm=&f=&fit=fill",
          name: "Día de la mujer boliviana 2019",
          link: 'https://www.google.es/',
          linkActivated: true,
          description:
            "Este evento esta organizado por todas las comunidades de Cochabamba. Se desarrolló el 12 de octubre teniendo como oradores de la comunidad a Paola Silvera y Adriana Berrios."
        },
        {
          img: "https://miro.medium.com/max/6000/0*RvHATxQafaryTA0a",
          name: "Taller de liderazgo",
          link: 'https://www.google.es/',
          linkActivated: true,
          description:
            "Paola Crespo es la encargada de dirigir esta actividad invitandólos a compartir el 25 de agosto de 2017."
        },
        {
          img:
            "https://www.mendix.com/wp-content/uploads/blog-ideal-scrum-team-composition.jpg",
          name: "Programa de prevención ginecológica",
          link: '',
          linkActivated: false,
          description:
            "Es muy importante compartir estos temas para poder prevenir daños en las mujeres, los esperamos el 31 de agosto de 2017."
        },
        {
          img: "https://hackernoon.com/hn-images/1*mxhWy2lwPrRLIff5Kh9YTg.jpeg",
          name: "WIT coffee",
          link: 'https://www.google.es/',
          linkActivated: true,
          description:
            "Es importante tener charlas para compartir, en esta oportunidad te invitamos el 8 de septiembre de 2017 a compartir con nosotras y nuestras invitadas:  Lourdes Oropeza (Ingeniería petrolera), Agatha Da Silva (Ingeniería industrial y de sistemas) y Cecilia Tapia (Ingeniería electromecánica)."
        }
      ],
      isActive: false
    };
  }
};
</script>

<style scoped>

.image {
  filter: brightness(0.6);
}

</style>
