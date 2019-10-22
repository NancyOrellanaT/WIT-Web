<template>
  <v-footer
    dark
    padless
  >


    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="pink darken-1" >
        <v-container class="pink darken-1" >
          <v-row no-gutters >
            <v-col>
              <v-card
                class="transparent"
                outlined
                tile
              >
                <v-layout justify-center>
                 <strong>¡Escribenos a nuestras redes sociales!</strong>
                  <v-spacer></v-spacer>
                </v-layout>
              </v-card>
              <v-card
                class="transparent"
                outlined
                tile
              >
                <v-layout justify-center>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    dark
                    icon
                  >
                    <v-icon size="24px">{{ icon }}</v-icon>
                  </v-btn>
                </v-layout>
             </v-card>  
            </v-col>

            <v-col>
              <v-card 
                class="transparent"
                outlined
                tile
              >
                <v-layout justify-center>
                  <strong >WIT</strong>
                </v-layout>
              </v-card>
            </v-col>
            <v-col>
              <v-card
                class="transparent"
                outlined
                tile
              >
               <v-layout justify-center>
                Third
                 </v-layout>
              </v-card>
            </v-col>
          </v-row>
        </v-container>


        
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>WIT</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-google-plus',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>