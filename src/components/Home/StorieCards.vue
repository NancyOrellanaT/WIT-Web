<template>
  <div class="mb-8">
    <v-container class="grey lighten-5 my-12">
      <h1 id="labelTestimonialsTitle" class="mb-5 main-font" align="center" justify="center">Testimonios</h1>
      <h3 id="labelTestimonialsDescription" class="font-weight-light second-font" align="center" justify="center">¡Todos son bienvenidos! Te presentamos algunos testimonios</h3>
      <HorizontalDivider class="mb-6"/>
      <v-row no-gutters class="second-font">
        <v-col class="pa-1" v-for="(member, i) in members" :key="i" cols="12" sm="4" md="4">
          <v-hover v-slot:default="{ hover }">
            <v-card :id="'cardTestimonyMember' + i" class="mx-auto" color="grey lighten-4">
              <v-img
                :id="'imgTestimony' + i"
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
                      :id="'nameTestimony' + i"
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
                    <h3 class="mt-5" :id="'labelHoverName' + i">{{ convertNameToUpperCase(member.name) }}</h3>
                    <h4 class="pa-5 font-weight-regular" :id="'labelHoverTestimony' + i">{{ member.storie }}</h4>
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
import HorizontalDivider from '../utils/HorizontalDivider'

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
          storie:
            "La comunidad fue muy cooperativa para que pueda aprender más sobre programación. Lo cual hoy en día me encanta."
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2377-Lauren-600x400.jpg",
          name: "Ana Moya",
          storie:
            "Asistí a las actividades de la comunidad y la verdad me gustaron mucho, es una gran oportunidad de aprender."
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/05/RC_2349-Katrina-600x400.jpg",
          name: "Ana Moya",
          storie:
            "Perdí el miedo a programar gracias a la ayuda que me brindaron los miembros de la comunidad."
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2338Angela-600x400.jpg",
          name: "Elena Ortega",
          storie:
            "Gracias a toda la colaboración de la comunidad decidí estudiar ingeniería en sistemas, porque encontré lo que realmente me gustaba."
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/09/RC_2246-Deirdre-600x400.jpg",
          name: "Luana Guza",
          storie:
            "Gracias a todas las actividades, ahora soy miembro activo de la comunidad. ¡Los invito a compartir una gran experiencia!"
        },
        {
          img: "https://adadevelopersacademy.org/wp-content/uploads/2012/04/RC_2386-Stephanie-600x400.jpg",
          name: "Irma Soruco",
          storie:
            "Con todo lo aprendido aprendí mucho sobre tecnología y gracias a la comunidad hoy puedo aplicarlo a mi trabajo."
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
