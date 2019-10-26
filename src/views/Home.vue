<template>
  <div class="home">
    <Carousel />
    <Metricas />
    <Vision />
    <Mision />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Metricas from '@/components/Metricas.vue'
// import CoverMain from './components/CoverMain'
import Vision from '@/components/Vision';
import Mision from '@/components/Mision'

export default {
  name: 'home',
  components: {
    Carousel,
    Metricas,
    Vision,
    Mision
    // CoverMain,
  }
}
</script>