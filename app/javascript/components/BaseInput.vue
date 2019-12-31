<template>
  <div class="form-group">
    <label>{{label}}</label>
    <input :value="value" :type="type" @input="$emit('input', $event.target.value)" class="form-control">
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: string,
        required: true
      },
      type: {
        type: string,
        default: 'text',
        validator(value) {
          return ['text', 'email', 'password'].includes(value);
        }
      },
      value: {
        type: string,
        required: true
      }
    }
  }
</script>