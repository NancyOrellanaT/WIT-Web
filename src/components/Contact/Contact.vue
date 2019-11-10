<template>
    <v-form
      class="formContactForm ma-12"
      ref="form"
      v-model="valid"
      :lazy-validation="lazy"
    >
      <v-text-field
        class="textfieldContactNamefield"
        v-model="nombre"
        :counter="50"
        :rules="nameRules"
        label="Nombre"
        required
      ></v-text-field>

      <v-text-field
        class="textfieldContactEmailfield"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        class="textfieldContactMessagefield"
        v-model="mensaje"
        :rules="messageRules"
        label="Message"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate(); addMessageSnackbar(true)"
      >
        Validate
      </v-btn>
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
    
</template>

<script>
  const API_URL = "http://localhost:4000/contacto";
  export default {
    data: () => ({
      valid: true,
      snackbar: false,
      timeout: 2000,
      colorSnackbar: "",
      textSnackbar: "",
      nameRules: [
        v => !!v || 'Debe Introducir un Nombre',
        v => (v && v.length <= 50) || 'El nombre debe tener menos de 50 letras',
        v => /.*\S.*/.test(v) || 'El mensaje debe contener al menos una letra',
      ],
      nombre:"",
      emailRules: [
        v => !!v || 'Debe Introducir un E-mail',
        v => /.+@.+\..+/.test(v) || 'El E-mail debe ser valido',
      ],
      email:"",
      messageRules: [
        v => !!v || 'Debe Introducir un Mensaje',
        v => (v && v.length <= 8000) || 'El mensaje debe tener menos de 8000 letras',
        v => /.*\S.*/.test(v) || 'El mensaje debe contener al menos una palabra',
      ],
      mensaje:"",
      contactMessagesResult:[],
      lazy: false,
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.addMessage()
          this.reset()
          this.resetValidation()
          console.log(this.contactMessagesResult)
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      addMessage() {
        fetch(API_URL, {
          method: "POST",
          body: JSON.stringify({ nombre: this.nombre, email: this.email, mensaje:this.mensaje }),
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
        ? "¡Gracias por enviarnos tus preferencias!, pronto estaremos contactándonos contigo."
        : "¡Cuidado! Por favor asegurate de ingresar un e-mail invalido";
      this.snackbar = true;
    }
    },
  }
</script>