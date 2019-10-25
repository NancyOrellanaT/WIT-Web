<template>
  <v-app>
    <v-content>
      <router-view/>
      <Navbar/>
      <Vision/>
      <Footer/>
    </v-content>
  </v-app>
</template>

<script>
import Vision from './components/Vision';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default {
  name: "App",
  components: {
    Vision,
    Footer,
    Navbar,
  }
};
</script>
