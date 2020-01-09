<template>
  <component
    :is="windowImpl"
    :window="window"
    :size="{ width: 300, height: 500 }"
    color="#82A3FE"
    title="Shop"
  >
    <template slot="content">
      <p>
        Laptops ohne fründinne Sticker ist wie Tanzen ohne Musik: nicht schön.<br/>
        Wenn du den fründinne-Sticker auch auf deinem Laptop willst, flüstere es uns über instagram ins Ohr. <br/>
        Ausserdem gibt’s “Dasch e chilli bitch”-Sticker in zwei Ausführungen. Nebenbei empfehlen wir wirklich, ganz sicher nicht, auf gar keinen Fall diese tollen Sticker auf fremdes Eigentum wie beispielsweise SVP Plakate zu kleben; aber sie würden halten.<br/>
      </p>
    </template>
  </component>
</template>

<script>
import VWindow from '../components/VWindow'
import VMobileWindow from '../components/VMobileWindow'

export default {
  name: 'ShopWindow',
  props: ['window', 'desktop'],
  computed: {
    windowImpl () {
      return this.desktop ? VWindow : VMobileWindow
    }
  }
}
</script>
