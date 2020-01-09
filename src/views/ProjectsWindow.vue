<template>
  <component
    :is="windowImpl"
    :window="window"
    color="#1EFED4"
    title="Projekte"
  >
    <template slot="content">
      <p>
        Wir würden gerne jedes dieser Projekte erklären und im Detail vorstellen, aber leider ist das Maximum für Wörter auf dieser Seite bereits aufgebraucht. Bis wir genug Geld zusammen haben um uns mehr zu leisten, gibts direkte Links zum Durchstöbern.<br>

        RUN NORBERT RUN: http://runnorbertrun.herokuapp.com/
        Connässeur / BERN HACKT:  https://www.youtube.com/watch?v=tNT2g7JOnj8&feature=emb_title
        Fründinne Podcast: https://open.spotify.com/show/0HrIowmdB9nmnvMt5D0Z4T
        Incredible instagram: https://www.instagram.com/fruendinne/
      </p>
    </template>
  </component>
</template>

<script>
import VWindow from '../components/VWindow'
import VMobileWindow from '../components/VMobileWindow'

export default {
  name: 'ProjectsWindow',
  props: ['window', 'desktop'],
  computed: {
    windowImpl () {
      return this.desktop ? VWindow : VMobileWindow
    }
  }
}
</script>
