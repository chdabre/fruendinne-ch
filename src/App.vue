<template>
  <div id="app">
    <div class="content-container">
      <nav class="main-nav">
        <ul>
          <li>MANIFEST</li>
          <li>PROJECTS</li>
          <li>SHOP</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </div>

    <v-window></v-window>
  </div>
</template>

<script>
import VWindow from './components/VWindow'
export default {
  components: { VWindow }
}
</script>

<style lang="scss">
@font-face {
  font-family: Lemon/Milk;
  font-weight: bold;
  src: url("assets/fonts/LemonMilkbold.otf") format("opentype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
