<template>
  <div id="app" v-scroll="onScroll">
    <v-app-bar :color='col' app>
      <v-btn id="info-box" text @click="toTop">
        <v-toolbar-title class="headline text-uppercase">
          <span>
            <router-link tag="span" to="/">Women in Technology</router-link>
          </span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="toTop">
        <router-link tag="span" to="/about-us">About Us</router-link>
      </v-btn>
      <v-btn text @click="toTop">
        <router-link tag="span" to="/stories">Stories</router-link>
      </v-btn>
      <v-btn text @click="toTop">
        <router-link tag="span" to="/contact">Contact</router-link>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    fab: false,
    col: 'transparent'
  }),

  methods: {
    onScroll() {
      if (typeof window === "undefined") return;
      if(window.pageYOffset > 200){
          this.col = "blue";
      }else{
          this.col = 'transparent';
      }
    },

    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>


<style>
</style>