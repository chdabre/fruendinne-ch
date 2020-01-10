<template>
  <component
    :is="windowImpl"
    :window="window"
    :size="{ width: 400, height: 600 }"
    color="#1EFED4"
    title="Projekte"
  >
    <template slot="content">
      <p>
        Wir würden gerne jedes dieser Projekte erklären und im Detail vorstellen, aber leider ist das Maximum für Wörter auf dieser Seite bereits aufgebraucht. Bis wir genug Geld zusammen haben um uns mehr zu leisten, gibts direkte Links zum Durchstöbern.<br>
        <br/>

        <section class="projects">
          <article class="project">
            <h4>RUN NORBERT RUN:</h4>
            <a href="http://runnorbertrun.herokuapp.com/" target="_blank">LIVE</a>
            <a href="https://github.com/chdabre/baselhack-fruendinne/" target="_blank">GitHub</a>
          </article>
          <article class="project">
            <h4>Connässeur / BERN HACKT</h4>
            <a href="https://www.youtube.com/watch?v=tNT2g7JOnj8&feature=emb_title" target="_blank">BärnHäckt</a>
            <a href="https://github.com/chdabre/bernhackt-filmimperium-fruendinne" target="_blank">GitHub</a>
          </article>
          <article class="project">
            <h4>Fründinne Podcast</h4>
            <img src="../assets/images/PodcastCover.jpg">
            <a href="https://open.spotify.com/show/0HrIowmdB9nmnvMt5D0Z4T" target="_blank">Spotify</a>
          </article>
          <article class="project">
            <h4>Incredible instagram</h4>
            <a href="https://www.instagram.com/fruendinne/" target="_blank">Instagram</a>
          </article>
        </section>
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

<style lang="scss" scoped>
.projects {
  .project {
    margin-top: 10px;
    display: block;
    a { display: block; }
  }
}
</style>
