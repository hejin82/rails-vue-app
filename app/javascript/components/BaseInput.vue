<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <input
      :value="value"
      :type="type"
      class="form-control"
      :class="{
        'is-valid': validator && !validator.$error && validator.$dirty,
        'is-invalid': validator && validator.$error
      }"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: 'text',
        validator(value) {
          return ['text', 'email', 'password'].includes(value);
        }
      },
      value: {
        type: String,
        required: true
      },
      validator: {
        type: Object,
        required: false,
        // eslint-disable-next-line vue/require-default-prop
        validator($v) {
          // eslint-disable-next-line no-prototype-builtins
          return $v.hasOwnProperty('$model');
        }
      }
    }
  }
</script>