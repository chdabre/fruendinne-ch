<template>
  <component
    :is="windowImpl"
    :window="window"
    :size="{ width: 500, height: 700 }"
    color="#ED7DFE"
    title="Manifest"
  >
    <template slot="content">
      <p>
        Wir sind ein loose definiertes Kollektiv von tollen Menschen, welche die unterschiedlichsten Ziele verfolgen und sich dabei gegenseitig unterstützen.<br/>
        Wir diskutieren, akzeptieren, spazieren, helfen, kochen, tanzen, sinnieren, hydrieren und lachen.<br/>
        Fründinne sind genau all die Menschen, die ihren Müll richtig entsorgen und dir die Haare zurückhalten, solltest du dich übergeben müssen.<br/>
        Auf dieser Website zeigen wir, was wir schon alles auf die Beine gestellt haben oder noch auf die Beine stellen wollen. <br/>
        Wahrscheinlich, wenn du bis hier gelesen hast und dich angesprochen fühlst, bist du auch eine fründin und wusstest es einfach noch nicht.
      </p>
    </template>
  </component>
</template>

<script>
import VWindow from '../components/VWindow'
import VMobileWindow from '../components/VMobileWindow'

export default {
  name: 'ManifestWindow',
  props: ['window', 'desktop'],
  computed: {
    windowImpl () {
      return this.desktop ? VWindow : VMobileWindow
    }
  }
}
</script>
