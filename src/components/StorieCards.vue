<template>
  <div class="mb-8">
    <v-container class="grey lighten-5 my-12">
      <h1 class="mb-5 main-font" align="center" justify="center">Testimonios</h1>
      <h3 class="font-weight-light second-font" align="center" justify="center">Lorem ipsum dolor sabitant blandit id, litora congue enim rhoncus</h3>
      <HorizontalDivider class="mb-6"/>
      <v-row no-gutters class="second-font">
        <v-col class="pa-1" v-for="(member, i) in members" :key="i" cols="12" sm="4" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card class="mx-auto" color="grey lighten-4">
              <v-img
                contain
                height="100%"
                width="100%"
                
                :src="member.img"
              >
                <v-row align="center" justify="center" class="align-bottom">
                  <v-card
                    v-if="!hover"
                    elevation="7"
                    class="pa-3"
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
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2290-Sahana-600x400.jpg",
          name: "Elena Ortega",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient, primis massa fames arcu per quis."
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2377-Lauren-600x400.jpg",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/05/RC_2349-Katrina-600x400.jpg",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2338Angela-600x400.jpg",
          name: "Elena Ortega",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient, primis massa fames arcu per quis."
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/09/RC_2246-Deirdre-600x400.jpg",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2386-Stephanie-600x400.jpg",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          storie:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
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