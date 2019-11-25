<template>
    <div id="footer" class="footer">
        <p>This is your footer</p>
    </div>
</template>

<script>
export default {
  name: 'app-footer',
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
    .footer {
        text-align: left;
    }
</style>