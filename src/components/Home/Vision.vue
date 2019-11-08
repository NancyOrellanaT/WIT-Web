<template>
    <v-row no-gutters>
      <v-col align-self="center">
        <HorizontalDivider />
        <v-layout justify-center>
            <blockquote id="labelMessage" class="blockquote">{{ description }}</blockquote>
        </v-layout>
        <HorizontalDivider class="mb-12"/>
      </v-col>
    </v-row>
</template>

<script>
import HorizontalDivider from '../Utils/HorizontalDivider'

export default {
  components: {
    HorizontalDivider
  },
  data: () => ({
    description: 'Te invitamos a ser parte de la comunidad en las distintas áreas de la tecnología.'
  })
}
</script>