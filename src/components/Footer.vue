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
      <v-img src="../assets/footer.jpg">
          <v-row no-gutters >
            <v-col>
              <v-card
                class="transparent"
                outlined
                tile
                xs6
              >
                <v-layout class="pa-5" justify-center>
                 <strong>MENU</strong>
                </v-layout>
                <v-layout justify-center>
                  <v-btn text>
                    <router-link tag="span" to="/">Women in Technology</router-link>
                  </v-btn>
                </v-layout>
                <v-layout justify-center>
                  <v-btn text>
                    <router-link tag="span" to="/contact">Contact</router-link>
                  </v-btn>
                </v-layout>
              </v-card>
            </v-col>

            <v-col>
              <v-card 
                class="transparent"
                outlined
                tile
                xs6
              >
                <v-layout class="pt-5" justify-center>
                  <strong>WIT</strong>
                </v-layout>
                <v-layout justify-center>
                  Av. America #5454
                </v-layout>
                <v-layout justify-center>
                  4444444-4444445
                </v-layout>
                <v-layout justify-center>
                  niceincontact@niceincontact.com
                </v-layout>
              </v-card>
                <v-card
                  class="transparent"
                  outlined
                  tile
                >
                  <v-layout justify-center>
                    <v-btn href="https://www.facebook.com/NICEinContact/" class="mx-2" fab dark small color="indigo">
                      <v-icon dark>mdi-facebook</v-icon>
                    </v-btn>
                    <v-btn href="https://twitter.com/incontact?lang=es" class="mx-2" fab dark small color="cyan">
                      <v-icon dark>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn href="https://www.instagram.com/weareniceincontact/" class="mx-2" fab dark small color="pink darken-1">
                      <v-icon dark>mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn href="https://www.linkedin.com/company/niceincontact" class="mx-2" fab dark small color="blue">
                      <v-icon dark>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn href="https://www.youtube.com/c/niceincontact" class="mx-2" fab dark small color="red">
                      <v-icon dark>mdi-youtube</v-icon>
                    </v-btn>
                  </v-layout>
              </v-card>  
            </v-col>
            <v-col>
              <v-card
                class="transparent"
                outlined
                tile
                xs6
              >
               <v-layout class="pa-5 px-10" justify-center>
                <strong>Ingresa tu correo electronico para recibir noticias:</strong>
                </v-layout>
                <v-layout class="px-10" justify-center>
                 <v-text-field
                              label="Email"
                              hint="example@gmail.com"
                              persistent-hint
                              outlined
                              v-model="email"
                            :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </v-layout>
                <v-layout class="px-10 pb-5" justify-end>
                    <v-btn color="pink darken-1">Registrarme</v-btn>
                  </v-layout>
              </v-card>
            </v-col>
          </v-row>


        
      </v-img>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data () {
      return {
        title: 'Preliminary report',
        email: '',
        rules: {
          required: value => !!value || 'Requerido',
          counter: value => value.length <= 20 || 'Max 20 caracteres',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'e-mail invalido.'
          },
        },
      }
    },
  }
</script>