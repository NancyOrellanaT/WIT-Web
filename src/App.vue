<template>
  <v-app>
    <Carousel />
    <HelloWorld />
  </v-app>
</template>

<script>

import Carousel from './components/Carousel'
// import CoverMain from './components/CoverMain'
import HelloWorld from './components/HelloWorld'

export default {
  name: "App",
  components: {
    Carousel,
    // CoverMain,
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>
