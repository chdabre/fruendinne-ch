<template>
  <div
    class="mobile-window window"
    :style="windowStyle"
  >
    <div class="window__title">
      <h3 class="drag-handle" ref="dragHandle">{{ title }}</h3>
      <div class="spacer"></div>
      <button class="close-btn" @click="$router.push('/')">
        <img src="../assets/close-icon.svg">
      </button>
    </div>

    <div class="window__content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VMobileWindow',
  props: {
    title: String,
    color: {
      type: String,
      default: '#FFF'
    }
  },
  computed: {
    windowStyle () {
      return {
        backgroundColor: this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mobile-window {
  position: absolute;
  top: 2rem;
  left: 2rem;
  right: 2rem;
  min-height: calc(100% - 4rem);
}
.spacer { flex:  1; }
</style>
