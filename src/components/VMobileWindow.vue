<template>
  <div
    class="mobile-window"
    :style="windowStyle"
  >
    <div class="mobile-window__title">
      <h3 class="drag-handle" ref="dragHandle">{{ title }}</h3>
      <div class="spacer"></div>
      <button class="close-btn" @click="$router.push('/')">
        <img src="../assets/close-icon.svg">
      </button>
    </div>

    <div class="mobile-window__content">
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

  border: 5px solid black;
  resize: both;
  overflow: auto;

  &__title {
     display: flex;
     width: 100%;
     padding: 1rem;
     user-select: none;
     text-transform: uppercase;

    .close-btn {
      background: none;
      border: none;
    }
  }
  &__content {
    padding: 0 1rem 1rem 1rem;
  }
}
.spacer { flex:  1; }
</style>
