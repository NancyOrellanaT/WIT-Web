<template>
  <v-app id="app">
    <v-content>
      <router-view/>
      <Navbar/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");

#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-font {
  color: #D81B60;
}

</style>
