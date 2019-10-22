<template>
  <div>
    <v-app-bar app>
      <v-btn text>
        <v-toolbar-title class="headline text-uppercase">
          <span><router-link tag="span" to="/">Women in Technology</router-link></span>
        </v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text>
        <router-link tag="span" to="/contact">Contact</router-link>
      </v-btn>
    </v-app-bar>
    <nav>
      
    </nav>
  </div>
</template>

<style>
.routerlink{
  color: black;
}
</style>