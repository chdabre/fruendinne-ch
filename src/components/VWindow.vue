<template>
  <div
    class="window"
    ref="window"
    :style="windowStyle"
  >
    <div class="window__title">
      <h3 class="drag-handle" ref="dragHandle">Window Title</h3>
      <div class="spacer"></div>
      <button class="close-btn">
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
  name: 'VWindow',
  data () {
    return {
      focused: false,
      dragging: false,
      geometry: {
        top: 500,
        left: 500,
        width: 300,
        height: 200
      }
    }
  },
  created () {
    window.addEventListener('mousedown', ev => {
      // Start dragging if the dragHandle is clicked
      if (this.$refs.dragHandle && this.$refs.dragHandle.contains(ev.target)) {
        this.dragging = true
        this.focused = true
      }
    })
    window.addEventListener('mouseup', ev => {
      // Stop dragging if the mouse is released
      if (this.dragging) this.dragging = false
    })
    window.addEventListener('mousemove', ev => {
      // Move the window
      if (this.dragging) {
        this.geometry.left = ev.clientX - 16
        this.geometry.top = ev.clientY - 16
      }

      // Update the dimensions if the user is resizing the window
      if (this.$refs.window.contains(ev.target)) {
        this.geometry.width = parseInt(this.$refs.window.style.width.slice(0, -2))
        this.geometry.height = parseInt(this.$refs.window.style.height.slice(0, -2))
      }
    })
  },
  computed: {
    windowStyle () {
      return objectMap(this.geometry, v => v + 'px')
    }
  }
}

/**
 * Apply a mapping function to each of the values of its entries.
 * @param obj {Object}
 * @param fn {function} (value, key, index) => return value
 * @returns {Object}
 */
const objectMap = (obj, fn) => Object.fromEntries(
  Object.entries(obj).map(
    ([k, v], i) => [k, fn(v, k, i)]
  )
)

</script>

<style lang="scss" scoped>
.window {
  position: fixed;
  border: 5px solid black;
  resize: both;
  overflow: auto;

  background-color: #ED7DFE;
  &__title {
    display: flex;
    width: 100%;
    padding: 1rem;
    user-select: none;

    .close-btn {
      background: none;
      border: none;
    }
    .drag-handle {
      cursor: move;
    }
  }
}

.spacer { flex:  1; }
</style>
