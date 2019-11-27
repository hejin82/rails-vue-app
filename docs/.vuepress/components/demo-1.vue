<template>
    <div id="demo-1" class="footer">
        {{message}}
    </div>
</template>

<script>
export default {
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
        border: 1px solid;
    }
</style>