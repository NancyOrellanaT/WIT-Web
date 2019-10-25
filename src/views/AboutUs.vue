<template>
    <div class="about">
    <Communities/>
  </div>
</template>

<script>
import Communities from '@/components/Communities'
export default {
  name: "about-us",
  components: {
    Communities,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Lobster|Montserrat+Alternates|Quicksand&display=swap");
.image {
  filter: brightness(0.95);
}
.main-font {
  font-family: "Quicksand", sans-serif;
  font-size: 3em;
  color: white;
}
</style>