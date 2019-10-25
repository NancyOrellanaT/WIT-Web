<template>
  <div class="home">
    <Carousel />
    <Vision />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
// import CoverMain from './components/CoverMain'
import Vision from '@/components/Vision';

export default {
  name: 'home',
  components: {
    Carousel,
    Vision
    // CoverMain,
  }
}
</script>
