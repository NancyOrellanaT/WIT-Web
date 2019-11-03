<template>
  <div>
    <v-container class="grey lighten-5 my-6">
      <h1 class="ma-5 main-font" align="center" justify="center">Miembros</h1>
      <h3 class="font-weight-light " align="center" justify="center">Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis ultricies ornare tristique habitasse tellus felis rhoncus. Dapibus montes venenatis quam himenaeos hendrerit molestie lacus nisl habitant blandit id, litora congue enim rhoncus</h3>
      <HorizontalDivider class="mb-6"/>
      <v-row no-gutters>
        <v-col class="pa-1" v-for="(member, i) in members" :key="i" cols="12" sm="4" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" width="100%">
              <v-img
                :aspect-ratio="1.4"
                :src="member.img"
              >
                <v-row align="center" justify="center" class="align-bottom">
                  <v-card
                    v-if="!hover"
                    elevation="7"
                    class="pa-3 ma-5"
                    color="pink darken-1"
                    width="50%"
                  >
                    <h5
                      class="mx-lg-auto white--text"
                      align="center"
                      justify="center"
                    >{{ member.name }}</h5>
                  </v-card>
                </v-row>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="transition-fast-in-fast-out deep-purple darken-2 v-card--reveal white--text"
                    style="height: 100%;"
                    align="center"
                    justify="center"
                  >
                    <h3 class="mt-5">{{ convertNameToUpperCase(member.name) }}</h3>
                    <h3>{{ member.occupation }}</h3>
                    <h4 class="pa-5 font-weight-regular">{{ member.description }}</h4>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="white" align="center" justify="center">
                <v-btn class="mx-2" fab dark small color="primary" text>
                  <v-icon dark>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="light-blue darken-1" text>
                  <v-icon dark>mdi-twitter</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab small color="indigo" text>
                  <v-icon dark>mdi-facebook</v-icon>
                </v-btn>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HorizontalDivider from './HorizontalDivider'

export default {
  components: {
    HorizontalDivider
  },
  data() {
    return {
      color: "",
      members: [
        {
          img: "https://www.catalunyavoluntaria.cat/wp-content/uploads/2017/07/3-600x400.jpg",
          name: "Elena Ortega",
          occupation: "Ingeniería de Calidad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient, primis massa fames arcu per quis."
        },
        {
          img: "http://memorialmoravianvi.org/wp-content/uploads/2015/01/DSC_6454web-600x400.jpg",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://www.catalunyavoluntaria.cat/wp-content/uploads/2017/07/4-600x400.jpg",
          name: "Aaron Marin",
          occupation: "Desarrollador",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://www.catalunyavoluntaria.cat/wp-content/uploads/2017/07/5-600x400.jpg",
          name: "Ainara Martinez",
          occupation: "Ing. Electrónica",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://www.promoteukraine.org/wp-content/uploads/2019/05/Anna-Melenchuk-500x400.jpeg",
          name: "Teresa Castillo",
          occupation: "Desarrollador",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis."
        },
        {
          img: "https://www.biosfera.org/wp-content/uploads/2017/07/Javi-600x400.png",
          name: "Tom Castillo",
          occupation: "Desarrollador",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis."
        }
      ]
    };
  },
  methods: {
    convertNameToUpperCase(name) {
      return name.toUpperCase();
    }
  }
};
</script>

<style scoped>

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.align-bottom {
  margin-top: 49%;
}
</style>