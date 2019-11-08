<template>
  <div class="mb-12">
    <v-row
      v-for="(activity, i) in Activities"
      :key="i"
      :class="i === 1 ? 'mb-6' : ''"
      class="mb-6"
      justify="center"
      no-gutters
    >
      <v-col
        cols="12"
        md="11"
      >
        <HorizontalDivider />
        <v-lazy
          v-model="isActive"
          :options="{
          threshold: 1.0
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-img class="image"
            :id="'imageActivity' + i"
            :aspect-ratio="1.4"
            :src="activity.img"
          >
            <v-row align="center" class="pa-2 fill-height">
              <v-col>
                <v-layout column align-center justify-center class="text-xs-center">
                <h2 :id="'labelActivityTitle' + i" align="center" justify="center" class="header ma-5 main-font mb-2 text-center">
                {{ activity.name }}
                </h2>
                <h3 class="font-weight-light mb-4 white--text text-center"
                  :id="'labelActivityDescription' + i"
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
import HorizontalDivider from '../Utils/HorizontalDivider'

export default {
  components: {
    HorizontalDivider
  },
  data() {
    return {
      Activities: [
        {
          img: "https://miro.medium.com/max/6000/0*RvHATxQafaryTA0a",
          name: "Actividad 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient, primis massa fames arcu per quis."
        },
        {
          img: "https://www.mendix.com/wp-content/uploads/blog-ideal-scrum-team-composition.jpg",
          name: "Actividad 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://hackernoon.com/hn-images/1*mxhWy2lwPrRLIff5Kh9YTg.jpeg",
          name: "Actividad 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://www.dijitalfarm.com/wp-content/uploads/2018/01/jon-parks-agile-marketing-workshop-1080x675.jpg",
          name: "Actividad 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis. Eros nam ac aptent etiam felis parturient"
        },
        {
          img: "https://images.ctfassets.net/3cttzl4i3k1h/39iTil6Z8coiC4qwoI6AeS/2ba0079ff86d1633fb42d8cd6576e664/IMG_6761.jpg?w=1400&h=600&q=80&fm=&f=&fit=fill",
          name: "Actividad 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit diam, enim mi eget dis interdum dictum mattis."
        }
      ],
      isActive: false,
    };
  },
}
</script>

<style scoped>
.image {
  filter: brightness(0.5);
}

</style>
