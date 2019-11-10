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
import Carousel from '@/components/home/Carousel.vue'
import Metrics from '@/components/home/Metrics.vue'
import StorieCards from '@/components/home/StorieCards.vue'
import MisionParallax from '@/components/home/MisionParallax.vue'
import Vision from '@/components/home/Vision'

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