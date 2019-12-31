<template>
  <div class="form-group">
    <label>{{label}}</label>
    <select @change="$emit('input', $event.target.value)" class="form-control">
      <option v-for="opt in options" :key="opt.value" :value="opt.value" :selected="value === opt.value">
        {{ opt.label || 'No label'}}
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
      }
    }
  }
</script>