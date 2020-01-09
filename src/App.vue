<template>
  <div id="app">
    <div class="content-container">
      <nav class="main-nav">
        <ul>
          <li><router-link to="manifest">MANIFEST</router-link></li>
          <li><router-link to="projects">PROJECTS</router-link></li>
          <li><router-link to="shop">SHOP</router-link></li>
          <li><router-link to="contact">CONTACT</router-link></li>
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
      this.isDesktop = window.innerWidth > 450
    }
  }
}
</script>

<style lang="scss">
@import "style/fonts";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  color: black;
  text-decoration: none;
}

.content-container {
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;

  border: 6px solid black;
}

.main-nav {
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  li {
    list-style: none;
    text-align: right;
    font-size: 32px;
    font-family: 'Lemon/Milk', sans-serif;
    font-weight: bold;
    letter-spacing: 1px;
  }
}

h3 {
  font-family: 'Lemon/Milk', sans-serif;
}
</style>
