<template>
  <div>
    <v-container class="grey lighten-5 my-6">
      <h1 class="ma-5 main-font" align="center" justify="center">Historias</h1>
      <h3 class="font-weight-light " align="center" justify="center">Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis ultricies ornare tristique habitasse tellus felis rhoncus. Dapibus montes venenatis quam himenaeos hendrerit molestie lacus nisl habitant blandit id, litora congue enim rhoncus</h3>
      <HorizontalDivider class="mb-6"/>
      <v-row no-gutters>
        <v-col class="pa-1" v-for="(member, i) in members" :key="i" cols="12" sm="4" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4" width="100%" height="300px">
              <v-img
                :aspect-ratio="1.4"
                src="https://www.ficargentina.org/wp-content/uploads/2017/12/blank-profile-picture-973460_640.png"
              >
                <v-row align="center" justify="center" class="align-bottom">
                  <v-card
                    v-if="!hover"
                    elevation="7"
                    class="pa-3 ma-5"
                    color="pink darken-1"
                    width="150px"
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
                    <h4 class="pa-5 font-weight-regular">{{ member.storie }}</h4>
                  </div>
                </v-expand-transition>
              </v-img>
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
          img: "",
          name: "Elena Ortega",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient, primis massa fames arcu per quis."
        },
        {
          img: "",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "",
          name: "Aaron Marin",
          occupation: "Desarrollador",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "",
          name: "Ainara Martinez",
          occupation: "Ing. Electrónica",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "",
          name: "Teresa Castillo",
          occupation: "Desarrollador",
          storie:
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
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.main-font {
  font-family: "Quicksand", sans-serif;
}

.align-bottom {
  margin-top: 49%;
}
</style>