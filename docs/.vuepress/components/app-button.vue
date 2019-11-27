<template>
    <button class="btn btn-primary" :disable="!!this.disabled" @click="trigger">
      <span v-if="hasText"><slot></slot></span>
    </button>
</template>

<script>

export default {
  props: {
    loading: Boolean,
    disable: {
      type: String,
      default: false
    },
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  methods: {
    trigger(event) {
      if (this.preventDefault) {
        event.preventDefault();
      }
      this.$emit('click', event);
    }
  },
  computed: {
    hasText() {
      let slot = this.$slots.default;
      if (slot && slot.length > 0) {
        return true;
      }
      return false;
    }
  }
}
</script>

<style scoped>
    .footer {
        text-align: left;
        border: 1px solid;
    }
</style>