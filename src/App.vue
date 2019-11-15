<template>
  <v-app id="app">
    <v-content>
      <router-view/>
      <Navbar v-if="showComponent"/>
      <Footer v-if="showComponent"/>
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
  computed: {
    showComponent () {
      return this.$route.path !== '/login'
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

#app {
  font-family: "Quicksand", sans-serif;
  text-align: center;
  color: #000000;
}
.main-font {
  color: #D81B60;
}

.header {
  font-size: 3em;
}

@media (min-width: 600px) {
  .name-font {
    font-size: 1em;
  }

  .description-font {
    font-size: 1.5vw;
  }
}

@media (min-width: 800px) {
  .name-font {
    font-size: 1em;
  }

  .description-font {
    font-size: 1vw;
  }
}

</style>
