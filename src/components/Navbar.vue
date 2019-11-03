<template>
  <div v-scroll="onScroll">
    <v-app-bar elevate-on-scroll :color="color" :dark="fontColorDark" fixed>
      <v-btn id="info-box" text @click="toTop">
        <v-img class="mr-3" src="@/assets/LogoWIT.png" height="30px" width="40px"></v-img>
        <v-toolbar-title>
          <span @click="goTo('/')">Women in Technology</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="toTop" v-for="(option, i) in options" :key="i">
          <span @click="goTo(option.route)" :color="color">{{ option.text }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    color: "transparent",
    fontColorDark: true,
    dialog: false,
    options: [
      {
        text: "NUESTRO EQUIPO",
        route: "/about-us",
        icon: ""
      },
      {
        text: "ACTIVIDADES",
        route: "/activities",
        icon: ""
      },
      {
        text: "CONTÁCTANOS",
        route: "/",
        icon: ""
      }
    ]
  }),

  methods: {
    onScroll() {
      if (typeof window === "undefined") return;
      if (window.pageYOffset > window.innerHeight / 2) {
        this.color = "white";
        this.fontColorDark = false;
      } else {
        this.color = "transparent";
        this.fontColorDark = true;
      }
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    goTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<style>
</style>