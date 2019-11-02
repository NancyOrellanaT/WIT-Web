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
                              v-model="message.email"
                            :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </v-layout>
                <v-layout class="px-10 pb-5" justify-end>
                  <v-dialog v-model="dialog" scrollable max-width="300px">
                    <template v-slot:activator="{ on }">
                      <v-btn color="pink dark -1" dark v-on="on">Registrarme</v-btn>
                    </template>
                    <v-card>
                      <v-card-title>Selecciona los topicos en los que tienes intereses</v-card-title>
                      <v-divider></v-divider>
                      <v-card-text style="height: 300px;">
                        <v-radio-group v-model="message.intereses[0]" column>
                          <v-radio label="Actividades" value="actividades"></v-radio>
                          <v-radio label="Noticias" value="noticias"></v-radio>
                          <v-radio label="Concursos" value="concursos"></v-radio>
                          <v-radio label="Curiosidades" value="curiosidades"></v-radio>
                        </v-radio-group>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-btn color="blue darken-1" text @click="dialog = false">Cerrar</v-btn>
                        <v-btn type="submit" color="blue darken-1" text @click="dialog = false; addMessage()">Enviar</v-btn>
                      </v-card-actions>
                    </v-card>
                   </v-dialog>
                  </v-layout>
              </v-card>
            </v-col>
          </v-row>
      </v-img>
    </v-card>
  </v-footer>
</template>

<script>
const API_URL = "http://localhost:4000/registros";

  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
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
        messages: [],
        message: {
          email: "",
          intereses: []
    }
      }
    },

    mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.messages = result;
      });
    },
    methods: {
    addMessage() {
      console.log(this.message);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.message),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          if (result.details) {
            // there was an error...
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = "";
            this.messages.push(result);
          }
        });
      }
    }
  }
</script>
