<template>
  <v-footer id="footer" dark padless>
    <v-card class="flex" flat tile>
      <v-img id="imageFooter" src="@/assets/footer.jpg">
        <v-row no-gutters>
          <v-col>
            <v-card class="transparent" outlined tile xs6>
              <v-layout class="pa-5" justify-center>
                <strong id="labelFooterMenu">MENU</strong>
              </v-layout>
              <v-layout justify-center>
                <v-btn text id="buttonFooterWIT">
                  <router-link tag="span" to="/">Women in Technology</router-link>
                </v-btn>
              </v-layout>
              <v-layout justify-center>
                <v-btn text id="buttonFooterContact">
                  <router-link tag="span" to="/contact">Contact</router-link>
                </v-btn>
              </v-layout>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="transparent" outlined tile xs6>
              <v-layout class="pt-5" justify-center>
                <strong id="labelFooterWIT">WIT</strong>
              </v-layout>
              <v-layout justify-center id="labelFooterAddress">Av. America #5454</v-layout>
              <v-layout justify-center id="labelFooterPhone">4444444-4444445</v-layout>
              <v-layout justify-center id="labelFooterEmail">niceincontact@niceincontact.com</v-layout>
            </v-card>
            <v-card class="transparent" outlined tile>
              <v-layout justify-center>
                <v-btn
                  id="buttonFooterFacebook"
                  href="https://www.facebook.com/NICEinContact/"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="indigo"
                >
                  <v-icon dark>mdi-facebook</v-icon>
                </v-btn>
                <v-btn
                  id="buttonFooterTwitter"
                  href="https://twitter.com/incontact?lang=es"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="cyan"
                >
                  <v-icon dark>mdi-twitter</v-icon>
                </v-btn>
                <v-btn
                  id="buttonFooterInstagram"
                  href="https://www.instagram.com/weareniceincontact/"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="pink darken-1"
                >
                  <v-icon dark>mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  id="buttonFooterLinkedin"
                  href="https://www.linkedin.com/company/niceincontact"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="blue"
                >
                  <v-icon dark>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn
                  id="buttonFooterYoutube"
                  href="https://www.youtube.com/c/niceincontact"
                  class="mx-2"
                  fab
                  dark
                  small
                  color="red"
                >
                  <v-icon dark>mdi-youtube</v-icon>
                </v-btn>
              </v-layout>
            </v-card>
          </v-col>
          <v-col>
            <v-card class="transparent" outlined tile xs6>
              <v-layout class="pa-5 px-10" justify-center>
                <strong id="labelFooterSignin">Ingresa tu correo electronico para recibir noticias:</strong>
              </v-layout>
              <v-layout class="px-10" justify-center>
                <v-form ref="form">
                  <v-text-field
                    id="textfieldFooterEmail"
                    clearable
                    label="Email"
                    hint="example@gmail.com"
                    persistent-hint
                    outlined
                    v-model="message.email"
                    :rules="[rules.required, rules.email]"
                  ></v-text-field>
                </v-form>
              </v-layout>
              <v-layout class="px-10 pb-5" justify-end>
                <v-btn
                  id="buttonFooterSignin"
                  color="pink dark -1"
                  dark
                  @click.stop="checkEmail()"
                >Registrarme</v-btn>
                <v-dialog id="dialogSignin" v-model="dialog" scrollable max-width="50%">
                  <v-card id="cardSignin">
                    <v-card-title
                      id="labelCardInterests"
                    >Selecciona los tópicos en los que te interesan</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text style="height: 300px;">
                      <v-container fluid>
                        <v-form>
                          <v-checkbox
                            id="checkboxCardActivities"
                            v-model="message.intereses"
                            label="Actividades"
                            value="actividades"
                            :rules="rulesCB"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            id="checkboxCardNews"
                            v-model="message.intereses"
                            label="Noticias"
                            value="noticias"
                            :rules="rulesCB"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            id="checkboxCardContests"
                            v-model="message.intereses"
                            label="Concursos"
                            value="concursos"
                            :rules="rulesCB"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            id="checkboxCardCuriosities"
                            v-model="message.intereses"
                            label="Curiosidades"
                            value="curiosidades"
                            :rules="rulesCB"
                            hide-details
                          ></v-checkbox>
                          <v-checkbox
                            id="checkboxCardOthers"
                            v-model="message.intereses"
                            label="Otros"
                            value="otros"
                            :rules="rulesCB"
                          ></v-checkbox>
                        </v-form>
                      </v-container>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        id="buttonCardClose"
                        color="pink lighten-3"
                        text
                        @click="dialog = false"
                      >Cerrar</v-btn>
                      <v-btn
                        :disabled="validate()"
                        id="buttonCardSend"
                        type="submit"
                        color="pink lighten-3"
                        text
                        @click="addMessage(); addMessageSnackbar(true)"
                      >Enviar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
              <v-snackbar
                id="snackbarFooterMessagge"
                :color="colorSnackbar"
                v-model="snackbar"
                :timeout="timeout"
              >
                {{ textSnackbar }}
                <v-btn color="white" text @click="snackbar = false">X</v-btn>
              </v-snackbar>
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
  data() {
    return {
      valid: false,
      full: false,
      dialogm1: "",
      dialog: false,
      snackbar: false,
      timeout: 2000,
      colorSnackbar: "",
      textSnackbar: "",
      title: "Preliminary report",
      email: "",
      rules: {
        required: value => !!value || "Requerido",
        counter: value => value.length <= 20 || "Max 20 caracteres",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "e-mail invalido.";
        }
      },
      messages: [],
      message: {
        email: "",
        intereses: ["otros"]
      }
    };
  },

  computed: {
    rulesCB() {
      return [
        this.message.intereses.length > 0 ||
          "At least one item should be selected"
      ];
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
    validate() {
      if (this.message.intereses.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    checkEmail() {
      if (this.validEmail(this.message.email)) {
        this.activateDialog();
      } else {
        this.addMessageSnackbar(false);
      }
    },
    validEmail(vtt) {
      const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(vtt) || false;
    },
    addMessage() {
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
            const error = result.details
              .map(detail => detail.message)
              .join(". ");
            this.error = error;
          } else {
            this.error = "";
            this.messages.push(result);
          }
        });
    },
    addMessageSnackbar(successful) {
      this.disableDialog();
      this.colorSnackbar = successful ? "green darken-2" : "red darken-2";
      this.textSnackbar = successful
        ? "¡Gracias por enviarnos tus preferencias!, pronto estaremos contactándonos contigo."
        : "¡Cuidado! Por favor asegurate de ingresar un e-mail invalido";
      this.snackbar = true;
      this.resetValidation();
    },
    activateDialog() {
      this.dialog = true;
    },
    disableDialog() {
      this.dialog = false;
    },
    resetValidation() {
      this.$refs.form.reset();
      this.messages.intereses = ["otros"];
    }
  }
};
</script>
