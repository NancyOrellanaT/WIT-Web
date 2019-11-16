<template>
  <v-container id="containerContactFormPrincipal my-12 pa-12" fluid grid-list-md>
    <h1 id="labelContactOurOffices">Nuestras oficinas</h1>
    <HorizontalDivider />
    <v-layout row wrap>
      <v-flex class="mt-12 mx-5" fill-height xs12 sm5 md5>
        <v-card color="transparent">
          <gmap-map id="mapContact" class="map" :options="{gestureHandling: 'none'}" :center="center" :zoom="16">
            <gmap-marker
              title="Women in Technology Office"
              id="pointerContactMap"
              :position="position"
              @click="openInfoWindow()"
            >
              <GmapInfoWindow id="informationMapContact" :opened="openiw" @closeclick="openiw=false">
                Women in Technology
                <br />America #5454
              </GmapInfoWindow>
            </gmap-marker>
          </gmap-map>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card hover shaped id="cardFormContact" class="mt-12 contact-card" color="transparent">
          <v-layout justify-center>
            <v-card-title id="mainLabelFormContact" class="font-weight-black">CONTÁCTANOS</v-card-title>
          </v-layout>
          <v-card-subtitle id="subtitleFormaContact1" class="py-0">¡Bienvenido/a a nuestra comunidad!</v-card-subtitle>
          <v-card-subtitle
            class="py-0"
            id="subtitleFormaContact2"
          >Por favor mandanos tus sugerencias o comentarios para que podamos contactarnos contigo.</v-card-subtitle>
          <v-form
            class="formContactForm pd-12 pr-12 pl-12"
            id="formContact"
            ref="form"
            v-model="valid"
            :lazy-validation="lazy"
          >
            <v-text-field
              clearable
              id="textfieldContactNamefield"
              color="pink lighten-3"
              v-model="nombre"
              :counter="50"
              :rules="nameRules"
              label="Nombre"
              required
            ></v-text-field>

            <v-text-field
              clearable
              id="textfieldContactEmailfield"
              color="pink lighten-3"
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              clearable
              counter
              no-resize
              id="textfieldContactMessagefield"
              color="pink lighten-3"
              v-model="mensaje"
              :rules="messageRules"
              label="Mensaje"
              required
            ></v-textarea>

            <v-btn
              :disabled="!valid"
              color="deep-purple darken-2"
              id="buttonFormContact"
              class="mr-4 white--text"
              @click="validate(); addMessageSnackbar(true)"
            >ENVIAR</v-btn>
            <v-snackbar
              id="snackbarFooterMessagge"
              :color="colorSnackbar"
              v-model="snackbar"
              :timeout="timeout"
            >
              {{ textSnackbar }}
              <v-btn color="white" text @click="snackbar = false">X</v-btn>
            </v-snackbar>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import HorizontalDivider from "../Utils/HorizontalDivider";

const API_URL = "http://localhost:4000/contacto";
export default {
  components: {
    HorizontalDivider
  },
  data: () => ({
    openiw: false,
    position: { lat: -17.3736, lng: -66.1467 },
    center: { lat: -17.3736, lng: -66.1467 },
    valid: true,
    snackbar: false,
    timeout: 2000,
    colorSnackbar: "",
    textSnackbar: "",
    nameRules: [
      v => !!v || "Debe introducir un nombre",
      v => (v && v.length <= 50) || "El nombre debe tener menos de 50 letras",
      v => /.*\S.*/.test(v) || "El mensaje debe contener al menos una letra"
    ],
    nombre: "",
    emailRules: [
      v => !!v || "Debe introducir un e-mail",
      v => /.+@.+\..+/.test(v) || "El E-mail debe ser valido"
    ],
    email: "",
    messageRules: [
      v => !!v || "Debe introducir un mensaje",
      v =>
        (v && v.length <= 8000) || "El mensaje debe tener menos de 8000 letras",
      v => /.*\S.*/.test(v) || "El mensaje debe contener al menos una palabra"
    ],
    mensaje: "",
    contactMessagesResult: [],
    lazy: false
  }),
  mounted: function() {
    this.openInfoWindow();
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.addMessage();
        this.reset();
        this.resetValidation();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    addMessage() {
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
          nombre: this.nombre,
          email: this.email,
          mensaje: this.mensaje
        }),
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
            this.contactMessagesResult.push(result);
          }
        });
    },
    addMessageSnackbar(successful) {
      this.colorSnackbar = successful ? "green darken-2" : "red darken-2";
      this.textSnackbar = successful
        ? "¡Gracias por enviarnos el mensa!, pronto recibiras un respuesta en tu correo."
        : "¡Algo salio mal al tratar de enviar tu mensaje!";
      this.snackbar = true;
    },

    openInfoWindow() {
      this.openiw = true;
    }
  }
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 520px;
  border: 20px solid rgb(255, 255, 255);
  border-radius: 4px;
}

.contact-card {
  height: 530px;
}
</style>