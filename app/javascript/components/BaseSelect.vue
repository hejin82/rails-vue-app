<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <select
      class="form-control"
      :class="{
        'is-valid': validator && !validator.$error,
        'is-invalid': validator && validator.$error
      }"
      @change="$emit('input', $event.target.value)"
    >
      <option v-for="opt in options" :key="opt.value" :value="opt.value" :selected="value === opt.value">
        {{ opt.label || 'No label' }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true,
      validator(opts) {
        return !opts.find(opt => typeof opt !== 'object');
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
};
</script>
