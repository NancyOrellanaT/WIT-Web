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
import Carousel from '@/components/Carousel.vue'
import Metrics from '@/components/Metrics.vue'
import StorieCards from '@/components/StorieCards.vue'
import MisionParallax from '@/components/MisionParallax.vue'
import Vision from '@/components/Vision'

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