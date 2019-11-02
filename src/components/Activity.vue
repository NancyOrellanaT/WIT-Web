<template>
  <div>
    <v-row
      v-for="(activity, i) in Activities"
      :key="i"
      :class="n === 1 ? 'mb-6' : ''"
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="11"
      >
        <v-lazy
          v-model="isActive"
          :options="{
          threshold: .5
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-img class="image"
            :aspect-ratio="1.4"
            src="https://www.ficargentina.org/wp-content/uploads/2017/12/blank-profile-picture-973460_640.png"
          >
            <v-row align="center" class="pa-2 fill-height">
              <v-col>
                <v-layout column align-center justify-center class="text-xs-center">
                <h2 align="center" justify="center">
                {{ activity.name }}
                </h2>
                <h3 class="font-weight-light mb-4 text-center"
                  align="center"
                  justify="center"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                </v-layout>
              </v-col>
            </v-row>
          </v-img>
        </v-lazy>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Activities: [
        {
          img: "",
          name: "Actividad1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient, primis massa fames arcu per quis."
        },
        {
          img: "",
          name: "Actividad2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "",
          name: "Actividad3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "",
          name: "Actividad4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "",
          name: "Actividad5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis."
        }
      ]
    };
  },
}
</script>

<style scoped>
.image {
  filter: brightness(0.5);
}

</style>
