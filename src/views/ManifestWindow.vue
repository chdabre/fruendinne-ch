<template>
  <v-window
    :window="window"
    color="#ED7DFE"
    title="Manifest"
  >
  <template slot="content">
    Hallo das ist das Manifest
  </template>
  </v-window>
</template>

<script>
import VWindow from '../components/VWindow'

export default {
  name: 'ManifestWindow',
  props: ['window'],
  components: {
    VWindow
  }
}
</script>

<style scoped>

</style>
