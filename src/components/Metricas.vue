<template>
  <v-container>
   <h2 align="center">METRICAS</h2>
   <v-row>
        <v-col>
            <h3 align="center"> {{titles.t1}} </h3>
        </v-col>
        <v-col>
            <h3 align="center"> {{titles.t2}} </h3>
        </v-col>
        <v-col>
            <h3 align="center"> {{titles.t3}} </h3>
        </v-col>
   </v-row>
   <v-row justify="space-around" >
    
       <v-img v-for="image in images" :src="image.src" :key="image" max-height="300" max-width="300" aspect-ratio="1"> </v-img>
    
   </v-row>
   <v-row justify="space-around">
        <v-col>
         <v-layout justify-center>
            <blockquote class="blockquote">{{descriptions.d1}}</blockquote>
        </v-layout>
       
        </v-col>
        <v-col>
         <v-layout justify-center>
            <blockquote class="blockquote">{{descriptions.d2}}</blockquote>
        </v-layout>
        </v-col>
        <v-col>
         <v-layout justify-center>
            <blockquote class="blockquote">{{descriptions.d3}}</blockquote>
        </v-layout>
        </v-col>
   </v-row>
  </v-container>
</template>

<script>
export default{
    data: () => (
        {
            titles: {
                t1: 'Diversidad',
                t2: 'Comunidades',
                t3: 'Mujeres trabajando'
            },
            images: [
                {src: require('@/assets/diversidad.jpg')},
                {src: require('@/assets/comunidad.jpg')},
                {src: require('@/assets/poder.jpg')}
            ],
            descriptions: {
                d1: 'Las miembros de las comunidades, son mujeres con experiencia en diferentes ramas de la tecnologia',
                d2: 'Existen 8 comunidades en Cochabamba que trabajan por la integracion de la mujer en el area de la tecnologia ',
                d3: 'Se ha roto esa brecha de genero, mostrando las capacidades de la mujer'

            }
        }
    )
}
</script>