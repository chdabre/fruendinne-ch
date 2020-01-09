<template>
  <div id="app">
    <div class="content-container">
      <div class="logo">
        <img src="./assets/logo.svg">
      </div>

      <nav class="main-nav">
        <ul>
          <li><router-link to="manifest">Manifest</router-link></li>
          <li><router-link to="projects">Projekte</router-link></li>
          <li><router-link to="shop">Shop</router-link></li>
          <li><router-link to="contact">Kontakt</router-link></li>
        </ul>
      </nav>
    </div>
    <template v-if="isDesktop">
      <component
        v-for="(window, index) in windows"
        :is="window.component" :key="index"
        :window="window"
        :desktop="isDesktop"
      ></component>
    </template>
    <template v-else>
      <router-view></router-view>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isDesktop: false
    }
  },
  created () {
    window.addEventListener('resize', () => this.setDesktop())
    this.setDesktop()
  },
  computed: {
    ...mapState(['windows'])
  },
  methods: {
    setDesktop () {
      this.isDesktop = window.innerWidth > 500
    }
  }
}
</script>

<style lang="scss">
@import "style/main";
</style>
