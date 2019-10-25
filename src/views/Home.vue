<template>
  <div class="home">
    <Carousel />
  </div>
</template>

<script>
// @ is an alias to /src
import Carousel from '@/components/Carousel.vue'
// import CoverMain from './components/CoverMain'

export default {
  name: 'home',
  components: {
    Carousel,
    // CoverMain,
  }
}
</script>
