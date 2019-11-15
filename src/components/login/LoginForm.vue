<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <form>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="user"
                      label="User"
                      id="textfieldLoginUser"
                      v-model="user.user"
                      type="text"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Contraseña"
                      id="textfieldLoginPassword"
                      v-model="user.password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn
                      large
                      color="pink darken-2"
                      dark
                      id="buttonLogin"
                      @click="login()"
                    >Iniciar Sesión</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-snackbar
      id="snackbarLogins"
      :color="colorSnackbar"
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ textSnackbar }}
      <v-btn color="white" text @click="snackbar = false">X</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
const API_URL = "http://localhost:4000/login";
export default {
  data() {
    return {
      user: {
        user: "",
        password: ""
      },
      snackbar: false,
      timeout: 3000,
      colorSnackbar: "",
      textSnackbar: ""
    };
  },
  methods: {
    login() {
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.user),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(response => response.json())
        .then(result => {
          console.log(result);
          if (result.response == "Logged") {
            this.addMessageSnackbar(true);
          } else {
            this.addMessageSnackbar(false);
          }
        });
    },
    addMessageSnackbar(successful) {
      this.colorSnackbar = successful ? "green darken-2" : "red darken-2";
      this.textSnackbar = successful
        ? "¡Autentificado correctamente"
        : "¡Nombre de usuario o contraseña erroneos";
      this.snackbar = true;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>

<style>
</style>