<template>
  <div v-scroll="onScroll">
    <v-app-bar id="appbar" elevate-on-scroll :color="color" :dark="fontColorDark" fixed>
      <v-btn id="buttonAppbarToHome" text @click="toTop">
        <v-img class="mr-3" src="@/assets/communitiesLogos/LogoWIT.png" height="20px" width="30px"></v-img>
        <v-toolbar-title id="labelAppbarTitle">
          <span @click="goTo('/')" class="font-navbar">Women in Technology</span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text @click="toTop" v-for="(option, i) in options" :key="i" :id="option.id">
          <span @click="goTo(option.route)" :color="color">{{ option.text }}</span>
        </v-btn>
      </v-toolbar-items>
      <v-btn id="buttonNavbarOpenDrawerMenu" icon class="hidden-md-and-up" @click="sidebar = !sidebar">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" fixed>
      <v-list dense>
        <v-list-item v-for="(option, i) in options" :key="i" link :to="option.route" @click="toTop()" :id="option.id">
          <v-list-item-icon>
            <v-icon :id="option.idIcon">{{ option.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title :id="option.idText">{{ option.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    color: "transparent",
    fontColorDark: true,
    sidebar: false,
    options: [
      {
        id: "buttonAppbarOurTeam",
        idText: 'titleNavigationDrawerOurTeam',
        text: "NUESTRO EQUIPO",
        route: "/about-us",
        idIcon: 'iconNavigationDrawerOurTeam',
        icon: "mdi-face"
      },
      {
        id: "buttonAppbarActivities",
        idText: 'titleNavigationDrawerActivities',
        text: "ACTIVIDADES",
        route: "/activities",
        idIcon: 'iconNavigationDrawerActivities',
        icon: "mdi-home"
      },
      {
        id: "buttonAppbarContactUs",
        idText: 'titleNavigationDrawerOurContactUs',
        text: "CONTÁCTANOS",
        route: "/contact",
        idIcon: 'iconNavigationDrawerContactUs',
        icon: "mdi-phone"
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
.font-navbar {
  font-size: 0.7em;
}
</style>