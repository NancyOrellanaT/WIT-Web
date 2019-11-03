<template>
  <div class="home">
    <Carousel />
    <Metrics />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
import Metrics from '@/components/Metrics.vue'
/*import Vision from '@/components/Vision';
import Mision from '@/components/Mision'*/

export default {
  name: 'home',
  components: {
    Carousel,
    Metrics
    /*Vision,
    Mision
        
    <Vision />
    <Mision />*/
  }
}
</script>