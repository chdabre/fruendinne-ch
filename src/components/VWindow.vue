<template>
  <div
    class="window"
    ref="window"
    :style="windowStyle"
    @mousedown="focus"
  >
    <div class="window__title">
      <h3 class="drag-handle" ref="dragHandle">{{ title }}</h3>
      <button class="close-btn" @click="close">
        <img src="../assets/close-icon.svg" alt="Schliessen">
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
  props: {
    window: Object,
    title: String,
    color: {
      type: String,
      default: '#FFF'
    },
    size: {
      type: Object
    }
  },
  data () {
    return {
      focused: false,
      dragging: false,
      geometry: {
        top: 0,
        left: 0,
        width: 300,
        height: 200
      }
    }
  },
  created () {
    this.geometry.top = window.innerHeight / 2 + (Math.random() * window.innerHeight / 4) * (Math.random() < 0.5 ? -1 : 1) - window.innerHeight / 4
    this.geometry.left = window.innerWidth / 2 + (Math.random() * window.innerWidth / 4) * (Math.random() < 0.5 ? -1 : 1) - window.innerWidth / 4

    if (this.size) {
      this.geometry = { ...this.geometry, ...this.size }
    }

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
      if (this.$refs.window && this.$refs.window.contains(ev.target)) {
        this.geometry.width = parseInt(this.$refs.window.style.width.slice(0, -2))
        this.geometry.height = parseInt(this.$refs.window.style.height.slice(0, -2))
      }
    })
  },
  computed: {
    windowStyle () {
      return {
        ...objectMap(this.geometry, v => v + 'px'),
        zIndex: this.window.focused ? 100 : 0,
        backgroundColor: this.color
      }
    }
  },
  methods: {
    close () {
      this.$store.dispatch('closeWindow', this.window.component)
    },
    focus () {
      this.$store.dispatch('openWindow', { to: this.window.component })
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
  position: absolute;
  resize: both;
}

.drag-handle {
  flex: 1;
}
</style>
