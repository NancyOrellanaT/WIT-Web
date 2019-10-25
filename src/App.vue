<template>
  <v-app>
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
  }
};
</script>
