<template>
  <v-window
    :window="window"
    color="#ED7DFE"
    title="Manifest"
  >
    <ManifestContent slot="content" />
  </v-window>
</template>

<script>
import VWindow from '../components/VWindow'
import ManifestContent from './ManifestContent'

export default {
  name: 'ManifestWindow',
  props: ['window'],
  components: {
    ManifestContent,
    VWindow
  }
}
</script>
