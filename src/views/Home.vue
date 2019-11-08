<template>
  <div class="home">
    <Carousel />
    <Metrics />
    <MisionParallax />
    <StorieCards />
    <Vision />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Home/Carousel.vue'
import Metrics from '@/components/Home/Metrics.vue'
import StorieCards from '@/components/Home/StorieCards.vue'
import MisionParallax from '@/components/Home/MisionParallax.vue'
import Vision from '@/components/Home/Vision'

export default {
  name: 'home',
  components: {
    Carousel,
    Metrics,
    StorieCards,
    MisionParallax,
    Vision
  }
}
</script>