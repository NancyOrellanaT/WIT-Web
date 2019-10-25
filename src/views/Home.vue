<template>
  <div class="home">
    <Vision />
    <Mision />
  </div>
</template>

<script>
// @ is an alias to /src
import Vision from '@/components/Vision'
import Mision from '@/components/Mision'
export default {
  name: 'home',
  components: {
    Vision,
    Mision,
  }
}
</script>