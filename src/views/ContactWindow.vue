<template>
  <component
    :is="windowImpl"
    :window="window"
    :size="{ width: 500, height: 450 }"
    color="#EDF4C0"
    title="Kontakt"
  >
    <template slot="content">
      <p>
        Du willst mehr oder weniger wissen? Möchtest gerne eine Idee mit uns teilen? Brauchst Geld für eine Abtreibung? Mal unverbindlich was trinken gehen? Auch zu uns fründinne gehören? Mal gemeinsam das Hüftgold schwingen gehen? Oder uns einfach deine Meinung geigen?<br/>
        Erreichen kannst du uns am einfachsten über DM auf instagram oder unter <a href="mailto:hotmale@fruendinne.com">hotmale@fruendinne.com</a>.
      </p>
    </template>
  </component>
</template>

<script>
import VWindow from '../components/VWindow'
import VMobileWindow from '../components/VMobileWindow'

export default {
  name: 'ContactWindow',
  props: ['window', 'desktop'],
  computed: {
    windowImpl () {
      return this.desktop ? VWindow : VMobileWindow
    }
  }
}
</script>
