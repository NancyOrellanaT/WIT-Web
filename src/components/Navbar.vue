<template>
  <div v-scroll="onScroll">
    <v-app-bar elevate-on-scroll :color="color" :dark="fontColorDark" fixed>
      <v-toolbar-side-icon>
        <v-img class="mr-3" src="@/assets/LogoWIT.png" height="30px" width="40px"></v-img>
      </v-toolbar-side-icon>
      <v-btn id="info-box" text @click="toTop">
        <v-toolbar-title>
          <span to="/">Women in Technology</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="toTop" v-for="(option, i) in options" :key="i">
        <span @click="goTo(option.to)" :color="fontColor">{{ option.name }}</span>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    color: "transparent",
    fontColorDark: true,
    options: [
      {
        name: "NUESTRO EQUIPO",
        to: "/about-us",
        icon: ""
      },
      {
        name: "ACTIVIDADES",
        to: "/stories",
        icon: ""
      },
      {
        name: "CONTÁCTANOS",
        to: "/contact",
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
      this.$route.push(route);
    }
  }
};
</script>


<style>
</style>