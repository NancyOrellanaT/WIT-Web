<template>
  <div>
    <v-container class="grey lighten-5 my-6">
      <h1 id="labelMembersTitle" class="ma-5 main-font" align="center" justify="center">Miembros</h1>
      <h3
        id="labelMembersDescription"
        class="font-weight-light"
        align="center"
        justify="center"
      >WIT es una iniciativa de NICE inContact cuyo objetivo es potenciar las carreras de las mujeres que trabajan en tecnología, asi como motivarlas e incentivarlas para que exista una mayor participación de todas ellas en esta área.</h3>
      <HorizontalDivider class="mb-6" />
      <v-row no-gutters>
        <v-col class="pa-1" v-for="(member, i) in members" :key="i" cols="12" sm="4" md="4" xs="6">
          <v-hover v-slot:default="{ hover }">
            <v-card :id="'cardMember' + i" class="mx-auto" color="grey lighten-4" width="100%">
              <v-img :id="'imageCardMember' + i" :aspect-ratio="1.4" :src="member.img">
                <v-row align="center" justify="center" class="align-bottom">
                  <v-card
                    v-if="!hover"
                    elevation="7"
                    class="pa-3 ma-5 mb-3"
                    color="deep-purple darken-3"
                    width="50%"
                  >
                    <h5
                      :id="'nameMember' + i"
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
                    <h3
                      :id="'labelMemberName' + i"
                      class="mt-5 name-label"
                    >{{ convertNameToUpperCase(member.name) }}</h3>
                    <h3 :id="'labelMemberOccupation' + i" class="ocuppation-label">{{ member.occupation }}</h3>
                    <h4
                      :id="'labelMemberDescription' + i"
                      class="pa-5 font-weight-regular"
                    >{{ member.description }}</h4>
                  </div>
                </v-expand-transition>
              </v-img>
              <v-card-text class="white" align="center" justify="center">
                <v-btn
                  :id="'buttonMemberLinkedin' + i"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="primary"
                  text
                >
                  <v-icon dark>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  :id="'buttonMemberTwitter' + i"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="light-blue darken-1"
                  text
                >
                  <v-icon dark>mdi-twitter</v-icon>
                </v-btn>
                <v-btn :id="'buttonMemberFacebook' + i" class="mx-2" fab small color="indigo" text>
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
import HorizontalDivider from "../Utils/HorizontalDivider";

export default {
  components: {
    HorizontalDivider
  },
  data() {
    return {
      color: "",
      members: [
        {
          img:
            "https://www.catalunyavoluntaria.cat/wp-content/uploads/2017/07/3-600x400.jpg",
          name: "Elena Ortega",
          occupation: "Ingeniería de Calidad",
          description:
            "Le encanta colaborar y mostrar que la tecnología es una gran oportunidad de mejorar el mundo."
        },
        {
          img:
            "http://memorialmoravianvi.org/wp-content/uploads/2015/01/DSC_6454web-600x400.jpg",
          name: "Ana Moya",
          occupation: "Ingeniería de Calidad",
          description:
            "Trabaja durante 10 años en el área y quiere mostrar que todos somos capaces de alcanzar nuestros objetivos."
        },
        {
          img:
            "https://www.catalunyavoluntaria.cat/wp-content/uploads/2017/07/4-600x400.jpg",
          name: "Aaron Marin",
          occupation: "Desarrollador",
          description:
            "Busca mejorar la sociedad mediante la tecnología."
        },
        {
          img:
            "https://www.catalunyavoluntaria.cat/wp-content/uploads/2017/07/5-600x400.jpg",
          name: "Ainara Martinez",
          occupation: "Ing. Electrónica",
          description:
            "Considera la electrónica herramienta fundamental para colaborar en el desarrollo del mundo."
        },
        {
          img:
            "https://www.promoteukraine.org/wp-content/uploads/2019/05/Anna-Melenchuk-500x400.jpeg",
          name: "Teresa Castillo",
          occupation: "Desarrollador",
          description:
            "Busca fomentar a que mujeres se atrevan a esta aventura que esta llena de emociones."
        },
        {
          img:
            "https://www.biosfera.org/wp-content/uploads/2017/07/Javi-600x400.png",
          name: "Tom Castillo",
          occupation: "Desarrollador",
          description:
            "Es desarrollador desde el 2015 colaborando para que exista mayor cantidad de mujeres en la tecnología."
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

.name-label {
  font-size: 1em;
}

.ocuppation-label {
  font-size: 100%;
}

</style>