<template>
  <v-container fluid class="my-12">
    <h2 align="center"> Comunidades amigas</h2>
    <HorizontalDivider />
    <v-row no-gutters>
      <v-col>
        <v-img 
        :src="images.src1"
        contain
        height="60"
        @click="goToWebSite(webSites.gdgCochabamba)"
        >
        </v-img>
        <v-img 
        :src="images.src2"
        height="80"
        contain
        @click="goToWebSite(webSites.technovation)"
        >
        </v-img>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-img
        :src="images.src3"
        height="80"
        contain
        @click="goToWebSite(webSites.gp4Tech)"
        >
        </v-img>
      </v-col>
      <v-col>
        <v-img
        :src="images.src4"
        height="80"
        contain
        @click="goToWebSite(webSites.girlsHack)"
        >
        </v-img>
      </v-col>
      <v-col>
        <v-img
        :src="images.src6"
        height="100"
        contain
        @click="goToWebSite(webSites.pyladies)"
        >
        </v-img>
      </v-col>
      <v-col>
        <v-img
        :src="images.src5"
        height="100"
        contain
         @click="goToWebSite(webSites.womenTechmakers)"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HorizontalDivider from './HorizontalDivider'

export default {
  components: {
    HorizontalDivider
  },
 data: () => ({
    images: {
      src1: require('@/assets/logo1.png'),
      src2: require('@/assets/logo2.png'),
      src3: require('@/assets/logo3.png'),
      src4: require('@/assets/logo4.png'),
      src5: require('@/assets/logo5.jpg'),
      src6: require('@/assets/logo6.png') 
    },
    webSites: {
      gp4Tech: 'https://gp4tech.com/',
      gdgCochabamba: 'https://www.meetup.com/es/GDGCochabamba/',
      technovation: 'https://www.technovationbolivia.org/',
      womenTechmakers: 'https://www.facebook.com/WomenTechmakersCochabamba/',
      girlsHack: 'https://www.facebook.com/pg/girlshackumss/posts/?ref=page_internal',
      pyladies: 'https://www.facebook.com/pages/PyLadies-Cochabamba/705633759851848'
    }
  }),
  methods: {
    goToWebSite (url) {
      window.location = url
    }
  }
}
</script>