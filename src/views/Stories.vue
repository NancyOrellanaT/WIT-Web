<template>
  <div>
    <Stories />
  </div>
</template>

<script>
import Stories from "@/components/StorieCards.vue";

export default {
  name: "stories",
  components: {
    Stories
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
