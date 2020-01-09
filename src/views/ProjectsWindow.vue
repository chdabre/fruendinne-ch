<template>
  <v-window
    :window="window"
    title="Projexts"
  >
  <template slot="content">
    Hallo das ist unserse Projeketet
  </template>
  </v-window>
</template>

<script>
import VWindow from '../components/VWindow'

export default {
  name: 'ProjectsWindow',
  props: ['window'],
  components: {
    VWindow
  }
}
</script>

<style scoped>
</style>
